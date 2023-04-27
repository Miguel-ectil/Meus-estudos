valores = []
desejo = 'S'

while desejo in 'sS':
  num = int(input(f'Digite um valor: '))
  
  if num in valores:
    print(f'Valor duplicado! não vou adicionar... ')
  else:
    print(f'Valor adicionado com sucesso...')
    valores.append(num)

  desejo = str(input(f'quer continuar? [S/N]')).strip().upper()[0]

print('\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
print(f'Voce digitou os valores {valores}')