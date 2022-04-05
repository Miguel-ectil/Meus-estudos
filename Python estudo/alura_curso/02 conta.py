
class contaSalario:
    def __init__(self, codigo):
        self._codigo = codigo
        self._saldo = 0

    def __eq__(self, outro):
        return self._codigo == outro._codigo

    def deposita(self, valor):
        self._saldo += valor

    def __str__(self):
        return '[>>codigo {} saldo {}<<]'.format(self._codigo, self._saldo)

conta1 = contaSalario(38)
print(conta1)

conta2 = contaSalario(38)
print(conta2)

contas = [conta1]
conta1 in contas
n = conta2 in contas
print(n )
