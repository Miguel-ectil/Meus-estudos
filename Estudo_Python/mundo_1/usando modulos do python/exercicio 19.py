import random

print('====== exercicio 19, sorteio para linpar a louza! ======')

n1 = str(input("Nome do primeiro aluno (a): "))
n2 = str(input('Nome do segundo aluno (a): '))
n3 = str(input("Nome do terceiro aluno (a): "))
n4 = str(input('Nome do quarto aluno (a): '))
lista = [n1, n2, n3, n4]
escolhido = random.choice(lista)  #chioce -> escolhe uma da lista
print('o aluno(a) escolhido foi {}'.format(escolhido))

