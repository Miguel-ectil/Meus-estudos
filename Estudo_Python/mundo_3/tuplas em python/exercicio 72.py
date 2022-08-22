
numeros = ('Zero', 'Um', 'Dois', 'Três', 'Quatro', 'Sinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez',
'Onze', 'Doze', 'Trêze', 'Quatorze', 'Quinze', 'Dezesseis', 'Dezesete', 'Dezoite', 'Dezenove', 'Vinte')

num = int(input("Digite um número entre 0 e 20: "))
while True:
    for n in range(1, 4):
        if num > 20 or num < 0:
            print('Esse valor não é valido. digite um número entre 0 e 20 novamente: ')
print('Você digitou o número')


