class Pessoa:
  def __init__(self, nome, idade):
    self.nome = nome
    self.idade = idade

class Funcionario(Pessoa):
  def __init__(self, nome, idade, salario):
    super().__init__(nome, idade)
    self.salario = salario
    
  def get_salario():
    pass
  def set_salario():
    pass
  def calcular_salario_anual():
    pass

class Departamento:
  def __init__(self, litstaSalario):
    self.litstaSalario = litstaSalario
    
  def adicionar_funcionario():
    pass
  def calcular_total_salarios():
    pass
  def listar_funcionarios():
    pass