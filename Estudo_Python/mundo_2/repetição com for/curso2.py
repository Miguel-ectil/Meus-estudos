
print("======desafio 3! ======")

N1 = int(input("Digite um numero: "))
N2 = int(input("Digite outro numero: "))
So = N1 + N2

print("A soma entre {} e {} é: {}".format(N1, N2, So))

print("====== Desafio 4! ======")

a = input("digite alguma coisa: ")
print('O tipo primitivo desse valor e ', type(a))
print("So tem espaços? ", a.isspace())
print("É um numero? ", a.isnumeric())
print("É alfabetico?", a.isalpha())
print("É alfa numerico: ",a.isalnum())
print("Esta escrita em letras maiuscula? ",a.isupper())
print("Esta escrita em letras minusculas? ",a.islower())
print("Esta capitalizada? ", a.istitle())