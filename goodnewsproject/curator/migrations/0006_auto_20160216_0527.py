# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-02-16 05:27
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('curator', '0005_article_source'),
    ]

    operations = [
        migrations.AddField(
            model_name='country',
            name='location',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='curator.Location'),
        ),
        migrations.AlterField(
            model_name='source',
            name='country',
            field=models.ManyToManyField(to='curator.Country'),
        ),
    ]