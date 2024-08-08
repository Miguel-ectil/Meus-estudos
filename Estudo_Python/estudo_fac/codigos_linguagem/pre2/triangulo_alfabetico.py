
def trianguloAlfabetico(N):
  if N < 1 or N > 26:
    return

  for linha in range(N):
    letra = chr(ord('A') + linha)
    print(letra * (linha + 1))
    
N = int(input())
trianguloAlfabetico(N)