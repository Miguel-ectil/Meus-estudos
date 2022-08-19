from random import randint

computador = randint(0, 10)
print('Eae é o computador na vóz. Acabei de pensar em um número entre 0 e 10')
print('tenta advinhar qual foi o número que eu pensei, otário kkk: ')
acertou = False
tentativas = 0
while not acertou:
    print(computador)
    jogador = int(input('Qual é o numero secreto? '))
    tentativas += 1
    if jogador == computador:
        acertou = True
    else:
        if jogador > computador:
            print('Errou, esse número é maior. Tenta de novo.')
        elif jogador < computador:
            print('Errou, esse número é menor. Tenta de novo')
print('PARABENS! você Acertou o número secreto com {} tentativas.'.format(tentativas))
