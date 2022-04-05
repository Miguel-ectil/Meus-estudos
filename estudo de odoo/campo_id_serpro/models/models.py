# -*- coding: utf-8 -*-

from odoo import models, fields, api

class Respartner(models.Model):
    _inherit = 'res.partner'
    _description = 'id estampador'

    estampador = fields.Char('Id Estampador')