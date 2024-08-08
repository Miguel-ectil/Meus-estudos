doacaoVc = 0
doacaoRs = 0
while True:
  doacao = float(input())

  if doacao == -1.0:
    print(f'VC$ {doacaoVc:.2f}')
    print(f'R$ {doacaoRs:.2f}')
    break
  doacaoVc += doacao
  doacaoRs = doacaoVc * 2.50