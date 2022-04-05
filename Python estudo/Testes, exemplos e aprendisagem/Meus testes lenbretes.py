import random
from time import sleep
print('=-=-=-=-=-= jogo de advinhação! =-=-=-=-=-=')

num = random.randint(20,100)
print(num)
nun = int(input('Tente advinhar o número secréto entre 20 e 100: '))
print('PROCESANDO...')
sleep(1)
if num == nun:
    print('PARABENS! você acertou o número secréto')
else:
    print('Poxa você não conseguiu acertar o número secréto')
    print('O número secréto é {}'.format(num))
print('*'*10)
dia = 26
mês = 8
ano = 2021
print(dia, mês, ano, sep='/')
print('*'*10)