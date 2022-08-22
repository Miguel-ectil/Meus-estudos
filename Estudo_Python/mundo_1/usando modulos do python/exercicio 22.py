
nome = str(input('digte o seu nome? ')).strip()

print('Seu nome com letras maiusculas: {}'.format(nome.upper()))
print('Seu nome com letras minusculas: {}'.format(nome.lower()))
print('Seu nome tem ao todo {} letras'.format(len(nome) - nome.count(' ')))
print('E seu primeiro nome tem {} letras'.format(nome.find('nome')))

'''print('======== outra forma de se fazer! ========')
separa = nome.split()
print('o seu primeiro nome é {} e ele tem {} letras'.format(separa[0], len(separa[0])))'''
