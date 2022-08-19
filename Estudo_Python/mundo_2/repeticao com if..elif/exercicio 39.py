from _datetime import date
sex = str(input('Qual é o seu sexo? [F]/[M] ')).strip()
if(sex == 'H'):
    print('Vocè não precisa fazer alistamento obrigatório')

atual = date.today().year
nasc = int(input('digite a sua data de nascimento: '))
idade = atual-nasc
print('Quem nasceu em {} tem {} anos em {}'.format(nasc, idade, atual))
if idade == 18:
    print('Você tem que se alistar IMEDIATAMENTE!')
elif (idade < 18):
    saldo = 18 - idade
    print('Ainda faltam {} anos para o seu alistamento'.format(saldo))
    ano = atual + saldo
    print('O seu alistamento será em {}'.format(ano))
else:
    saldo = idade - 18
    print('Você já deveria ter se alistado a {} anos'.format(saldo))
    ano = atual -  saldo
    print('O seu alistamento foi em {} ano'.format(ano))
