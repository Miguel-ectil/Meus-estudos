
numeros = ('Zero', 'Um', 'Dois', 'Três', 'Quatro', 'Sinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez',
'Onze', 'Doze', 'Trêze', 'Quatorze', 'Quinze', 'Dezesseis', 'Dezesete', 'Dezoite', 'Dezenove', 'Vinte')

num = int(input("Digite um número entre 0 e 20: "))

while num > 20 or num < 0:
  num = int(input('Esse valor não é valido. digite um número entre 0 e 20 novamente: '))

print(f'Você digitou o número {numeros[num]}')


