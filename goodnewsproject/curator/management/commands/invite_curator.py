import logging
import urllib

from django.core.management.base import BaseCommand
from curator.models import CuratorInvites
from curator.utils import send_curator_invite

logger = logging.getLogger(__name__)

class Command(BaseCommand):
    help = "Invites a new user to be a curator"

    def add_arguments(self, parser):
        parser.add_argument('--email_id', nargs='+')

    def handle(self, *args, **options):
        if not options['email_id']:
            logging.error(u"need to specify --email_id to send invite")
            return
            
        for email_id in options['email_id']:
            send_curator_invite(curator_email=email_id)
