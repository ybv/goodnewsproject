from __future__ import unicode_literals

from django.db import models
from django.contrib.gis.db import models as gis_models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User

# Create your models here.

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Country(BaseModel):
    name = models.CharField(max_length=800)

class Location(BaseModel):
    latitude = models.FloatField(blank=True)
    longitude = models.FloatField(blank=True)

class Author(BaseModel):
    formatted_name = models.CharField(max_length=800)

class Source(BaseModel):
    name = models.CharField(max_length=800)
    domain = models.CharField(max_length=800)
    country = models.ManyToManyField(Author)
    
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

class Feed(BaseModel):
    source_name = models.OneToOneField(Source)
    url = models.CharField(primary_key=True, max_length=400)

class ArticleClassification(BaseModel):
    user = models.OneToOneField(User)
    article = models.OneToOneField(Article)
    sentiment = models.FloatField(default=0.0)
    
    
