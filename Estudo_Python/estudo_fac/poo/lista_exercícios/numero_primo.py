n1 = int(input())

if n1 > 1:
  for i in range(2, n1):
    if (n1 % i) == 0:
      print(f"O número {n1} não é primo")
      break
    else:
      print(f"{n1} è um número primo")