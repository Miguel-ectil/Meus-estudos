
print('========== exer 29, multa de carro! ==========')

ca = float(input('Qual é a velocidade atual do seu carro? '))
if ca > 80:
    m = (ca - 80) * 7.00
    print('você foi multado por ultrapassar a velocidade permitida')
    print(' a sua multa por  ultrapassar o limite de 80km/h é de R${:.2f}'.format(m))
print('Tenha um bom dia dirija com segurança!')
