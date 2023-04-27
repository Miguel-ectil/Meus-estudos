from django.db import models

class Livro (models.Model):
  titulo = models.CharField(max_length=100)
  descricao = models.TextField()
  autor = models.CharField(max_length=100, null=True, blank=True)
  
  def __str__(self):
    return self.titulo