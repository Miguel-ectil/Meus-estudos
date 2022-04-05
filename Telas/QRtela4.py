from PyQt5 import uic,QtWidgets

def dados_tela4():
    tela4_qr.show()


app=QtWidgets.QApplication([])
telas_4=uic.loadUi("telas_4.ui")
tela4_qr =uic.loadUi("tela4_2qr.ui")
telas_4.pushButton_2.clicked.connect(dados_tela4)

telas_4.show()
app.exec()
