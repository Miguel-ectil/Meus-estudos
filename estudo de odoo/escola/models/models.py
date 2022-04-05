# -*- coding: utf-8 -*-

from odoo import models, fields, api
from odoo.exceptions import UserError, ValidationError

class escola(models.Model):
    _name = 'notas.escola'
    _description = 'Cadastro de Notas'

    name = fields.Many2one('alunos.escola', string='Nome dos Alunos')
    disciplina = fields.Many2one('disciplinas.escola','Disciplina')
    instituicao = fields.Many2one('instituicao.escola','Nome da Escola')
    nota1 = fields.Float('Primeiro Bimestre')
    nota2 = fields.Float('Segundo Bimestre')
    nota3 = fields.Float('Terceiro Bimestre')
    nota4 = fields.Float('Quarto Bimestre')
    media = fields.Float('Média Final', compute="_calculo_media", store=True)

    @api.depends('nota1','nota2','nota3','nota4')
    def _calculo_media(self):
        for registro in self:
            registro.media = (self.calcula_nota(registro.nota1) +
                              self.calcula_nota(registro.nota2) +
                              self.calcula_nota(registro.nota3) +
                              self.calcula_nota(registro.nota4)) / 4
            # if registro.nota1 >= 0 and registro.nota2 >= 0 and registro.nota3 >= 0 and registro.nota4 >= 0:
            #     if (registro.nota1 <= 10 and registro.nota2 <= 10 and registro.nota3 <= 10 and registro.nota4 <= 10):
            #         registro.media = (registro.nota1 + registro.nota2 + registro.nota3 + registro.nota4)/4
            #     else:
            #         raise ValidationError('Não é possivel incluir notas acima de 10')
            # else:
            #     raise ValidationError('Não é possivel incluir notas abaixo de 0')

    def calcula_nota(self,nota):
        if 0 <= nota <= 10:
            return nota
        else:
            raise ValidationError('Não é possivel incluir notas abaixo de 0 e acima de 10')

class Aluno(models.Model):
    _name = 'alunos.escola'
    _description = 'Tabela de Alunos'

    name = fields.Char('Nome do Aluno')
    data_nasc = fields.Date('Data de Nascimento')

class Disciplinas(models.Model):
    _name = 'disciplinas.escola'
    _description = 'Tabela de Disciplinas'

    name = fields.Char('Disciplina')
    responsavel = fields.Many2one('professor.escola','Professor')

class Professor(models.Model):
    _name = 'professor.escola'
    _description = 'Professores'

    name = fields.Char('Professor')

class Instituicao(models.Model):
    _name = 'instituicao.escola'
    _description = 'instituicao de Ensino'

    name = fields.Char('Nome do colégio')