# Crie um programa que solicite ao usuário alguns dados
# de funcionários e guarde esses registros em uma lista.
# O programa deverá conceder um aumento de salário para
# todos os funcionários de 10%.
# Considere os seguintes dados para cada funcionário:
# (a) nome, (b) idade e (c) salário.
# Todos na mesma linha.
# Depois de conceder os aumentos, exiba os dados dos
# funcionários em três ordens distintas:
# (a) por nome, (b) por idade e (c) por salário
# Obs.: Considere que a quantidade de funcionários será
#       informada no começo das entradas.

def exibe(funcionarios):
  for funcionario in funcionarios:
    print(f'Nome...: {funcionario[0]}')
    print(f'Idade..: {funcionario[1]} anos')
    print(f'Salário: R$ {funcionario[2]:.2f}')
    print('-' * 30)

def aumento(funcionarios):
  for funcionario in funcionarios:
    a = 0.10 * funcionario[2]
    funcionario[2] += a

qtd_funcionarios = int(input('Quantidade? '))

funcionarios = []

for i in range(qtd_funcionarios):
  nome, idade, salario = input().split()
  idade = int(idade)
  salario = float(salario)
  funcionarios.append([nome, idade, salario])

aumento(funcionarios)

funcionarios.sort(key=lambda item: item[0])
exibe(funcionarios)

funcionarios.sort(key=lambda item: item[1])
exibe(funcionarios)

funcionarios.sort(key=lambda item: item[2])
exibe(funcionarios)