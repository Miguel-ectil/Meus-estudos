from datetime import date
print('====== ano bissexto! ======')

ano = int(input('digita o ano que deseja analizar? '))
if ano == 0:
    ano = date.today().year
if ano % 4 == 0 and ano % 100 != 0 or ano % 400 == 0:
    print('O ano {} é um ano BISSEXTO!'.format(ano))
else:
    print('O ano {} Não é BISSEXTO!'.format(ano))