
print('=' * 40)
print('          LISTAGEM DE PREÇOS          ')
print('-' * 40)

lista = ("Lápis", 1.75, "Borracha", 2.00, "Caderno", 15.90, "Estojo",  25.00,
         "Transferidor", 4.20, "Compasso", 9.99, "Mochila", 120.32, "Caneta", 22.90, "Livro", 34.90)

for pos in range(0, len(lista)):
  if pos % 2 == 0:
    print(f'{lista[pos]:.<20}', end='')
  else:
    print(f'R${lista[pos]:>7.2f}')
print('-' * 40)
