# -*- coding: utf-8 -*-


from odoo import models, fields, api
from odoo.exceptions import UserError

class SerproSefaz(models.Model):
    _inherit = 'res.partner'

    def check_serpro(self):
        if self.l10n_br_cnpj_cpf and self.state_id:
            if self.state_id.code == 'AL':
                raise UserError(_(u'Alagoas doesn\'t have this service'))


    def check_sefaz(self):
        if self.l10n_br_cnpj_cpf and self.state_id:
            if self.state_id.code == 'AL':
                raise UserError(_(u'Alagoas doesn\'t have this service'))