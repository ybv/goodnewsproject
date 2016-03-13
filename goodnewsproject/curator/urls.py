from django.conf.urls import include, url, patterns
from django.views.generic import TemplateView

from rest_framework.urlpatterns import format_suffix_patterns

from curator import views

urlpatterns = [
    url(r'^register/(?P<email_sha>\w+)/$', views.CompletedRegistration.as_view()),
    url(r'^login/$', views.ArticleList.as_view()),
    url(r'^articles/$', views.ArticleList.as_view()),
    url(r'^articles/^(?P<pk>[0-9]+)/$', views.ArticleDetail.as_view()),
    url(r'^source-feeds/$', views.SourceFeedList.as_view()),
    url(r'^source-feeds/(?P<pk>[0-9]+)/$', views.SourceFeedDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
