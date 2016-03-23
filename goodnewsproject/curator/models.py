from __future__ import unicode_literals

from django.db import models
from django.contrib.gis.db import models as gis_models
from django.contrib.postgres.fields import ArrayField, JSONField
from django.contrib.auth.models import User

# Create your models here.

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Location(BaseModel):
    latitude = models.FloatField(blank=True)
    longitude = models.FloatField(blank=True)

class Author(BaseModel):
    formatted_name = models.CharField(max_length=800)

class SourceFeed(BaseModel):
    name = models.CharField(max_length=800, blank=True)
    domain = models.CharField(max_length=800, blank=True)
    url = models.CharField(max_length=400, blank=True)
    created_by = models.OneToOneField(User)

class Tag(BaseModel):
    name = models.CharField(max_length=800)

class Article(BaseModel):
    headline = models.CharField(max_length=800)
    content = models.TextField(blank=True)
    image_links  = ArrayField(models.CharField(max_length=200), blank=True)
    authors = models.ManyToManyField(Author)
    possible_links = ArrayField(models.CharField(max_length=200), blank=True)
    tags = models.ManyToManyField(Tag)
    date_published = models.DateTimeField('date published', blank=True, null=True)
    date_crawled = models.DateTimeField(auto_now=True)
    source = models.OneToOneField(SourceFeed, null=True, blank=True)

class ArticleClassification(BaseModel):
    user = models.OneToOneField(User)
    article = models.OneToOneField(Article)
    sentiment = models.FloatField(default=0.0)

class CuratorInvites(BaseModel):
    curator_email = models.EmailField()
    invite_sent = models.BooleanField(default=False)
    invite_accepted = models.BooleanField()

class RawArticle(models.Model):
    source_feed = models.ForeignKey(SourceFeed)
    url = models.CharField(primary_key=True, max_length=400)
    content = JSONField()

    def __unicode__(self):
        return self.source + self.url
