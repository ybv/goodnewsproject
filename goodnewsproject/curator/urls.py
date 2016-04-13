from django.conf.urls import include, url, patterns
from django.views.generic import TemplateView

from rest_framework.urlpatterns import format_suffix_patterns

from curator import views

urlpatterns = [
    url(r'^register-complete/(?P<email_sha>.+)/$', views.CompletedRegistration.as_view(), name='register-complete'),
    url(r'^login-check/$', views.LoginCurator.as_view()),
    url(r'^logout-curator/$', views.LogoutCurator.as_view()),
    url(r'^api/articles/$', views.ArticleList.as_view()),
    url(r'^api/articles/search/$', views.search_articles),
    url(r'^api/article/classify/(?P<pk>[0-9]+)/$', views.ArticleDetail.as_view()),
    url(r'^api/sourcefeeds/$', views.SourceFeedList.as_view()),
    url(r'^', TemplateView.as_view(template_name='router/app.html'), name='react-router'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
