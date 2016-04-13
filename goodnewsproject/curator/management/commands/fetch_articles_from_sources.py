import logging
import urllib

import newspaper
from django.core.management.base import BaseCommand
from curator.models import RawArticle, SourceFeed
from curator.utils import send_curator_invite

logger = logging.getLogger(__name__)

class Command(BaseCommand):
    help = "Fetches articles from available sources"

    def fetch_and_save_articles(self,source):
        np = newspaper.build(source.url,memoize_articles=False)

        for article in np.articles:
            try:
                article.download()
                article.parse()
                if not all([article.url, article.title]):
                    continue

                content = {}
                content.update({
                    'title' : article.title,
                    'text' : article.text,
                    'html' : article.html
                })
                logger.info(u"paring article with url :{u}".format(u=article.url))

                try:
                    r = RawArticle.objects.get(source_feed=source, url=article.url)
                    r.content = content
                    r.title = article.title
                    r.save()
                except RawArticle.DoesNotExist:
                    r = RawArticle.objects.create(source_feed=source, url=article.url, title=article.title, content=content)
            except Exception as e:
                logger.warn(u"exception {e} when parsing article {a} from source {s}".format(e=e, a=article, s=source))
                continue


    def handle(self, *args, **options):
        sources = SourceFeed.objects.all()
        for source in sources:
            self.fetch_and_save_articles(source)
