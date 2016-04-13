# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-03-26 22:35
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('curator', '0010_auto_20160326_2207'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rawarticle',
            name='source_feed',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='source_feed', to='curator.SourceFeed'),
        ),
    ]
