notaTrabalhos = float(input())
notaProva = float(input())

mediaFinal = (notaTrabalhos + notaProva) / 2
if mediaFinal >= 6:
  print('aprovado')
else:
  if notaTrabalhos >= 2:
    print('talvez com a sub')
  else:
    print('reprovado')