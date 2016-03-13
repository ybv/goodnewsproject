import logging

from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from curator.models import CuratorInvites
from curator.utils import send_email

logger = logging.getLogger(__name__)

class Command(BaseCommand):
    help = "Invites a new user to be a curator"

    def add_arguments(self, parser):
        parser.add_argument('--email_id', nargs='+')

    def handle(self, *args, **options):
        for email_id in options['email_id']:
            c, _ = CuratorInvites.objects.get_or_create(curator_email=email_id, invite_accepted=False, invite_sent=False)
            if not c.invite_sent and not c.invite_accepted:
                send_email(type="invite_curator", to=email_id)
                logging.info(u"sent email to {e}".format(e=email_id))
                c.invite_sent = True
                c.save()
            else:
                logging.info(u"already sent email to {e} not sending again".format(e=email_id))
