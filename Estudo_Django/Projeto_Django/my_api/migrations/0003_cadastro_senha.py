# Generated by Django 4.1.7 on 2023-03-30 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_api', '0002_alter_cadastro_idade'),
    ]

    operations = [
        migrations.AddField(
            model_name='cadastro',
            name='senha',
            field=models.CharField(default='sua_senha_aqui', max_length=100),
        ),
    ]
