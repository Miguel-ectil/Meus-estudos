
print("===== antecessor e sucessor! =====")

N1 = int(input("por favor digite um numero interio: "))
S = N1 + 1
M = N1 - 1
print("o antecessor de {} e: {}".format(N1, M))
#print("========== outra alternativa! ==========")
#print("o antecessor de {} é {} o seu sucessor é {}".format(N1, (N1-1), (N1+1)))
print("e o seu sucessor e: {}".format(S))

print("== exer 6, numero, dobro, triplo e raiz quadrada! ==")

N2 = int(input("digite um numero? "))
D = N2 * 2
T = N2 * 3
R = N2 ** (1/2)
print("o dobro valor desse numero e: {}".format(D))
print("o triplo valor desse numero e: {}".format(T))
print("a rais quadrada desse numero e {:.2f}".format(R))

print("==== exer 7 notas de aluno e sua media! ====")

N3 = float(input("digite a sua primeira nota? "))
N4 = float(input("digite a sua segunda nota? "))
So = (N3 + N4) / 2
print("a sua media e: {}".format(So))
