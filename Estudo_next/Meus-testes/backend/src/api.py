# Ninja imports
from ninja import NinjaAPI, Router
from ninja.parser import Parser
from ninja.errors import HttpError, ValidationError


#  Django imports
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password


# Other imports
import orjson
from src.auth import AuthBearer
from src.schema import LoginSchema, TokenSchema


# Modulos
from src.contact.api import router as contact_router


auth = AuthBearer()


# Classe de serialização 
class OrjsonParser(Parser):
    def parser_body(self, request):
        return orjson.loads(request.body)


api = NinjaAPI(parser=OrjsonParser())


# Rotas do API
api.add_router('', contact_router, tags=["Contatos"])


# Função para autenticar o usuário
@api.post('/login', tags=["Auth"])
def login(request, data: LoginSchema):
    try:
        user_model = get_user_model().objects.get(username=data.username)
    except get_user_model().DoesNotExist as exc:
        raise HttpError(404, "Usuario não encontrado") from exc
    passwords_match = check_password(data.password, user_model.password)
    if not passwords_match:
        return 201, {"msg": "Senha incorreta"}

    access = auth.create_token(user_model.username)
    return 200, TokenSchema(token=access)
