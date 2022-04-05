
#cont = 0
#soma = 0
num = cont = soma = 0
num = int(input('Digite um número [999 para parar]: '))
while num != 999:
    soma += num
    num = int(input('Digite um número [999 para parar]: '))
    cont += 1
print('Você digitou {} números e a soma entre eles foi {}'.format(cont, soma))
#print('Você digitou {} números e a soma entre eles foi {}'.format(cont - 1, soma - 999))
print('-=-=- FIM! -=-=-')