import random  #from random import shuffle -> shuffle(lista)
N1 = (input('primeiro nome: '))
N2 = str(input('segundo nome: '))
N3 = str(input('terceiro nome: '))
N4 = str(input('quarto nome: '))
lista = [N1, N2, N3, N4]
random.shuffle(lista)   #shuffle muda a hordem dos nome as deixand baralhado
print('A ordem de apresetação sera: ')
print(lista)
