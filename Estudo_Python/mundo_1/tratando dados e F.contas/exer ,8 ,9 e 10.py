
m = float(input("Digite uma distancia em metros ? "))
cm = m * 100
mm = m * 1000
print("A media de {}m corresponde a {:.0f}cm e {:.0f}mm".format(m, cm, mm))


print("========== exer 9, tabuada! ==========")

num = int(input("Digite um numero inteiro: "))
print("{} x {} = {}".format(num, 1, num*1))
print("{} x {} = {}".format(num, 2, num*2))
print("{} x {} = {}".format(num, 3, num*3))
print("{} x {} = {}".format(num, 4, num*4))
print("{} x {} = {}".format(num, 5, num*5))
print("{} x {} = {}".format(num, 6, num*6))
print("{} x {} = {}".format(num, 7, num*7))
print("{} x {} = {}".format(num, 8, num*8))
print("{} x {} = {}".format(num, 9, num*9))
print("{} x {} = {}".format(num, 10, num*10))

print("====== conversao em dolar! ======")

real = float(input("Quanto dinheiro você tem na carteira? "))
dolar = real / 3.27

print("Com R${:.2f} você podera conprar US${:.2f}".format(real, dolar))
