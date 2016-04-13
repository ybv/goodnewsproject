import base64
import logging
from urllib import unquote_plus

from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.conf import settings
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q

from rest_framework.authtoken.models import Token
from rest_framework import status, mixins
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.renderers import TemplateHTMLRenderer, JSONRenderer
from rest_framework import generics,  permissions, serializers
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, permission_classes, renderer_classes, authentication_classes

from curator.models import RawArticle, SourceFeed, ArticleClassification
from curator.serializers import RawArticleSerializer, SourceFeedSerializer
from curator.utils import was_curator_invited, activate_curator, check_login_details

logger = logging.getLogger(__name__)

class LogoutCurator(APIView):
    queryset = User.objects.all()

    def get(self, request, format=None):
        # simply delete the token to force a login
        print request.user
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)

class LoginCurator(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)
    renderer_classes = (JSONRenderer,)

    def post(self, request, format=None):
        resp = {
            "success" : False
        }
        email = request.POST.get('email')
        password = request.POST.get('password')
        user, msg = check_login_details(email, password)
        if not user:
            resp.update({
            "msg": msg
            })
        else:
            token, _ = Token.objects.get_or_create(user=user)
            resp.update({
                "token" : token.key,
                "success": True
            })

        return Response(resp)

class CompletedRegistration(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)
    renderer_classes = (JSONRenderer,)

    def post(self, request, email_sha, format=None):
        resp = {
            "success" : False
        }

        try:
            if was_curator_invited(email_sha):
                username = request.POST.get('username')
                password = request.POST.get('password')
                first_name = request.POST.get('first_name')
                last_name = request.POST.get('last_name')
                email = base64.b64decode(unquote_plus(email_sha))
                user, msg = activate_curator(username, password, email, first_name, last_name)

                if user:
                    token, _ = Token.objects.get_or_create(user=user)
                    resp.update({
                        "token" : token.key,
                        "success": True
                    })
                else:
                    resp.update({
                        "msg" : msg,
                        "success": False
                    })
            else:
                resp.update({
                    "msg" : "You were not invited",
                    "success": False
                })

        except Exception as e:
            logger.warn(u"Exception when signing up curator {e}".format(e=e))

        return Response(resp)

class ArticleList(generics.ListCreateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = RawArticleSerializer

    def get_queryset(self):
        all_user_curated_articles = ArticleClassification.objects.filter(user=self.request.user).values_list('article__id', flat=True)
        return RawArticle.objects.all().exclude(id__in=all_user_curated_articles)

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        return self.list(request, *args, **kwargs)


class ArticleDetail(APIView):
    def get_object(self, pk):
        try:
            print pk
            return RawArticle.objects.get(pk=pk)
        except RawArticle.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        article = self.get_object(pk)
        article_serializer = RawArticleSerializer(article)
        return Response(article_serializer.data)

    def post(self, request, pk):
        article = self.get_object(pk)
        sentiment = request.data.get('sentiment')
        resp = {'success': False}

        if sentiment == 'good':
            sentiment_score = 1.0
        if sentiment == 'bad':
            sentiment_score = 0.0
        if sentiment == 'neutral':
            sentiment_score = 0.5

        user = request.user
        try:
            a, created = ArticleClassification.objects.get_or_create(article=article, user=user)
            if created:
                a.sentiment = sentiment_score
                a.save()
            resp.update({
                'success': True
            })
        except Exception as e:
            logger.info(u"exception: {e} when registering curation value by {u}".format(e=e, u=user))

        return Response(resp)


@api_view()
# @permission_classes([permissions.IsAuthenticated])
@renderer_classes([JSONRenderer])
# @authentication_classes([TokenAuthentication])
def search_articles(request):
    resp = {"success": False}
    search_query = request.GET.get('q')

    if not search_query:
        return Response(resp)

    artilces_matching_queries = RawArticle.objects.filter(title__icontains=search_query).values('title', 'id')
    result_articles = []
    for article in artilces_matching_queries:
        result_articles.append({"value": article.get('id'), "label": article.get('title')})

    resp.update({"success": True, "results": result_articles})
    return Response(resp)


class SourceFeedList(generics.ListCreateAPIView):
    queryset = SourceFeed.objects.all()
    serializer_class = SourceFeedSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        resp = {'success': False}
        try:
            s = SourceFeed.objects.get_or_create(url=request.data.get('url'), name=request.data.get('name'),
                created_by=request.user)
            resp.update({
                'success': True
            })
        except Exception as e:
            logger.warn(u"exception when saving source feed {e}".format(e=e))

        return Response(resp)
