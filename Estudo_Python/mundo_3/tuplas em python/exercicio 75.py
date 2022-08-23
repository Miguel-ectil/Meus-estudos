
num = int(input('Digite um número: '))
num2 = int(input('Digite outro número: '))
num3 = int(input('Digite mais um número: '))
num4 = int(input('Agora digite o ultimo número: '))

numeros = (num, num2, num3, num4)
print("Você digitou os valores", numeros)

print(f'O valor 9 apareceu {numeros.count(9)} vezes')
    
if 3 in numeros:
  print(f'O valor 3 apareceu na  {numeros.index(3)+1}ª posição')
else:
  print("O valor 3 não foi digitado em nenhuma posição")

print('Os valores pares digitados foram ', end='') 
for n in numeros:
  if n % 2 == 0:
    print(n, end=' ' '\n')