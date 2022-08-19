
pess = toth = totm20 = 0
while True:
    print('-=-' * 8)
    print('  CADASTRE UMA PESSOA')
    print('-=-' * 8)

    idade = int(input('Idade: '))
    sexo = ' '
    while sexo not in 'MF':
        sexo = str(input('Sexo: [M/F] ')).strip().upper()[0]
        print('-' * 24)
    if idade > 18:
        pess += 1
    if sexo == 'M':
        toth += 1
    if sexo == 'F' and idade < 20:
        totm20 += 1

    res = ' '
    while res not in 'SN':
        res = str(input('Quer continuar? [S/N] ')).strip().upper()[0]
    if res == 'N':
        break

print(f'Total de pessoas com mais de 18 anos é: {pess}')
print(f'Ao todo temos {toth} homens cadastrados')
print(f'E temos {totm20} mulheres com menos de 20 anos')

