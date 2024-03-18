tipoAnimal = str(input())
tipoAnimal1 = str(input())
tipoAnimal2 = str(input())

if tipoAnimal == 'vertebrado':
  if tipoAnimal1 == 'ave':
    if tipoAnimal2 == 'carnivoro':
      print('aguia')
    else:
      print('pomba')
  else:
    if tipoAnimal2 == 'onivoro':
      print('homen')
    else:
      print('vaca')
else:
  if tipoAnimal1 == 'inseto':
    if tipoAnimal2 == 'hematofago':
      print('pulga')
    else:
      print('lagarta')
  else:
    if tipoAnimal2 == 'hematofago':
      print('sanguessuga')
    else:
      print('minhoca')