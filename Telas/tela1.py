import os, sys
from PyQt5.Qt import Qt
from PyQt5.QTcore import pyqtSlot
from PyQt5.QtGui import QIcon, QPixmap
from PyQt5.QtWidgets import QApplication, QLabel, QMainWindow, QToolButton
from PyQt5 import QtGui


'''class Tela (QMainWindow):
    def __init__(self):
        super().__init__()

        self.topo = 200
        self.esquerda = 120
        self.largura = 880
        self.altura = 660
        self.titulo = "Primeira tela"

    
        self.img = (self)
        self.img.move(50, 400)
        self.img.setPixmap(QtGui.QPixmap('DS2208.jpg'))
        self.carro.resize(720, 280)
        self.carregartela()

        self.label_1 = QLabel
        self.label_1.setText("Selecione o Modelo de Leitor para Configurar")
        self.label_1.move(12, 24)

        self.carregartela()

    def carregartela(self):
        self.setGeometry(self.topo,self.esquerda,self.largura,self.altura)
        self.setWindowTitle(self.titulo)
        self.show()

aplicativo = QApplication(sys.argv)
t = Tela()
sys.exit(aplicativo.exec_()) '''


