def somaImpares(n):
  impares = 0
  while n > 0:
    digito = n % 10  # para pegar o último dígito do número
    if digito % 2 != 0:  # Verificar se o dígito é ímpar
      impares += digito  # Se for ímpar, adiciona ao contador
    n //= 10  # Remove o último dígito do número
  return impares

n = int(input())
result = somaImpares(n)
print(result)

 # ==== ele percorre o valor todo e remove apenas o ultimo valor ====
 
# def removeUltimoDigito(val):
#   if val < 0:  # Se o número tiver apenas um dígito, retorne 0
#     return 0
#   return val // 10  # Remove o último dígito dividindo o número por 10

# n = int(input("Digite um número inteiro: "))
# resto = removeUltimoDigito(n)
# print("O número após remover o último dígito é:", resto)
