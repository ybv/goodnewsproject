import base64
import logging
from urllib import unquote_plus

from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.conf import settings
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt

from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.renderers import TemplateHTMLRenderer, JSONRenderer
from rest_framework import generics,  permissions, serializers
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, permission_classes, renderer_classes

from curator.models import Article, SourceFeed
from curator.serializers import ArticleSerializer, SourceFeedSerializer, CuratorSerializer
from curator.utils import was_curator_invited, activate_curator, check_login_details

logger = logging.getLogger(__name__)

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


class ArticleList(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)


class ArticleDetail(APIView):
    def get_object(self, pk):
        try:
            return Article.objects.get(pk=pk)
        except Article.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        article = self.get_object(pk)
        article_serializer = ArticleSerializer(article)
        return Response(article_serializer.data)


class SourceFeedList(generics.ListCreateAPIView):
    queryset = SourceFeed.objects.all()
    serializer_class = SourceFeedSerializer
    created_by = serializers.ReadOnlyField(source='created_by.username')
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class SourceFeedDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SourceFeed.objects.all()
    serializer_class = SourceFeedSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
