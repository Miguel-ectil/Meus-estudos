from django.contrib import admin
from django.urls import path
from .api import api

urlpatterns = [
    path('', api.urls),
    path('admin/', admin.site.urls),
]
