# Sem função
# A, B = input().split(" ")
# A = int(A)
# B = int(B)

# if A % B == 0 or B % A == 0:
#   print('Sao Multiplos')
# else:
#   print('Nao sao Multiplos')

#=====================================

# Com Função
# Aluno de uma faculdade legal!
##def eh_divisivel(x, y):
##    if x % y == 0:
##        return True
##    else:
##        return False

# Aluno(a) da Faculdade Impacta
def eh_divisivel(x, y):
    return x % y == 0

a, b = input().split()
a = int(a)
b = int(b)

if eh_divisivel(a, b) or eh_divisivel(b, a):
    print('São Multiplos')
else:
    print('Não sao Multiplos')