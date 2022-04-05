<<<<<<< HEAD
# -*- coding: utf-8 -*-

# ERP Brasil
from erpbrasil.assinatura import certificado
from pytrustnfe.certificado import Certificado
from pytrustnfe.nfe import consulta_cadastro

# Bibliotecas
import re
import base64
from odoo import models, fields, api
from odoo import _, api, fields
from odoo.exceptions import UserError, ValidationError

from dvr.dvr_serpro import Serpro

import urllib3
urllib3.disable_warnings()


class SerproSefaz(models.Model):
    _inherit = 'res.partner'
    
    estampador = fields.Char(string='Teste')
    

    def check_serpro(self):
        cert = self.env.user.company_id.certificate_nfe_id.file
        senha = self.env.user.company_id.certificate_nfe_id.password
        
        if not self.env.user.company_id.certificate_nfe_id:
            raise UserError(_("Certificado não encontrado"))

        certificados = certificado.Certificado(cert,senha)
        cnpj = self.cnpj_cpf
        cnpj = re.sub('[^0-9]', '', cnpj)
        security = len(cnpj)
        
        if cnpj == "28462418000130":
            raise UserError(_("CNPJ de Fabricante"))

        if not security == 14 :
            raise UserError(_("CNPJ Errado"))            
                
        r = Serpro.consulta_estampador_filtro(certificado=certificados,cnpj=cnpj)
        data = r.json()
        print(data)
        if data:
            inf = data.get('_embedded').get('estampadores')
            for id in inf:
                dado = id
=======
# -*- coding: utf-8 -*-

# ERP Brasil
from erpbrasil.assinatura import certificado
from pytrustnfe.certificado import Certificado
from pytrustnfe.nfe import consulta_cadastro

# Bibliotecas
import re
import base64
from odoo import models, fields, api
from odoo import _, api, fields
from odoo.exceptions import UserError, ValidationError

from dvr.dvr_serpro import Serpro

import urllib3
urllib3.disable_warnings()


class SerproSefaz(models.Model):
    _inherit = 'res.partner'
    
    estampador = fields.Char(string='Teste')
    

    def check_serpro(self):
        cert = self.env.user.company_id.certificate_nfe_id.file
        senha = self.env.user.company_id.certificate_nfe_id.password
        
        if not self.env.user.company_id.certificate_nfe_id:
            raise UserError(_("Certificado não encontrado"))

        certificados = certificado.Certificado(cert,senha)
        cnpj = self.cnpj_cpf
        cnpj = re.sub('[^0-9]', '', cnpj)
        security = len(cnpj)
        
        if cnpj == "28462418000130":
            raise UserError(_("CNPJ de Fabricante"))

        if not security == 14 :
            raise UserError(_("CNPJ Errado"))            
                
        r = Serpro.consulta_estampador_filtro(certificado=certificados,cnpj=cnpj)
        data = r.json()
        print(data)
        if data:
            inf = data.get('_embedded').get('estampadores')
            for id in inf:
                dado = id
>>>>>>> ada4db41a5cb295d1466b9878ae1d7268408a4f2
            self.estampador = dado['id']