
print('==== exer 33, qual é o maior e o menor! ====')

n1 = int(input('digite o primero número? '))
n2 = int(input('digite o segundo numero? '))
n3 = int(input('digite o terceiro numero? '))
'''if(n1 > n2 and n1 > n3):
    print('o numero {} é o maior dos treis números'.format(n1))
elif(n2 > n1 and n2 > n3):
    print('o número {} é o maior dos treis número'.format(n2))
else:
    print('o número {} é o maior dos treis números'.format(n3))
if(n1 < n2 and n1 < n3):
    print('e o número {} é o menor dos três números'.format(n1))
elif(n2 < n1 and n2 < n3):
    print('e o número {} é o menor dos três números '.format(n2))
else:
    print('e o número {} é o menor dos três números'.format(n3))'''
# Verificando quem é o menor
menor = n1
if n2 < n1 and n2 < n3:
    menor = n2
if n3 < n1 and n3 < n2:
    menor = n3
# Verificando quem é o maior
maior = n1
if n2 > n1 and n2 > n3:
    maior = n2
if n3 > n1 and n3 > n2:
    maior = n3
print('O menor valor digitado foi {}'.format(menor))
print('E o maior valor digitado foi {}'.format(maior))