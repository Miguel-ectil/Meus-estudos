from PyQt5 import uic,QtWidgets

def dados_tela5():
    QR_tela5.show()


app=QtWidgets.QApplication([])
telas_5=uic.loadUi("telas_5.ui")
QR_tela5 =uic.loadUi("tela5_2qr.ui")
telas_5.pushButton_2.clicked.connect(dados_tela5)

telas_5.show()
app.exec()
