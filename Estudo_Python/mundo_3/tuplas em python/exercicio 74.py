from random import randint

numeros = (randint(1, 10), randint(1, 10), randint(1, 10), randint(1, 10), randint(1, 10))

print('Os valores sorteados foram: ', end='')
for c in numeros:
    print(f'{c} ', end='')

print(f'\nO maior valor sorteado foi: {max(numeros)}')
print(f"O menor valor sorteado foi: {min(numeros)}")