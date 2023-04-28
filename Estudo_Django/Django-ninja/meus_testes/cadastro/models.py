from django.db import models

class User (models.Model):
  name = models.CharField(max_length=100)
  email = models.TextField()
  usuario = models.CharField(max_length=100, null=True, blank=True)
  
  def __str__(self):
    return self.name