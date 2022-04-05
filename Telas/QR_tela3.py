from PyQt5 import uic,QtWidgets

def dados_tela3():
    tela_qr2.show()


app=QtWidgets.QApplication([])
telas3=uic.loadUi("telas3.ui")
tela_qr2 =uic.loadUi("QR_tela3.ui")
telas3.pushButton_2.clicked.connect(dados_tela3)

telas3.show()
app.exec()
