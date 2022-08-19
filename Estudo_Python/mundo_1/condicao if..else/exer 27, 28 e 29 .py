import random
from time import sleep
'''n = str(input('digite o seu nome completo? ')).strip()
nome = n.split()
print('klk prazer em te conhecer!')
print('o seu primeiro nome é: {}'.format(nome[0]))
print('e o seu último nome é {}'.format(nome[len(nome)-1]))'''

print('-=-=-=-=- exer 28, numero aleatorio! -=-=-=-=-')
N1 =  random.randrange(0, 6)
print(N1)
num = int(input('digite um numero entre 0 e 5? '))
print('PROCESANDO...')
sleep(3)
if(num == N1):
    print('PARABÉNS! você acertou o numero secréto ')
else:
    print('POXA! você errou o numero secreto')

print('========== exer 29, multa de carro! ==========')

ca = float(input('Qual é a velocidade atual do seu carro? '))
if ca > 80:
    m = (ca - 80) * 7.00
    print('você foi multado por ultrapassar a velocidade permitida')
    print(' a sua multa por  ultrapassar o limite de 80km/h é de R${:.2f}'.format(m))
print('Tenha um bom dia dirija com segurança!')
