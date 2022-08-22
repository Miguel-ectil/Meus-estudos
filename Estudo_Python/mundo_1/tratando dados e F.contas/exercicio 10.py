
print("====== conversao em dolar! ======")

real = float(input("Quanto dinheiro você tem na carteira? "))
dolar = real / 3.27

print("Com R${:.2f} você podera conprar US${:.2f}".format(real, dolar))
