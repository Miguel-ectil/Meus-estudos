
lista = []
mais = 0
menos = 0

for c in range(0, 5):
  valor = int(input('Digite um valor: '))
  if c == 0:
    # mais = menos = lista[c]
    lista.insert(c, valor)
  else:
    if lista[c] > mais:
      mais = lista[c]
    if lista[c] < menos:
      menos = lista[c]
      lista.insert(valor, c)
    
    print(f'Adicionado na posição _ da lista... ')
  
print('Os valores digitados em orden foram ', lista)