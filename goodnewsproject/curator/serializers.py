from django.contrib.auth.models import User

from rest_framework import serializers
from curator.models import RawArticle, SourceFeed


class RawArticleSerializer(serializers.ModelSerializer):
    source_feed = serializers.StringRelatedField()

    class Meta:
        model = RawArticle
        fields = ('id' , 'url', 'content', 'source_feed')


class SourceFeedSerializer(serializers.ModelSerializer):
    created_by = serializers.SlugRelatedField(
       queryset=User.objects.all(),
       slug_field='username'
    )

    class Meta:
        model = SourceFeed
        fields = ( 'name' , 'url', 'created_by')
