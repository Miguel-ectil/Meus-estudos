from django.shortcuts import render
from rest_framework import viewsets, generics
from my_api.models import Cadastro
from my_api.serializer import CadastroSerializer

# Create your views here.
class CadastroViewSet(viewsets.ModelViewSet):
  queryset = Cadastro.objects.all()
  serializer_class = CadastroSerializer
  
#   def get_queryset(self):
#     queryset = Cadastro.objects.filter(Cadastro_id = self.kwargs['PK'])
#     return queryset
#     serializer_class = CadastroSerializer