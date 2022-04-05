from time import sleep
print('====== Aumento para um funcionario! ======')
sala = float(input('digite aqui o seu salario? '))
if sala <= 1250:
    novo = (sala * 0.15) + sala
else:
    novo = sala + (sala * 10 / 100)
print('Quem ganhava R${} passa a ganhar R${:.2f} agora.'.format(sala, novo))

print('====== exer 35, formar triangulo! ======')

print('-=-'*14)
print('          Analizador de Triângulo        ')
print('-=-'*14)
r1 = float(input('digite o comprimento da primeira reta? '))
r2 = float(input('digite o comprimento da segunda reta? '))
r3 = float(input('digite o comprimento da terceira reta? '))
print('PROCESANDO...')
sleep(3)
if r1 < r2 + r3 and r2 < r3 + r1 and r3 < r1 + r2:
    print('Os segmentos acima podem formar um TRIÂNGULO!')
else:
    print('Os segmentos acima não podem formar um TRIÂNGULO!')


'''n1 = int(input('digite um numero intero? '))
n2 = int(input('digite outro numero intero? '))
n = n1 * n2
print('{}x{} é igual a: {}'.format(n1, n2, n))'''