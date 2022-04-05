# -*- coding: utf-8 -*-


from odoo import models, fields, api
from odoo.exceptions import UserError

class BotaoConsulta(models.Model):
    _inherit = 'res.partner'
    _description = 'Consulta Serpro'

    def botao_consulta_serpro(self):
        if self.l10n_br_cnpj_cpf and self.state_id:
            if self.state_id.code == 'AL':
                raise UserError(_(u'Alagoas doesn\'t have this service'))
            if self.state_id.code == 'RJ':
                raise UserError(_(
                    u'Rio de Janeiro doesn\'t have this service'))

