from rest_framework import serializers
from my_api.models import Cadastro 

class CadastroSerializer(serializers.ModelSerializer):
  class Meta:
    model = Cadastro
    fields = ['id', 'name', 'idade', 'cpf']