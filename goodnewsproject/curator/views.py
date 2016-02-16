from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics,  permissions, serializers
from rest_framework.authentication import SessionAuthentication

from curator.models import Article, SourceFeed
from curator.serializers import ArticleSerializer, SourceFeedSerializer, CuratorSerializer

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
    authentication_classes = (SessionAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class SourceFeedDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SourceFeed.objects.all()
    serializer_class = SourceFeedSerializer
    authentication_classes = (SessionAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)


class CuratorList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = CuratorSerializer


class CuratorDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = CuratorSerializer
