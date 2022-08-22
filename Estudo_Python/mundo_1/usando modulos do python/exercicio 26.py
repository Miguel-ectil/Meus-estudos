
print('====== exer 26, verificar aparicao de letra! ======')
frase  = str(input('digite um frase: ')).upper().strip()

print('A letra A aprece {} vezes na frase.'.format(frase.count('A') ))
print('A primeira letra A pareceu na posicao {}'.format(frase.find('A') + 1))
print('A ultima letra A apareceu na posicao {}'.format(frase.rfind('A')))