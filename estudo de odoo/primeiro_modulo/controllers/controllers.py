# -*- coding: utf-8 -*-
# from odoo import http


# class PrimeiroModulo(http.Controller):
#     @http.route('/primeiro_modulo/primeiro_modulo/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/primeiro_modulo/primeiro_modulo/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('primeiro_modulo.listing', {
#             'root': '/primeiro_modulo/primeiro_modulo',
#             'objects': http.request.env['primeiro_modulo.primeiro_modulo'].search([]),
#         })

#     @http.route('/primeiro_modulo/primeiro_modulo/objects/<model("primeiro_modulo.primeiro_modulo"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('primeiro_modulo.object', {
#             'object': obj
#         })
