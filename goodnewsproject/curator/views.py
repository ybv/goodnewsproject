import base64
import logging

from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.conf import settings

from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics,  permissions, serializers
from rest_framework.authentication import TokenAuthentication

from curator.models import Article, SourceFeed
from curator.serializers import ArticleSerializer, SourceFeedSerializer, CuratorSerializer
from curator.utils import was_curator_invited, activate_curator

logger = logging.getLogger(__name__)


class CompletedRegistration(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'curator_welcome.html'

    def post(self, request, email_sha, format=None):
        resp = {
            "success" : False
        }

        if was_curator_invited(email_sha):
            try:
                username = request.POST.get('username')
                password = request.POST.get('password')
                email = base64.b64decode(email_sha)
                activate_curator(username, password, email)
                token = Token.objects.create(user=user)
                resp.update({
                    "token" : token.key,
                    "success": True
                })
            except Exception as e:
                logger.warn(u"Exception when signing up curator {e}".format(e=e))

        return Response(resp)

    def get(self):
        return Response()

class ArticleList(APIView):
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
