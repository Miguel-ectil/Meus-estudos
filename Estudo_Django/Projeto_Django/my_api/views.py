from django.shortcuts import render
from rest_framework import viewsets, generics
from my_api.models import Cadastro
from my_api.serializer import CadastroSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.shortcuts import render, get_object_or_404, redirect

# Create your views here.
class CadastroViewSet(APIView):
  serializer_class = CadastroSerializer
    
  def get_queryset(self):
    queryset = Cadastro.objects.all()
    return queryset

  def get(self, request, *args, **kwargs):
    queryset = self.get_queryset()
    serializer = CadastroSerializer(queryset, many=True)
    return Response(serializer.data) 
    
  def post(self, request, *args, **kwargs):
    query_data = request.data
    new_cliente = Cadastro.objects.create()
    new_cliente.save()
    serializer = CadastroSerializer(new_cliente)
    return Response(serializer.data)  
  
  def delete(self, request, id):
    categoria = get_object_or_404(Cadastro.objects.all(), id=id)
    categoria.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  
get_serializer_class = CadastroViewSet.as_view() 

  # queryset = Cadastro.objects.all()  # define o conjunto de dados a ser usado
  # serializer_class = CadastroSerializer