from django.http import HttpResponse
from ninja import ModelSchema, NinjaAPI, Schema, UploadedFile
from .models import User
import json
from ninja import Router, File, Form
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict

router = Router()
api = NinjaAPI()

@api.get('user/')
def listar(request):
  user = User.objects.all()
  response = [{'id': i.id, 'name': i.name, 'email': i.email, 'usuario': i.usuario, 'senha': i.senha,} for i in user]
#   print(response)
  return response

# @api.get('user/{id}')
# def listar_livro(request, id: int):
#   user = get_object_or_404(User, id=id)
#   return model_to_dict(user)

class UserSchema(ModelSchema):
  class Config:
    model = User
    model_fields = "__all__"

@router.post('user', response=UserSchema)
def livro_criar(request, user: UserSchema):
  l1 = user.dict()
  user = User(**l1)
  user.save()
  return user

@api.get('livro_consulta/')
def listar_livro_consulta(request, id: int = 1):
  user = get_object_or_404(User, id=id)
  return model_to_dict(user)

@api.put('user_atualiza/')
def listar_user_altera(request, id: int):
  try:
    user = get_object_or_404(User, id=id)
    user_data = {
      'name': user.name,
      'email': user.email,
      'usuario': user.usuario,
      'senha': user.senha
    }
    return HttpResponse(json.dumps(user_data), content_type='application/json')
  except User.DoesNotExist:
    return HttpResponse(status=404, content="User não encontrado")
  except Exception as e:
    return HttpResponse(status=500, content=f"Erro ao obter informações do User: {str(e)}")