# def identidade(n):
#   return [[1 if i == j else 0 for j in range(n)] for i in range(n)]

# print("Matriz identidade 3x3:", identidade(3))


matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

print("Elemento na linha 1, coluna 2:", matriz[0][1])  # Saída: 2

matriz[1][1] = 10
print("Matriz após alteração:", matriz)

print("Elementos da matriz:")
for linha in matriz:
  for elemento in linha:
    print(elemento, end=" ")
  print()
