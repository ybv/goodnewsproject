from rest_framework import serializers
from curator.models import Article, Feed


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'headline', 'content', 'image_links', 'authors', 'tags', 'possible_links', 'date_published', 'date_crawled')

class FeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feed
        fields = ('id', 'source_details', 'url')
