
print('\n============================= Incompleto ==================================')
valores = []
for cont in range(0, 5):
  valores.append(int(input(f'Digite um valor para a posição {cont}: ')))

print('\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')

print(f'Você digitou os valores {valores}')
print(f'O maior valor digitado foi: {max(valores)} nas posições {valores.index(max(valores))}...')
print(f"O menor valor digitado foi: {min(valores)} nas posições {valores.index(min(valores))}...")