
print("===== exercicio 12, desconto de produto! =====")

preço = float(input('digite o preço do produto: '))
novo = preço - (preço * 0.05)
#print("========= outra alternativa! ========")
#novo = preço - (preço * 5 / 100)
print("com a liquidaçao do dia você tera um desconto de {}".format(0.05))
print("e o valor a pagar com o desconto sera de: {:.2f}".format(novo))
