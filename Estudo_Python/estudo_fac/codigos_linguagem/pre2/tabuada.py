
N = int(input())

if 0 <= N <= 10:
  for c in range(1, 11):
    num_multi = N * c
    print(f'{N} x {c} = {num_multi}')
  
  # outra forma de printar na tela
#   print('{} x {:2} = {}'.format(num, c, num*c))

