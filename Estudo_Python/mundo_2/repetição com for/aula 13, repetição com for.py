
for c in range(0, 6):
    print('oi') # ou print(c)
print('FIM')
print('-=-'*14)
for c in range(1, 7):
    print(c)
print('FIM')
print('-=-'*14)
print('-=- contagem de 2 em 2 etc -=-')
for c in range(0, 7, 2):
    print(c)
print('FIM')
print('-=- Contagem regressiva -=-')
for c in range(6, 0, -1):
    print(c)
print('FIM')
print('-=-'*14)
print('Digite o primeiro o ultimo e de quanto em quanto sera a contagem')
i = int(input('Inicio: '))
f = int(input('FIM: '))
p = int(input('Passo: '))
for c in range(i, f+1, p):
    print(c)
print('FIM')
print('-=-'*14)
print('para perguntar uma quantidade de vezes')
for c in range(0, 3):
    n = int(input('Digite um valor: '))
print('FIM')
print('-=-'*14)
print('pergunta e soma todas as respostas')
s = 0
for c in range(0, 4):
    n = int(input('Digite um valor: '))
    s += n
print('O somatório de todos os valores foi {}'.format(s))