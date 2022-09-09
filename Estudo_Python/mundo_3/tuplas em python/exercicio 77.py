
palavras = ('aprender', 'programar', 'linguagem', 'python', 'curso', 'gratis', 
            'estudar', 'praticar', 'trabalhar', 'mercado', 'programador', 'futuro')

for p in palavras:
  print(f'\nNa palavra {p.upper()} temos ', end='')
  for letra in p:
    if letra.lower() in 'aeiou':
      print(letra, end=' ')


# print('=' * 30)
# print('    Como eu o estava fazendo    ')
# print('-' * 30)

# vogais = ["a", "e", "i", "o", "u"]
# for cont in range(0, len(palavras)):
#     for c in palavras.split(' '):
#        print("Na palavra {} temos".format(palavras[cont].upper()))
# print('-' * 30)
