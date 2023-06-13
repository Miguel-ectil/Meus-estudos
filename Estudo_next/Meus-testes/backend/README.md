# Sistema Dvr Backend

## Configurando o ambiente de desenvolvimento

### Variaveis de ambiente

Criar um arquivo .env com as seguintes variaveis de ambiente:

```
SECRET_KEY=django-insecure-h-%uv^qdj0thvwf5d=^t22ubd02wd9iu-n(=vp1sr#7_zo2s^d
DEBUG=True
JWT_SIGNING_KEY=LjJhJTaR59
JWT_ACCESS_EXPIRY=600
```
 
### Criando venv

``` python -m venv .venv ```

### Instalando dependencias

``` source .venv/bin/activate ```

``` pip install -r requirements.txt ```

ou para Dev

``` pip install -r requirements-dev.txt ```

## Criar ou Aplicar Migrações

``` python manage.py makemigrations ```

``` python manage.py migrate ```

## Criar usuário admin

``` python manage.py createsuperuser ```

## Rodar o servidor

``` python manage.py runserver ```