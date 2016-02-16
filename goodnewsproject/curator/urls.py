from django.conf.urls import include, url, patterns

from rest_framework.urlpatterns import format_suffix_patterns

from curator import views

urlpatterns = [
    url(r'^articles/$', views.ArticleList.as_view()),
    url(r'^articles/^(?P<pk>[0-9]+)/$', views.ArticleDetail.as_view()),
    url(r'^source-feeds/$', views.SourceFeedList.as_view()),
    url(r'^source-feeds/(?P<pk>[0-9]+)/$', views.SourceFeedDetail.as_view()),
    url('^invites/', include('inviter.urls', namespace = 'inviter')),
]

urlpatterns = format_suffix_patterns(urlpatterns)
