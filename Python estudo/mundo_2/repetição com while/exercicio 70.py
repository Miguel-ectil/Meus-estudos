
total = maismil = menor = cont = 0
barato = 0
# print('-=-' * 10)
print('{:=^40}'.format(' LOJA SUPER BARATÃO '))
# print('-=-' * 10)

while True:
    produto = str(input('Nome do Produto: '))
    preço = float(input('R$'))
    cont += 1
    total += preço
    if preço > 1000:
        maismil += 1
    if cont == 1 or preço < menor:
        menor = preço
        barato = produto
    # else:
    #      if preço < menor:
    #          menor = preço
    #          barato = produto
    res = ' '
    while res not in 'SN':
        res = str(input('Quer continuar? [S/N]')).strip().upper()[0]
    if res == 'N':
        break

print('{:-^40}'.format(' FIM DO PROGRAMA '))
print(f'O total da compra foi R${total:.2f}')
print(f'Temos {maismil} produtos que custando mais de R$1000')
print(f'O produto mais barato foi {barato} que custa R${menor:.2f}')