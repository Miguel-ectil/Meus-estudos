
#import math
#num = int(input("digite um numero: "))
#raiz = math.sqrt(num)
#print("a raiz de {} é igual {:.2f}".format(num, raiz))

#print("==== arredondar para cima! ====")
#print("a raiz de {} é igual {}".format(num, math.ceil(raiz)))
#print("==== arredondar para baixo! ====")
#print("a raiz de {} é igual {}".format(num,math.floor(raiz)))

#print("==== para importar apenas uma funçao! ====")
from math import sqrt, ceil
num = int(input("digite um numero: "))
raiz = sqrt(num)
#print("a raiz de {} é igual {:.2f}".format(num, raiz))
#print("a raiz de {} é igual {}".format(num, floor(raiz)))
print("a raiz de {} é igual {}".format(num, ceil(raiz)))

