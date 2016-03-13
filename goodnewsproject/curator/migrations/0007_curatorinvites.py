# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-03-05 20:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curator', '0006_auto_20160216_0527'),
    ]

    operations = [
        migrations.CreateModel(
            name='CuratorInvites',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('curator_email', models.EmailField(max_length=254)),
                ('invite_accepted', models.BooleanField()),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
