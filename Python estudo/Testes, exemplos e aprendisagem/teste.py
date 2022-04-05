class conta:

    def __init__(self, numero, titular, saldo, limite):
        print("construindo objeto ... {}".format(self))
        self.numero = numero
        self.titular = titular
        self.saldo = saldo
        self.limite = limite

    def extrato(self):
        print("saldo de {} do titular {}".format(self.saldo, self.titular))

    def deposita(self, valor):
        self.saldo += valor

    def sacar(self, valor):
        self.saldo -= valor



