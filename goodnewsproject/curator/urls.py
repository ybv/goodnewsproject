from django.conf.urls import url

from rest_framework.urlpatterns import format_suffix_patterns

from curator import views

urlpatterns = [
    url(r'^$', views.ArticleList.as_view()),
    url(r'^(?P<pk>[0-9]+)/$', views.ArticleDetail.as_view()),
    url(r'^feeds/$', views.FeedList.as_view()),
    url(r'^feeds/(?P<pk>[0-9]+)/$', views.FeedDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
