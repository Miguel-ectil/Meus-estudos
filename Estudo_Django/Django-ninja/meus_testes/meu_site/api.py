# Ninja imports
from django.http import HttpRequest
from ninja import NinjaAPI
from ninja.parser import Parser

#  API imports
from apps.stock.api import router as stock_router
from apps.serpro.api import router as serpro_router
from apps.fiscal.api import router as fiscal_router


# Other imports
import time
import orjson


class OrjsonParser(Parser):
    def parser_body(self, request: HttpRequest):
        return orjson.loads(request.body)


# Declaração do Django-Ninja
api = NinjaAPI(parser=OrjsonParser())

# Adicionando o router do leitor
api.add_router("/", stock_router, tags=["Requisisoes_cadastro"])
# Adicionando o router do serpro
api.add_router("/", serpro_router, tags=["Lista"])
# Adicionando o router para o fiscal
api.add_router("/", fiscal_router, tags=["Fiscal"])
