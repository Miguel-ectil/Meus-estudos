
import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton, QToolTip, QLabel, QLineEdit

class Teste (QMainWindow):
    def __init__(self):
        super().__init__()

        self.topo = 200
        self.esquerda = 120
        self.largura = 700
        self.altura = 600
        self.titulo = "Primeiro teste"

        self.caixa_texto = QLineEdit(self)    # caixa de texto
        self.caixa_texto.move(260, 20)
        self.caixa_texto.resize(220, 36)

        self.caixa_texto1 = QLineEdit(self)  # caixa de texto1
        self.caixa_texto1.move(260, 60)
        self.caixa_texto1.resize(220, 36)

        '''botao1 = QPushButton('Botao1', self)
        botao1.move(80, 200)
        botao1.resize(140, 64)
        botao1.setStyleSheet('QPushButton {font:bold;font-size:20px}')
        botao1.clicked.connect(self.botao1_click)'''

        botao_caixa = QPushButton('Mostar a soma ', self)
        botao_caixa.move(520, 460)
        botao_caixa.resize(160, 64)
        botao_caixa.setStyleSheet('QPushButton {font:bold;font-size:20px}')
        botao_caixa.clicked.connect(self.mostra_soma)

        '''botao2 = QPushButton('Botao2', self)
        botao2.move(280, 200)
        botao2.resize(140, 64)
        botao2.setStyleSheet('QPushButton {font:bold;font-size:20px}')
        botao2.clicked.connect(self.botao2_click)'''
        self.label_1 = QLabel(self)
        self.label_1.setText("Primeiro números: ")
        self.label_1.move(12, 24)
        self.label_1.setStyleSheet('QLabel {font:bold;font-size:25px}')
        self.label_1.resize(400, 25)

        self.label_2 = QLabel(self)
        self.label_2.move(12, 60)
        self.label_2.setStyleSheet('QLabel {font:bold;font-size:25px}')
        self.label_2.resize(400, 30)
        self.label_2.setText("Segundo número: ")

        self.label_caixa = QLabel(self)
        self.label_caixa.move(290, 300)
        self.label_caixa.setStyleSheet('QLabel {font:bold;font-size:25px}')
        self.label_caixa.resize(360, 45)
        self.label_caixa.setText("A soma dos numeros é: ")

        self.label_caixa = QLabel(self)
        self.label_caixa.move(586, 300)
        self.label_caixa.setStyleSheet('QLabel {font:bold;font-size:25px}')
        self.label_caixa.resize(360, 45)
        self.label_caixa.setText("")

        self.carregarteste()

    def carregarteste(self):
        self.setGeometry(self.esquerda, self.topo, self.largura, self.altura)
        self.setWindowTitle(self.titulo)
        self.show()

    '''def botao1_click(self):
        print('O botao 1 foi clicado')
        self.label_1.setText("O botao 1 foi clicado")'''

    def mostra_soma(self):
        primeiro_n  = int(self.caixa_texto.text())
        segundo_n = int(self.caixa_texto1.text())
        soma = str(primeiro_n + segundo_n)
        self.label_caixa.setText(soma)
        #self.label_caixa.setText(conteudo2)
        print(primeiro_n)
        print(segundo_n)
        print(soma)

    '''def botao2_click(self):
        print('O botao 2 foi clicado')
        self.label_1.setText("O botao 2 foi clicado")'''

aplicacao = QApplication(sys.argv)
t = Teste()
sys.exit(aplicacao.exec_())