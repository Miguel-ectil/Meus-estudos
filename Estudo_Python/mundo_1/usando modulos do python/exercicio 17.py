
print("====== exercicio 17, hipotenusa comprimento! ====== ")

co = float(input('digite o comprimento do cateto oposto? '))
ca = float(input('digite o comprimento do cateto adjacento? '))
hi = (co ** 2 + ca ** 2) ** (1/2)
print('A hipotenusa vai medir {:.2f}'.format(hi))

'''print("====== outra maneira de ser feita! ======")
import math

co = float(input('digite o comprimento do cateto oposto? '))
ca = float(input('digite o comprimento do cateto adjacento? '))
hi = math.hypot(co, ca)  #hypot calculo de hipotenusa
print('A hipotenusa vai medir {:.2f}'.format(hi))
from math import hypot
hi = hypot(co, ca)'''



