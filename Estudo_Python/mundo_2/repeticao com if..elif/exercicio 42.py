print('-=-'*14)
print('=--=--=- Analizador de Triângulo! -=--=--=')
print('-=-'*14)
r1 = float(input('digite o primeira segmento de reta? '))
r2 = float(input('digite o segunda segmento de reta? '))
r3 = float(input('digite o terceira segmento de reta? '))
print('-------------------------------------------------------------')

if r1 < r2 + r3 and r2 < r3 + r1 and r3 < r1 + r2:
    print('Os segmentos acima podem formar um triângulo!', end='')
    if r1 == r2 and r2 == r3:
        print('\033[34mEQUILÁTERO\033[m')
    elif r1 != r2 != r3 != r1:
        print('\033[34mESCALENO\033[m')
    else:
        print('\033[34mISÓSCELES\033[m')
else:
    print('Os segmentos acima não podem formar um triângulo!')
