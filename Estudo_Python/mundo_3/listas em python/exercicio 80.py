lista = []

for _ in range(5):
  valor = int(input('Digite um valor: '))
  inserido = False
  if not lista:
    lista.append(valor)
  else:
    for i in range(len(lista)):
      if valor < lista[i]:
        lista.insert(i, valor)
        inserido = True
        break
    if not inserido:
      lista.append(valor)

  if inserido:
    print(f"Adicionado na posição {i} da lista...")
  else:
    print("Adicionado ao final da lista...")

print('Os valores digitados em ordem crescente foram:', lista)
