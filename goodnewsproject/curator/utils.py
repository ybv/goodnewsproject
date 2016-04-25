import base64
import logging
import collections
from urllib import quote, unquote

from validate_email import validate_email
import requests

from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.conf import settings
from django.utils import timezone
from curator.models import CuratorInvites

logger = logging.getLogger(__name__)

def send_curator_invite(curator_email=None):
    # if invite is aready sent and not accepted dont create a new invite
    if not curator_email:
        logging.error(u"can't invite without an email")
        return

    c, _ = CuratorInvites.objects.get_or_create(curator_email=curator_email, invite_accepted=False)
    send_email(type="invite_curator", to=curator_email)
    logging.info(u"sent email to {e}".format(e=curator_email))
    c.invite_sent = True
    c.save()
    logging.info(u"saving invite information for {e}".format(e=curator_email))


def activate_curator(username, password, email, first_name, last_name):
    if not all([username, password, email, first_name, last_name]):
        return (False, 'Provide all fields')

    user = None

    try:
        user = User.objects.get(email=email)
        if user:
            return (False, 'You have already created an account.')
    except User.DoesNotExist:
        user = User.objects.create_user(username=username, email=email, password=password, first_name=first_name, last_name=last_name)
        user.is_active = True
        user.save()

    c_invites = CuratorInvites.objects.filter(curator_email=email).order_by('-created_at')

    if not c_invites:
        logger.warn(u"couldn't find a curator invite for activated curator with email {e}".format(e=email))
        return (False, 'You were not invited')

    c_invite = c_invites[0]
    c_invite.invite_accepted = True
    c_invite.save()

    return (user, 'All Good')


def was_curator_invited(emailsha):
    if not emailsha:
        return False

    try:
        email = unquote(base64.b64decode(emailsha))
        email = email.decode('unicode-escape')
    except Exception as e:
        logging.error(u"Error when decoding emailsha")
        return False

    is_valid = validate_email(email)
    if not is_valid:
        return False

    sent_invites = CuratorInvites.objects.filter(curator_email=email).order_by('-created_at')

    if not sent_invites:
        logger.warn(u"curator with email {e} wasn't invited".format(e=email))
        return False
    else:
        sent_invite = sent_invites[0]

    sent_time = sent_invite.created_at
    time_diff = timezone.now() - sent_time

    #put this in settings file
    if time_diff.days > 200:
        return False

    sent_invite.invite_accepted = True
    sent_invite.save()

    return True


def check_login_details(email, password):
    if not all([email, password]):
        return (False, "Provide all fields")

    if not validate_email(email):
        return (False, "Not a valid email")

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return (False, "Please ask for an invite to sign up.")


    u_valid = user.check_password(password)
    if not u_valid:
        return (False, "Invalid Credentails")
    else:
        return (user, "All good")


def get_curator_invite_link(email):
    email_sha = quote(base64.b64encode(email))
    return "{host}curate/register/complete/{email_sha}/".format(host=settings.SITE_URL, email_sha=email_sha)

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
