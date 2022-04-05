from QR_tela5 import QR_tela5
from PyQt5 import uic,QtWidgets

def dados_tela6():
    tela6_qr2.show()


app=QtWidgets.QApplication([])
telas_6=uic.loadUi("telas_6.ui")
tela6_qr2 =uic.loadUi("tela6_2qr.ui")
telas_6.pushButton_2.clicked.connect(dados_tela6)

telas_6.show()
app.exec()
