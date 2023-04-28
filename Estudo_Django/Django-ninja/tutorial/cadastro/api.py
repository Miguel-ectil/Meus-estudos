from ninja import ModelSchema, NinjaAPI, Schema, UploadedFile
from .models import Livro
import json
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict

api = NinjaAPI()

@api.get('livro/')
def listar(request):
  livro = Livro.objects.all()
  response = [{'id': i.id, 'titulo': i.titulo, 'descricao': i.descricao, 'autor': i.autor} for i in livro]
#   print(response)
  return response

@api.get('livro/{id}')
def listar_livro(request, id: int):
  livro = get_object_or_404(Livro, id=id)
  return model_to_dict(livro)

@api.get('livro_consulta/')
def listar_livro_consulta(request, id: int = 1):
  livro = get_object_or_404(Livro, id=id)
  return model_to_dict(livro)

'''  class LivroSchema(Schema):
      titulo: str
      descricao: str
      autor: str = None '''

class LivroSchema(ModelSchema):
  class Config:
    model = Livro
    model_fields = "__all__"
    # model_fields = ['titulo', 'descricao', 'autor']

# from typing import List
# List[LivroSchema]

@api.post('livro', response=LivroSchema)
def livro_criar(request, livro: LivroSchema):
  l1 = livro.dict()
  livro = Livro(**l1)
  livro.save()
  return livro

@api.post('/file')
def file_upload(request, file: UploadedFile):
  print(file.size)
  return file.size