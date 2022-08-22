
larg = float(input("digite a largura da parede? "))
alt = float(input("digite a altura da parede? "))
area = larg * alt
print("sua parede tem a dimensao de {}x{} e a sua area é de {}m².".format(larg, alt, area))
tinta = area / 2
print("e para pintar essa parede, você precisara de {}L de tinta.".format(tinta))
