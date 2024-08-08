def media_bi (pre, ap):
  '''
  '''
  m = (5*pre + 20*ap) / 25
  return m

def media_semestral(pre1, ap1, pre2, ap2, pr):
  b1 = media_bi(pre1, ap1)
  b2 = media_bi(pre2, ap2)
  mt= (b1 + b2) / 2
  return (mt + pr) / 2

a = float(input('PRE1? '))
b = float(input('AP1? '))
c = float(input('PRE2? '))
d = float(input('AP2? '))
e = float(input('Prova Regular? '))

ms = media_semestral(a, b, c, d, e)
print(f'A MF é {ms:.2f}')
if ms>= 6.0:
  print('Aprovado!')
else:
  mf = media_semestral(a, b, c, d, 10)
  if mf >= 6:
    print('Talvez com a Sub. Estude!')
  else:
    print('Reprovado')
print('Volte sempre')