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
    url = models.CharField(max_length=400, blank=True)
    created_by = models.ForeignKey(User)

    def __unicode__(self):
        return u"{1}({0})".format(self.url, self.name)

class Tag(BaseModel):
    name = models.CharField(max_length=800)

class CuratorInvites(BaseModel):
    curator_email = models.EmailField()
    invite_sent = models.BooleanField(default=False)
    invite_accepted = models.BooleanField()

class RawArticle(models.Model):
    source_feed = models.ForeignKey(SourceFeed, related_name='source_feed')
    url = models.CharField(max_length=400)
    content = JSONField()
    title = models.CharField(max_length=800, blank=True)
    date_crawled = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.source_feed.name + self.url

class ArticleClassification(BaseModel):
    user = models.ForeignKey(User)
    article = models.ForeignKey(RawArticle)
    sentiment = models.FloatField(default=0.0)
