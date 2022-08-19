from random import randint
from time import sleep
itens = ('Pedra', 'Papel', 'Tesoura')
computador = randint(0, 2)
print('''Escolha uma das opções abaixo: 
[ 0 ] PEDRA 
[ 1 ] PAPEL 
[ 2 ] TESOURA''')
jogador = int(input('Faça a sua jogada? '))
print('JO')
sleep(1)
print('KEN')
sleep(1)
print('PO!!')
print('-=-'*8)
print('Computador jogou {}'.format(itens[computador]))
print('Jogador jogou {}'.format(itens[jogador]))
print('-=-'*8)
if computador == 0:  # computador jogou PEDRA
    if jogador == 0:
        print('\033[37mOUVE UM EMPATE\033[m')
    elif jogador ==  1:
        print('\033[34mPARABENS! VOCÊ VENCEU\033[m')
    elif jogador == 2:
        print('\033[31mPOXA! O COMPUTADOR VENCEU\033[m')
    else:
        print('\033[7;31;42mJOGADA INVÁLIDA!\033[m')
elif computador == 1:  # computador jogou PAPEL
    if jogador == 0:
        print('\033[31mPOXA! O COMPUTADOR VENCEU\033[m')
    elif jogador ==  1:
        print('\033[37mOUVE UM EMPATE\033[m')
    elif jogador == 2:
        print('\033[34mPARABENS! VOCÊ VENCEU\033[m')
    else:
        print('\033[7;31;42mJOGADA INVÁLIDA!\033[m')
elif computador == 2:  # computador jogou TESOURA
    if jogador == 0:
        print('\033[34mPARABENS! VOCÊ VENCEU\033[m')
    elif jogador ==  1:
        print('\033[31mPOXA! O COMPUTADOR VENCEU\033[m')
    elif jogador == 2:
        print('\033[37mOUVE UM EMPATE\033[m')
    else:
        print('\033[7;31;42mJOGADA INVÁLIDA!\033[m')