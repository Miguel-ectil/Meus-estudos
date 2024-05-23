def bubble_sort(vetor):
  n = len(vetor)
  # Percorrer todos os elementos do vetor
  for i in range(n):
    # Últimos i elementos já estão na posição correta
    for j in range(0, n - i - 1):
      # Trocar se o elemento encontrado for maior que o próximo elemento
      if vetor[j] > vetor[j + 1]:
        vetor[j], vetor[j + 1] = vetor[j + 1], vetor[j]

# Exemplo de uso
vetor = [64, 34, 25, 12, 22, 11, 90]

print("Vetor antes da ordenação:")
print(vetor)

bubble_sort(vetor)

print("Vetor após a ordenação:")
print(vetor)
