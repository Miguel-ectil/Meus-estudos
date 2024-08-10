num = int(input("Digite um número"))
fatorial = 1
i = 1
while True:
  fatorial *= i
  i += 1
  if i > num:
     break 
print("O fatorial é ", fatorial)