from math import factorial

n = int(input('Digite um número para calcular seu Fatorial: '))
c = n
f = 1
print('Calculando {}! = '.format(n), end='')
while c > 0:
    print('{}'.format(c), end='')
    print(' x ' if c > 1 else ' = ', end='')
    f *= c
    c -= 1
print('{}'.format(f))

print('=============================================================')
'''
print('==== Outra forma de fazer com for! ====')

num = int(input('Digite um número para calcular seu Fatorial: '))
d = num
s = 1
for d in range(num, 0, -1):
    print('{}'.format(d), end='')
    print(' x ' if d > 1 else ' = ', end='')
    s *= d
    d -= 1
print('{}'.format(s))
'''