from my_api.views import CadastroViewSet
from rest_framework import routers
from . import views
from django.urls import re_path, path, include

router = routers. DefaultRouter()
router.register(r'cadastro', CadastroViewSet, basename='Cadastro')

urlpatterns = [
    path('', views.get_serializer_class)
]