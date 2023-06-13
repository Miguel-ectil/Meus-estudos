# Django imports
from ninja import Router

router = Router()


@router.get('/contatos', tags=["Contatos"])
def get_contacts():
    pass
