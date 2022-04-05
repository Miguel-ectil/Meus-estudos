n1 = float(input('digite a sua primeira nota: '))
n2 = float(input('digite a sua segunda nota: '))
média = (n1 + n2) / 2
print('Tirando {:.1f} e {:.1f}, a média do aluno é  {:.1f}'.format(n1, n2, média))
if média < 5:
    print('\033[34mREPROVADO\033[m')
if média >= 5 and  média <= 7:
    print('\033[34mRECUPERAÇÃO\033[m')
elif média >= 7:
    print('\033[34mAPROVADO\033[m')