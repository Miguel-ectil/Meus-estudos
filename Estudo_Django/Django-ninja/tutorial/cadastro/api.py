from ninja import NinjaAPI
from .models import Livro
import json
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict

import orjson
from ninja.parser import Parser
from django.http import HttpRequest

class ORJSONParser(Parser):
  def parse_body(self, request: HttpRequest):
    return orjson.loads(request.body)

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