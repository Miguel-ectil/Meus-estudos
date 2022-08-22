casa = float(input('Qual é o valor da casa? '))
salario = float(input('informe o seu salario: '))
anos = int(input('Em quantos anos pretende pagar a casa? '))
prest = casa / (anos * 12)
minimo = (salario * 30) / 100
print('Para pagar uma casa de \033[31mR${}\033[mR$ em \033[31m{}\033[m anos'.format(casa, anos), end='')
print(' A prestação mensal sera de R${:.2f}'.format(prest))
if prest <= minimo:
   print('\033[4;7;31mE O SEU EMPRESTIMO SERA CONSEDIDO!\033[m')
else:
    print('\033[1;34;40mE O SEU EMPRESTIMO SERA NEGADADO!\033[m')

print(minimo)