
num = int(input('Digite um número inteiro: '))
print('''Escolha uma das bases para conversão: 
[ 1 ] converter para BINÁRIO
[ 2 ] converter para OCTAL
[ 3 ] converter para HEXADECIMAL''')
opcão = int(input('Sua opcão: '))
if opcão == 1:
    print('{} convertido para BINÁRIO é igual a {}'.format(num, bin(num)[2:]))
elif(opcão ==2):
    print('{} convertido para OCTAL é igual a {}'.format(num, oct(num)[2:]))
elif opcão == 3:
    print('{} convertido para HEXADECIMAL é igual a {}'.format(num, hex(num)[2:]))
else:
    print('Opcão inválida, tente novamente.')

print('============================================================================')

n1 = int(input('digite um numero: '))
n2 = int(input('digite outro numero: '))
if n1 > n2:
    print('O \033[35mPrimeiro valor \033[m é o \033[34mmaior\033[m')
elif n2 > n1:
    print('O \033[35mSegundo valor \033[m é o \033[34mmaior\033[m')
else:
    print('\033[35mnão existe \033[m um maior valor, os dois são iguais')