import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser


class Contact(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    # Campos de registro de ação
    create_at = models.DateTimeField(auto_now_add=True)
    create_uid = models.ForeignKey(
        'self', related_name="user_created_contact", on_delete=models.CASCADE, db_column="create_uid", null=True, blank=True)
    update_at = models.DateTimeField(auto_now=True)
    update_uid = models.ForeignKey(
        'self', related_name="user_updated_contact", on_delete=models.CASCADE, db_column="update_uid", null=True, blank=True)
    
    # Tenant model
    tenant = models.ForeignKey(
        'Company', related_name='tenant_contact', on_delete=models.CASCADE, null=True, blank=True)
    
    # Campos Normais
    name = models.CharField(max_length=100)
    fantasy_name = models.CharField(
        max_length=100, null=True, blank=True)
    email = models.EmailField(max_length=100)
    rg = models.CharField(max_length=9, null=True, blank=True)
    cpf = models.CharField(max_length=11, null=True, blank=True)
    cnpj = models.CharField(max_length=14, null=True, blank=True)
    inscricao_estadual = models.CharField(max_length=255 , null=True, blank=True)
    razao_social = models.CharField(max_length=255 , null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    mobile = models.CharField(max_length=20, null=True, blank=True)
    
    # Companhia
    is_company = models.BooleanField(default=False)
    company = models.ForeignKey(
    'Company', related_name='company_contact', on_delete=models.CASCADE, null=True, blank=True)
    
    # Endereço
    cep = models.CharField(max_length=8, null=True, blank=True)
    street = models.CharField(max_length=255, null=True, blank=True)
    number = models.CharField(max_length=255, null=True, blank=True)
    complement = models.CharField(max_length=255, null=True, blank=True)
    district = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    state = models.CharField(max_length=255, null=True, blank=True)
    country = models.CharField(max_length=255, null=True, blank=True)
    sepro_id = models.CharField(max_length=255, null=True, blank=True)
    

    class Meta:
        db_table = 'res_partner'
        verbose_name = 'Contato'
        verbose_name_plural = 'Contatos'
        unique_together = ('name', 'company')
        

    def __str__(self):
        return self.name
  

class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    # Campos de registro de ação
    create_at = models.DateTimeField(auto_now_add=True)
    create_uid = models.ForeignKey(
        'self', related_name="user_created_user", on_delete=models.CASCADE, db_column="create_uid", null=True, blank=True)
    update_at = models.DateTimeField(auto_now=True)
    update_uid = models.ForeignKey(
        'self', related_name="user_updated_user", on_delete=models.CASCADE, db_column="update_uid", null=True, blank=True)
    
    # Tenant model
    tenant = models.ForeignKey(
        'Company', related_name='tenant_user', on_delete=models.CASCADE, null=True, blank=True)



    class Meta:
        db_table = 'res_user'
        verbose_name = 'Usuário'
        verbose_name_plural = 'Usuários'
    
    
class Company(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    # Campos de registro de ação
    create_at = models.DateTimeField(auto_now_add=True)
    create_uid = models.ForeignKey(
        User, related_name="user_created_company", on_delete=models.CASCADE, db_column="create_uid", null=True, blank=True)
    update_at = models.DateTimeField(auto_now=True)
    update_uid = models.ForeignKey(
        User, related_name="user_updated_company", on_delete=models.CASCADE, db_column="update_uid", null=True, blank=True)
    
    # Tenant model
    tenant = models.ForeignKey(
        'self',  on_delete=models.CASCADE, null=True, blank=True)
    
    # Campos Normais
    name = models.CharField(max_length=100)
    is_estampador = models.BooleanField(default=False)
    is_fabricante = models.BooleanField(default=False)
    certificate_path = models.CharField(max_length=100, blank=True, null=True)
    certificate_password = models.CharField(max_length=100, blank=True, null=True)
    contact = models.ForeignKey(
        Contact, on_delete=models.CASCADE,related_name="contact_company", null=True, blank=True)
    pessoas = models.ManyToManyField(
        User, related_name="users_company", blank=True)
 
    
    class Meta:
        db_table = 'res_company'
        verbose_name = 'Empresa'
        verbose_name_plural = 'Empresas'

    def __str__(self):
        return self.name



