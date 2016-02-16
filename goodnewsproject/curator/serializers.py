from django.contrib.auth.models import User

from rest_framework import serializers
from curator.models import Article, SourceFeed


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'headline', 'content', 'image_links', 'authors', 'tags', 'possible_links', 'date_published', 'date_crawled')

class SourceFeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = SourceFeed
        fields = ('id', 'source_details', 'url')

class CuratorSerializer(serializers.ModelSerializer):
    sourcefeeds  = serializers.PrimaryKeyRelatedField(many=True, queryset=SourceFeed.objects.all())
    class Meta:
        model = User
        fields = ('id', 'first_name', 'sourcefeeds')
