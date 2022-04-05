import math
import random

ângulo = float(input("digite o ângulo que você deseja: "))
seno = math.sin(math.radians(ângulo))
print('o ângulo de {} tem o SENO de {:.2f}'.format(ângulo, seno))
cosseno = math.cos(math.radians(ângulo))
print('O ângulo de {} e tem um COSSENO de {:.2f}'.format(ângulo, cosseno))
tangente = math.tan(math.radians(ângulo))
print('O ângulo de {} tem o TANGENTE de {:.2f}'.format(ângulo, tangente))

'''print('====== outra maneira de ser feito! ======')
from math import radians,sin,cos,tan
ângulo = float(input("digite o ângulo que você deseja: "))
seno = sin(radians(ângulo))
print('ô angulo de {} tem o SENO de {:.2f}'.format(ângulo, seno))
cosseno = cos(radians(ângulo))
print('O ângulo de {} tem o COSSENO de {:.2f}'.format(ângulo, cosseno))
tangente = tan(radians(ângulo))
print('O ângulo de {} tem o TANGENTE de {:.2f}'.format(ângulo, tangente))'''

print('====== exer 19, sorteio para linpar a louza! ======')
#print('==== tanbem da pra fazer igual ao exer emcima| ====')

n1 = str(input("Nome do primeiro aluno (a): "))
n2 = str(input('Nome do segundo aluno (a): '))
n3 = str(input("Nome do terceiro aluno (a): "))
n4 = str(input('Nome do quarto aluno (a): '))
lista = [n1, n2, n3, n4]
escolhido = random.choice(lista)  #chioce -> escolhe uma da lista
print('o aluno(a) escolhido foi {}'.format(escolhido))

