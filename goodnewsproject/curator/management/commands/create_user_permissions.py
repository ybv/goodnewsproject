from django.contrib.auth.models import User, Group, Permission
from django.contrib.contenttypes.models import ContentType
from django.core.management import BaseCommand

from curator.models import SourceFeed

class Command(BaseCommand):
    help = "Creates curator group permissions"

    def handle(self, *args, **options):
        content_type = ContentType.objects.get_for_model(SourceFeed)
        add_permission, created = Permission.objects.get_or_create(codename='can_add_feed',
                                       name='Can Create Source Feed',
                                       content_type=content_type)
        update_permission, created = Permission.objects.get_or_create(codename='can_update_feed',
                                                                      name='Can Create Source Feed',
                                                                      content_type=content_type)
        new_group, created = Group.objects.get_or_create(name='curators')
        new_group.permissions.add(add_permission)
        new_group.permissions.add(update_permission)
        # when creating user objects for curators, do user.groups.add('curators')
