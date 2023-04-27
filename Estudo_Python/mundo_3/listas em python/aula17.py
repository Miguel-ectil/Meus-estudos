
print('-='*24)
print('-=-=-=-=- Aprendendo a manipular Lista -=-=-=-=-')
print('-='*24)

num = [2, 5, 9, 1]

# # Substitui o valor de um dos itens da Lista
num[2] = 3

# # Adiciona mais um item na Lista
num.append(7)

# # Adiciona mais um item em uma posição exata na Lista
num.insert(2, 2)

# # Remove o ultimo valor da lista na Lista
num.pop()

# # Remove um valor na Lista
num.pop(2)

# # Remove um valor na Lista
num.remove()

# # Coloca todos os numeros da lista em ordem Crecsente
num.sort()  
 
# # Coloca todos os numeros da lista em ordem Decrecsente 
num.sort(reverse=True)


if 5 in num:
  num.remove(5)
else:
  print('Número 4 não encontrado')
  
print(num)
# # Mostra quantos intens tem na Lista
print(f'Essa lista tem {len(num)} elementos.')

valores = list()
valores.append(5)
valores.append(9)
valores.append(4)

for c, v in enumerate(valores):
  print(f'{v}...', end=' ')
  

valores = list()
valores.append(5)

for cont in range(0, 5):
  valores.append(int(input('Digite um valor: ')))
  
for c, v in enumerate(valores):
  print(f'Na posição {c} encontrei o valor {v}!')
  
# cria uma ligação entre a lista A e B
a = [2, 3, 4, 6, 8]
b = a
b[2] = 8
print(f'Lista A: {a}')
print(f'Lista B: {b}')


# cria uma cópia da lista A chamado B
a = [2, 3, 4, 6, 8]
b = a[:]
b[2] = 8
print(f'Lista A: {a}')
print(f'Lista B: {b}')
print('==========================Fim===========================')


# # end='' = serve para colocar tudo em linha só