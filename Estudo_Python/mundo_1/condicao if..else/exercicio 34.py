
print('====== Aumento de salario funcionario! ======')
sala = float(input('digite aqui o seu salario mensal? '))
if sala <= 1250:
    novosala = (sala * 0.15) + sala
else:
    novo = sala + (sala * 10 / 100)
print('Quem ganhava R${} passara a ganhar R${:.2f} apartir de agora.'.format(sala, novosala))
