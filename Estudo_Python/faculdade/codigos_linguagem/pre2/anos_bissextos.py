
inicio = int(input())
fim = int(input())
cont = 0

if 0 <= inicio <= fim <= 9999:
  while inicio <= fim:
    if inicio % 4 == 0 and inicio % 100 != 0 or inicio % 400 == 0:
      cont += 1 
      print(f'{inicio}')
    inicio += 1
    
  print(f'bissextos: {cont}')
