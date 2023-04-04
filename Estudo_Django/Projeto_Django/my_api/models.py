from django.db import models

# Create your models here.

class Cadastro(models.Model):
  id = models.AutoField(primary_key=True) # Definindo o 'id' como chave
  name = models.CharField(max_length=80)
  idade = models.CharField(max_length=8)
  cpf = models.CharField(max_length=11)
  senha = models.CharField(max_length=100, default='sua_senha_aqui')

  def __str__(self):
    return self.name