
"""n = cont = 0
while cont < 5:
    n = int(input('Digite um número: '))
    cont += 1"""

n = s = 0
while True:
    n = int(input('Digite um número: '))
    if n == 999:
        break
    s += n
print('A soma vale {}'.format(s))

#while True: coloca o programa em lupim infinito