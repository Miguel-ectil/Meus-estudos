
num = int(input())

for c in range(1, 11):
  num_multi = num * c
  print(f'{num} x {c} = {num_multi}')
  
  # outra forma de printar na tela
#   print('{} x {:2} = {}'.format(num, c, num*c))

