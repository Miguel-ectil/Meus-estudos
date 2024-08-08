# Leitura do tamanho da matriz
N = int(input())

# Inicialização da matriz
matriz = []

# Leitura da matriz
for _ in range(N):
    linha = list(map(int, input().split()))
    matriz.append(linha)

# Verificação se a matriz é identidade
identidade = True
for i in range(N):
    for j in range(N):
        if i == j:
            if matriz[i][j] != 1:
                identidade = False
                break
        else:
            if matriz[i][j] != 0:
                identidade = False
                break
    if not identidade:
        break

# Exibição do resultado
if identidade:
    print("SIM")
else:
    print("NÃO")
