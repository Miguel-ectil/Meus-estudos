# -*- coding: utf-8 -*-
{
    'name': "Aplicativo Escolar",

    'summary': """
      Aplicativo Escolar""",

    'description': """
        Aplicativo Escolar
    """,

    'author': "Miguel Ectil",
    'website': "https://github.com/Miguel-ectil",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Aulas_odoo',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/views.xml',
    ],

}
