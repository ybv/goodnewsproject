#!/bin/sh
ENV='PROD'
SITE_URL='http://104.207.148.127/'
DB_PASSWORD='123Password'
DB_NAME='gnpdb'
DB_USER='postgres'
ENV=$ENV SITE_URL=$SITE_URL DB_PASSWORD=$DB_PASSWORD DB_USER=$DB_USER /root/goodnewsproject/venv/bin/python /root/goodnewsproject/goodnewsproject/goodnewsproject/manage.py runserver 0.0.0.0:80
