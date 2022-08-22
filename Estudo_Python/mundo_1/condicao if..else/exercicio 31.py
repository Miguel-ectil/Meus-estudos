print('==== exer 31, viagem e sua passagem! ====')

dis = float(input('qual é a distancia da sua viajem? '))
print('Você esta pronto para começar uma viajem de {}km,'.format(dis))
preço = dis * 0.50 if dis <= 200 else dis * 0.45
print('E o preço da sua passageem será de R${:.2f}'.format(preço))
