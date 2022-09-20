from http.client import HTTPResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html') 

def receita(request):
    return render(request, 'receita.html')