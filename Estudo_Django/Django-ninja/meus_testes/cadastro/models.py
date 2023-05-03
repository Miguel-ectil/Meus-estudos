from django.db import models

class User (models.Model):
  name = models.CharField(max_length=100)
  usuario = models.CharField(max_length=100, null=True, blank=True)
  senha = models.CharField(max_length=100, null=True)
  email = models.TextField()
  def __str__(self):
    return self.name
  
  
  # class User (models.Model):
  # id = models.CharField(max_length=100)
  # sendAt = models.CharField(max_length=100, null=True, blank=True)
  # deleteAt = models.CharField(max_length=100, null=True)
  # email = models.TextField()
  # def __str__(self):
  #   return self.name