# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-03-21 01:37
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('curator', '0007_auto_20160321_0136'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rawarticle',
            name='source_feed',
        ),
        migrations.AddField(
            model_name='rawarticle',
            name='source_feed',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='curator.SourceFeed'),
            preserve_default=False,
        ),
    ]
