
valor = float(input('Valor a ser pago? R$'))
print('FORMAS DE PAGAMENTO? ')
print('\033[34m[1]\033[m Á vista Dinheiro/cheque')
print('\033[34m[2]\033[m A vista cartão')
print('\033[34m[3]\033[m 2x no cartão')
print('\033[34m[4]\033[m 3x ou mais nocartão ')
opcão = int(input('Qual é a opcão? '))

if opcão == 1:
    total = valor - (valor * 10 / 100)
elif(opcão == 2):
    total = valor - (valor * 0.05)
elif(opcão == 3):
    total = valor
    parcela = total / 2
    print('Sua compra será parcelada em 2x de R${:.2f} SEM JUROS'.format(parcela))
elif opcão == 4:
    total = valor + (valor * 20 / 100)
    totparc = int(input('Quantas parcelas? '))
    parcela = total / totparc
    print('Sua compra será parcelada em {}x de R${:.2f} COM JUROS'.format(totparc, parcela))
    print('Sua compra de R${:.2f} vai custar R${:.2f} no final.'.format(valor, total))
else:
    total = 0
    print('OPCÃO INVÁLIDA de pagamento, Intente novamente!')