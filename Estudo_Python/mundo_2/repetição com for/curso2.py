
print("======dsefio 3! ======")

N1 = int(input("digite um numero: "))
N2 = int(input("digite outro numero: "))
So = N1 + N2

print("a soma entre {} e {} e: {}".format(N1, N2, So))

print("======desafio 4! ======")

a = input("digite alguma coisa: ")
print('o tipo primitivo desse valor e ', type(a))
print("so tem espaços? ", a.isspace())
print("è um numero? ", a.isnumeric())
print("è alfabetico?", a.isalpha())
print("è alfa numerico: ",a.isalnum())
print("esta escrita em letras maiuscula? ",a.isupper())
print("esta escrita em letras minusculas? ",a.islower())
print("esta capitalizada? ", a.istitle())