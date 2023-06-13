# Django-Ninja imports
from ninja import Router

# Api imports
from .api_models.contact import router as contact_router

# Adicionando Rotas
router = Router()
router.add_router('', contact_router, tags=["Contatos"])
