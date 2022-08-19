
somaidade = 0
médiaidade = 0
maioridadehomen = 0
nomevelho = 0
totmulher20 = 0
for p in range(1, 5):
    print('---- {} PESSOA ----'.format(p))
    nome = str(input('Nome: ')).strip()
    idade = int(input('Idade: '))
    sexo = str(input('Sexo [M/F]: ')).strip()
    somaidade += idade
    if p == 1 and sexo in 'Mm':
        maioridadehomen = idade
        nomevelho = nome
    if sexo in 'Mm' and idade > maioridadehomen:
        maioridadehomen = idade
        nomevelho = nome
    if sexo in 'Ff' and idade < 20:
        totmulher20 += 1
médiaidade = somaidade / 4
print('A média de idade do gropo é de {} anos'.format(médiaidade))
print('O homen mais velho tem {} anos e se chama {}.'.format(maioridadehomen, nomevelho))
if totmulher20 == 0:
    print('Não tem nehuma mulher com menos de 20 anos')
else:
    print('Ao  todo são {} mulheres com menos de 20 anos'.format(totmulher20))









