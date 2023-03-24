
class Cliente:
  def __init__(self, nome):
    self.__nome = nome
    
  @property
  def nome(self):
    print("Chamado @property nome()")
    return self.__nome.title()

  @nome.setter
  def nome(self, nome):
    print("Chamado @setter nome()")
    self.__nome = nome