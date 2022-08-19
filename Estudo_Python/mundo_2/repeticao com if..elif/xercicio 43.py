
peso = float(input('Qual é o seu peso? kg '))
alt = float(input('Qual é a sua altura?  '))
imc = peso / (alt * alt)
print('-------------------------------------')
print('O seu IMC é {:.2f}'.format(imc))
print('-=-'*6)
if imc < 18.5:
    print('\033[33mABAIXO DO PESO NORMAL\033[m')
elif 18.5 <= imc < 25:
    print('\033[34mPESO IDEAL\033[m')
elif 25 <= imc < 30:
    print('\033[31mSOBREPESO\033[m')
elif 30 <= imc < 40:
    print('\033[35mOBESIDADE\033[m')
else:
    print('\033[36mOBESIDADE MÓRBIDA\033[m')
print('-=-'*6)
