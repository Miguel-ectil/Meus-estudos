<<<<<<< HEAD
# -*- coding: utf-8 -*-


from odoo import models, fields, api
from odoo.exceptions import UserError

class ResPartner(models.Model):
    _inherit = 'res.partner'

    # estampador = fields.Boolean('Estampador')
    name = fields.Char('Nome')
    teste_1 = fields.Char('Teste_1')
    teste_2 = fields.Char('Teste_2')
    teste_3 = fields.Float('Teste_3')
    teste_4 = fields.Char('Teste_4')
    teste_5 = fields.Integer('Teste_5')
    teste_6 = fields.Boolean('Teste_6')
    estampa = fields.Char('Estamapa')
    teste_7 = fields.Integer('Teste_7')
    teste_8 = fields.Boolean('Teste_8')
    teste_9 = fields.Float('Teste_9')
    teste_10 = fields.Integer('Teste_10')

# class KlkPartner(models.Model):
#     _inherit = 'res.partner'

    # name = fields.Char('Nome')
    # teste_1 = fields.Char('Teste_1')
    # teste_2 = fields.Char('Teste_2')
    # teste_3 = fields.Float('Teste_3')
    # teste_4 = fields.Char('Teste_4')
=======
# -*- coding: utf-8 -*-


from odoo import models, fields, api
from odoo.exceptions import UserError

class ResPartner(models.Model):
    _inherit = 'res.partner'

    # estampador = fields.Boolean('Estampador')
    name = fields.Char('Nome')
    teste_1 = fields.Char('Teste_1')
    teste_2 = fields.Char('Teste_2')
    teste_3 = fields.Float('Teste_3')
    teste_4 = fields.Char('Teste_4')
    teste_5 = fields.Integer('Teste_5')
    teste_6 = fields.Boolean('Teste_6')
    estampa = fields.Char('Estamapa')
    teste_7 = fields.Integer('Teste_7')
    teste_8 = fields.Boolean('Teste_8')
    teste_9 = fields.Float('Teste_9')
    teste_10 = fields.Integer('Teste_10')

# class KlkPartner(models.Model):
#     _inherit = 'res.partner'

    # name = fields.Char('Nome')
    # teste_1 = fields.Char('Teste_1')
    # teste_2 = fields.Char('Teste_2')
    # teste_3 = fields.Float('Teste_3')
    # teste_4 = fields.Char('Teste_4')
>>>>>>> ada4db41a5cb295d1466b9878ae1d7268408a4f2
    # teste_5 = fields.Integer('Teste_5')