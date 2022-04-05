print(' ====== condições exenplo! ======')
#tempo = int(input('quantos anos tem o seu carro? '))
#print('o seu carro e novo'if tempo <=3 else'o seu carro é velho')
#print('==== FIM ====')
carro = int(input('quantos anos tem o seu carro? '))
if carro <= 3:
    print('o seu carro é novo!')
else:
    print('o seu carro é velho!')
print('==== FIM ====')

nome = str(input('Qual é o seu nome? '))
if nome == 'miguel':
    print('que nome lindo você tem heim ')
print('Bom dia, {}!'.format(nome))

n1 = float(input('digite a primeira nota? '))
n2 = float(input('digite a segunda nota? '))
m = (n1 + n2) / 2
print('a sua media foi {:.2f}'.format(m))
#print('==== outra alternativa! ====')
#print('PARABÉNS' if m >=6.0 else 'ESTUDE MAIS')
if m >= 6.0:
    print('a sua media foi boa! PARABÉNS!')
else:
    print('a sua media na foi boa! ESTUDE MAIS!')