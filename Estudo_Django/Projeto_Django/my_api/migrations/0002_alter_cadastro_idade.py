# Generated by Django 4.1.7 on 2023-03-28 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cadastro',
            name='idade',
            field=models.CharField(max_length=8),
        ),
    ]
