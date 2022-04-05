
print('*'*26)
print('  SELECTOR DE PESSOAS  ')
print('*'*26)

sex = str(input('Qual é o seu sexo? [M]/[F] ')).strip()
print('-=-'*13)
id = int(input('Qual é a sua idade? '))
print('-=-'*13)
print('Qual é a cor do seu cabelo? ')
print('[1]Preto')
print('[2]Castanho')
print('[3]Loiro')
print('[4]Ruivo')
cab = str(input(''))
if sex == 'm' and id > 18 and cab == 2:
    print('')