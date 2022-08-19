
resp = 'S'
soma = cont = média = maior = menor = 0
while resp in 'Ss':
    nu = int(input('Digite un número: '))
    cont += 1
    soma += nu
    if cont == 1:
        maior = menor = nu
    else:
        if nu > maior:
            maior= nu
        if nu < menor:
            menor = nu

    resp = str(input('Quer continuar? [S/N] ')).strip().upper()[0]
média = soma / cont
print('Você digitou {} números e a média foi {}'.format(cont, média))

print('O maior valor foi {} e o menor foi {}'.format(maior, menor))

print('FIM')
