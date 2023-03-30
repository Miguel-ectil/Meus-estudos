from django.shortcuts import render
from rest_framework import viewsets, generics
from my_api.models import Cadastro
from my_api.serializer import CadastroSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

# Create your views here.
class CadastroViewSet(viewsets.ModelViewSet):
  serializer_class = CadastroSerializer

  def get_queryset(self):
    queryset = Cadastro.objects.all() 
    return queryset
    
  def post(self, request):
    serializer = CadastroSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
       
  # queryset = Cadastro.objects.all()  # define o conjunto de dados a ser usado
  # serializer_class = CadastroSerializer