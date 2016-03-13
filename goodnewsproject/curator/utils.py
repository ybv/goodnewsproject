import base64
import datetime
import logging
import collections

import requests

from django.contrib.auth.models import User
from django.conf import settings
from curator.models import CuratorInvites

logger = logging.getLogger(__name__)

def send_curator_invite():
    pass

def activate_curator(username, password, email):
    User.objects.create_user(username=username, password=password, email=email)
    user.username = username
    user.password = password
    user.is_active = True
    user.save()

    try:
        c = CuratorInvites.objects.get(curator_email=email)
        c.invite_accepted = True
        c.save()
    except CuratorInvites.DoesNotExist:
        logger.warn(u"couldn't find a curator invite for activated curator with email {e}".format(e=email))


def was_curator_invited(emailsha):
    if not emailsha:
        return False
    email = base64.b64decode(emailsha)
    try:
        sent_invite = CuratorInvites.objects.get(curator_email=email, invite_accepted=False)
    except CuratorInvites.DoesNotExist:
        logger.warn(u"curator with email {e} wasn't invited".format(e=email))
        return False
    else:
        sent_time = sent_invite.created_at()
        time_diff = datetime.now() - sent_time

        if time_diff.days > 2:
            return False

        sent_invite.invite_accepted = True
        sent_invite.save()

    return True

def get_curator_invite_link(email):
    email_sha = base64.b64encode(email)
    return "{host}register/{email_sha}".format(host=settings.SITE_URL, email_sha=email_sha)

def get_curator_invite_email_message(email):
    return '''
    Thanks for choosing to be a curator at The Good News Project, let's get started by signing up here:
    \n {url}'''.format(url=get_curator_invite_link(email))

def get_subject_and_message(type, email=None, username=None):
    Email = collections.namedtuple('Email', 'subject content')
    email_messages = {}

    email_messages.update({
        "invite_curator" :  Email(subject="Hey there, let's start curating The Good News Project", content=get_curator_invite_email_message(email))
        })
    return email_messages.get(type)


def send_email(type, to):
    email_details = get_subject_and_message(type, email=to)

    if not email_details:
        return

    headers = {
        "Authorization" : "699f080ab3ebce1953e93a3990afdc92c0f62f30"
    }
    payload = {
        "content": {
          "from": "sandbox@sparkpostbox.com",
          "subject": email_details.subject,
          "text": email_details.content
        },
        "recipients": [{ "address": to }]
    }
    r = requests.post("https://api.sparkpost.com/api/v1/transmissions", json=payload, headers=headers)
    print r.status_code
