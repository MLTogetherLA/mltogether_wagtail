# Generated by Django 2.2.5 on 2019-09-09 01:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_create_homepage'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='description',
            field=models.CharField(default='home page', max_length=250),
            preserve_default=False,
        ),
    ]