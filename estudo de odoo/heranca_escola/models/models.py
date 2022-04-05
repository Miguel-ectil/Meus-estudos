#-*- coding: utf-8 -*-

from odoo import models, fields, api
from odoo.exceptions import UserError, ValidationError


class ResPartner(models.Model):
    _inherit = 'res.partner'

    data_nasc = fields.Date('Data Nasc.')
    e_aluno = fields.Boolean('É um Aluno(a)')
    e_professor = fields.Boolean('É um Professor(a)')


class escola_heranca(models.Model):
    _name = 'escola.heranca'
    _description = 'Cadastrando Notas'

    name = fields.Many2one('res.partner', string='Nome dos Alunos', domain=[('e_aluno','=',True)])
    disciplinas = fields.Many2one('disciplinas.heranca', 'Disciplinas')
    instituicao = fields.Many2one('res.company', 'Nome da Escola')
    nota1 = fields.Float('Primeiro Bimestre')
    nota2 = fields.Float('Segundo Bimestre')
    nota3 = fields.Float('Terceiro Bimestre')
    nota4 = fields.Float('Quarto Bimestre')
    media = fields.Float('Média Final', compute="_calculo_media", store=True)

    @api.depends('nota1', 'nota2', 'nota3', 'nota4')
    def _calculo_media(self):
        for registro in self:
            registro.media = (self.calcula_nota(registro.nota1) +
                              self.calcula_nota(registro.nota2) +
                              self.calcula_nota(registro.nota3) +
                              self.calcula_nota(registro.nota4)) / 4

    def calcula_nota(self, nota):
        if 0 <= nota <= 10:
            return nota
        else:
            raise ValidationError('Não é possivel incluir notas abaixo de 0 ou acima de 10')

class Disciplinas(models.Model):
    _name = 'disciplinas.heranca'
    _description = 'Tabela de Disciplinas'

    name = fields.Char('Disciplina')
    responsavel = fields.Many2one('res.partner','Professor', domain=[('e_professor','=',True)])
'|=================================================================================================|'

class Aluno(models.Model):
    _name = 'alunos.heranca'
    _description = 'Tabela de Alunos'

    name = fields.Char('Nome do Aluno')
    data_nasc = fields.Date('Data de Nascimento')
'|=================================================================================================|'

class Professor(models.Model):
    _name = 'professor.heranca'
    _description = 'Professores'

    name = fields.Char('Professor')
'|=================================================================================================|'


class Instituicao(models.Model):
    _name = 'instituicao.heranca'
    _description = 'instituicao de Ensino'

    name = fields.Char('Nome do colégio')
'|=================================================================================================|'
