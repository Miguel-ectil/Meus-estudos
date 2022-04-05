from _datetime import date
nasc = int(input('digite o ano que você nasceu: '))
ano = date.today().year - nasc
print('Você tem {} ano e '.format(ano))
if ano <= 9:
    print('Você é um ATLETA \033[34mMIRIM\033[m')
elif ano <= 14:
    print('Você é um ATLETA \033[34mINFANTIL\033[m')
elif ano <= 19:
    print('Você é um ATLETA \033[34mJUNIOR\033[33m')
elif ano <= 25:
    print('Você é um ATLETA \033[34mSÊNIOR')
else:
    print('Você é um ATLETA \033[34mMASTER')