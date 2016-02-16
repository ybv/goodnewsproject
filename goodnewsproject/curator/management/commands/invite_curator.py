from django.core.management import BaseCommand

class Command(BaseCommand):
    help = "Invites a new user to be a curator"

    def add_arguents(self, parser):
        parser.add_arguents('email_id', nargs='+', type=string)

    def handle(self, *args, **options):
        for email_id in options['email_id']:
            pass
