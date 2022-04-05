# -*- coding: utf-8 -*-

from odoo import models, fields, api

class Estampador(models.Model):
    _name = 'campo.estampador'
    _description = 'Cadastro de Estampadores'

    cidade = fields.Char('Cidade')
    nome = fields.Char('Nome')
    cnpj = fields.Char('CNPJ')
    cep = fields.Char('Cep')

    # serpro = fields.Many2one('id.serpro', 'SERPRO')
# class IdSerpro(models.Model):
#     _name = 'id.serpro'
#     _descrption = 'Tabela de Ids'
#
#     name = fields.Char('Serpro')
#     responsavel = fields.Many2one('res.partner', 'id_estampador', domain=[('id_estampador', '=', True)])