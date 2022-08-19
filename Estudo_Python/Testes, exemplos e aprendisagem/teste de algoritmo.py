print('-=-'*15)
H = int(input('Quantas horas de atividade você fez no mês? '))
print('-=-'*15)
if H <= 10:
    n1 = H * 2
    t1 = n1 * 0.05
    print('Você fez {} pontos'.format(n1))
    print('-=-'*11)
    print('E você conseguiu ganhar: R$\033[31m{}\033[m'.format(t1))

elif H > 10 and H <= 20:
    n2 = H * 5
    t2 = n2 * 0.05
    print('Você fez {} pontos'.format(n2))
    print('-=-'*11)
    print('E você conseguiu ganhar R$\033[33m{}\033[m'.format(t2))

elif H > 20:
    n3 = H * 10
    t3 = n3 * 0.05
    print('Você fez {} pontos'.format(n3))
    print('-=-'*11)
    print('E você conseguiu ganhar R$\033[36m{}\033[m'.format(t3))