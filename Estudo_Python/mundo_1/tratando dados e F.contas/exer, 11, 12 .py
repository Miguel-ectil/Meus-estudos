

larg = float(input("digite a largura da parede? "))
alt = float(input("digite a altura da parede? "))
area = larg * alt
print("sua parede tem a dimensao de {}x{} e a sua area é de {}m².".format(larg, alt, area))
tinta = area / 2
print("e para pintar essa parede, você precisara de {}L de tinta.".format(tinta))

print("===== exer,12, desconto de produto! =====")

preço = float(input('digite o preço do produto: '))
novo = preço - (preço * 0.05)
#print("========= outra alternativa! ========")
#novo = preço - (preço * 5 / 100)
print("com a liquidaçao do dia você tera um desconto de {}".format(0.05))
print("e o valor a pagar com o desconto sera de: {:.2f}".format(novo))

print("====== exer,13, aumento em salario! ======")

Sala = float(input('informe o seu salario? '))
novo= Sala + (Sala * 0.15)
print('um funcionario que ganhava R${:.2f}, com 15% de aumento, passa a receber R${:.2f}'.format(Sala, novo))
