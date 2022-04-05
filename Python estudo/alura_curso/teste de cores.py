print('\033[1;31;43mOlá, Mundo!\033[m')
print('\033[4;30;45mOlá, Mundo!\033[m')
print('\033[7;33;44mOlá, Mundo!\033[m')
print('\033[4;34mklk pri!\033[m')

a = 3
b = 5
print('Os valores são \033[32m{}\033[m e \033[31m{}\033[m!!'.format(a, b))

print('==== outra forma mais sinples de fazer! ====')
nome = 'miguel'
'''cores = {'limpa':'\033[m',
         'azul':'\033[34m',
         'amarelo':'\033[33m',
         'pretoebranco':'\033[7;30m'}
print('Olá! muito prazer em te conhecer, {}{}{}!'.format(cores['pretoebranco'], nome, cores['limpa']))'''
print('Olá! muito prazer em te conhecer, {}{}{}!'.format('\033[4;34m', nome, '\033[m'))

n = 'miguel'
i = 23
print(f'o seu nome é \033[4m{nome}\033[m e você tem \033[4m{i} anos')