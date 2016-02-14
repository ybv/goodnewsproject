from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from curator.models import Article, Feed
from curator.serializers import ArticleSerializer, FeedSerializer
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics


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


class FeedList(generics.ListCreateAPIView):
    queryset = Feed.objects.all()
    serializer_class = FeedSerializer


class FeedDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Feed.objects.all()
    serializer_class = FeedSerializer

