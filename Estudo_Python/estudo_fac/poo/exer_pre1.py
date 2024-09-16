class Pessoa:
  def __init__(self, nome, idade):
    self.nome = nome
    self.set_idade(idade)

  def set_idade(self, idade):
    if idade < 18:
      print("O usuário precisa ser maior de idade. \n")
      idade_nova = int(input("Digite novamente a idade: \n"))
      self.set_idade(idade_nova)
    else:
      self.idade = idade


class Funcionario(Pessoa):
  def __init__(self, nome, idade, salario):
    super().__init__(nome, idade)
    self.__salario = 0 if salario < 0 else salario
    
  def get_salario(self):
    return self.__salario
    
  def set_salario(self, salario):
    self.__salario = 0 if salario < 0 else salario
  
  def calcular_salario_anual(self):
    return self.__salario * 12


class Departamento:
  def __init__(self):
    self.__funcionarios = []
    
  def adicionar_funcionario(self, funcionario):
    self.__funcionarios.append(funcionario)
    
  def calcular_total_salarios(self):
    total_salarios_anuais = 0
    
    for funcionario in self.__funcionarios:
      total_salarios_anuais += funcionario.calcular_salario_anual()
    return total_salarios_anuais
    
  def listar_funcionarios(self):
    print(6*"-", "Lista de Funcionários", 6*"-", '\n')
    
    for funcionario in self.__funcionarios:
      print(f"Nome: {funcionario.nome}")
      print(f"Idade: {funcionario.idade}")
      print(f"Salário anual: {funcionario.calcular_salario_anual()} \n")


cont_max_funcio = 3
i = 0
departamento = Departamento()

while i < cont_max_funcio:
	print()

	name = input("Nome: ")
	idade = int(input("Idade: "))
	salario = float(input("Salário mensal: "))

	funciona = Funcionario(name, idade, salario)
	departamento.adicionar_funcionario(funciona)

	i += 1

departamento.listar_funcionarios()

gasto_anual = departamento.calcular_total_salarios()

print(f"Total gastos com salários anuais no departamento: R$ {gasto_anual:,.2f}")
