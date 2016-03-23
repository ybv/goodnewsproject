from django.contrib.auth.models import User

from rest_framework import serializers
from curator.models import Article, SourceFeed


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'headline', 'content', 'image_links', 'authors', 'tags', 'possible_links', 'date_published', 'date_crawled')

class SourceFeedSerializer(serializers.ModelSerializer):
    created_by = serializers.SlugRelatedField(
       queryset=User.objects.all(),
       slug_field='username'
    )

    class Meta:
        model = SourceFeed
        fields = ('id', 'name', 'domain', 'url', 'created_by')

class CuratorSerializer(serializers.ModelSerializer):
    sourcefeeds  = serializers.PrimaryKeyRelatedField(many=True, queryset=SourceFeed.objects.all())
    class Meta:
        model = User
        fields = ('id', 'first_name', 'sourcefeeds')

class CuratorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User

    def to_native(self, obj):
        """Remove password field when serializing an object"""
        ret = super(UserSerializer, self).to_native(obj)
        del ret['password']
        return ret
