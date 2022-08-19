
nome = str(input('digte o seu nome? ')).strip()

print('Seu nome com letras maiusculas: {}'.format(nome.upper()))
print('Seu nome com letras minusculas: {}'.format(nome.lower()))
print('Seu nome tem ao todo {} letras'.format(len(nome) - nome.count(' ')))
print('E seu primeiro nome tem {} letras'.format(nome.find('nome')))

'''print('======== outra forma de se fazer! ========')
separa = nome.split()
print('o seu primeiro nome é {} e ele tem {} letras'.format(separa[0], len(separa[0])))'''

print('==== mostrando cada um dos digitos de um numero! ====')
num = int(input('informe um numero: '))
u = num // 1 % 10
d = num // 10 % 10
c = num // 100 % 10
m = num // 1000 % 10
print('analizando o numero {}'.format(num))
print('unidade: {}'.format(u))
print('dezena: {}'.format(d))
print('centena: {}'.format(c))
print('milhar: {}'.format(m))