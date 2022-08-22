
n1 = int(input('digite um numero: '))
n2 = int(input('digite outro numero: '))
if n1 > n2:
    print('O \033[35mPrimeiro valor \033[m é o \033[34mmaior\033[m')
elif n2 > n1:
    print('O \033[35mSegundo valor \033[m é o \033[34mmaior\033[m')
else:
    print('\033[35mnão existe \033[m um maior valor, os dois são iguais')