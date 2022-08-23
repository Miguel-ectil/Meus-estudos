import random
from time import sleep

print('-=-=-=-=- exer 28, numero aleatorio! -=-=-=-=-')
N1 =  random.randrange(0, 6)
# print(N1)
num = int(input('digite um numero entre 0 e 5: '))
print('PROCESANDO...')
sleep(3)
if(num == N1):
    print('PARABÉNS! você acertou o numero secréto ')
else:
    print('POXA! você errou o numero secreto')