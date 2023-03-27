from django.db import models

# Create your models here.

class Cadastro(models.Model):
  name = models.CharField(max_length=80)
  idade = models.IntegerField()
  cpf = models.CharField(max_length=11)
  