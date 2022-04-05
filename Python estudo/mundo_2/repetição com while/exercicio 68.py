from random import randint

print('-=-' * 10)
print('  VAMOS JOGAR PAR OU IMPAR')
print('-=-' * 10)

v = 0
while True:
    num = int(input('Diga um valor: '))
    comp = randint(0, 10)
    soma = num + comp
    tipo= ' '
    while tipo not in 'PI':
        tipo = str(input('Par ou Impar? [P/I] ')).strip().upper()[0]
        print('-' * 60)
    print(f'Você jogou {num} e o computador {comp}. a soma dos dois é {soma} ', end='')
    # print('-' * 40)
    print('DEU PAR' if soma % 2 == 0 else 'DEU IMPAR')
    print('-' * 60)
    if tipo == 'P':
        if soma % 2 == 0:
            print('Você VENCEU!')
            v += 1
        else:
            print('Você PERDEU!')
            break
    elif tipo == 'I':
        if soma % 2 == 1:
            print('Você VENCEU')
            v += 1
        else:
            print('Você PERDEU!')
            break
    print('Vamos jogar novamente...')
    print('-=-' * 20)
print('-=-' * 20)
print(f'GAME OVER! Você só conseguiu vencer {v} vezes.')

