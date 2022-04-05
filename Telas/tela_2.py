import logo
from PyQt5 import uic,QtWidgets
from telas_2 import Ui_MainWindow

def datalogic_leitor():
    telas3.show()
def tela3_qr():
    QR_tela3.show() 


def elgin_leitor():
    telas_4.show()
def tela4_qr():
    tela4_2qr.show()


def tanca_leitor():
    telas_5.show()
def tela5_qr():
    tela5_2qr.show()


def zebra_leitor():
    telas_6.show()
def tela6_qr():
    tela6_2qr.show()
                     
#formulario.label_5.setText(opcao)


app=QtWidgets.QApplication([])
telas_2=uic.loadUi("telas_2.ui")
telas3=uic.loadUi("telas3.ui")
QR_tela3= uic.loadUi("QR_tela3.ui")
telas_2.pushButton_2.clicked.connect(datalogic_leitor)
telas3.pushButton_2.clicked.connect(tela3_qr)
 
telas_4=uic.loadUi("telas_4.ui")
tela4_2qr=uic.loadUi("tela4_2qr.ui")
telas_2.pushButton_3.clicked.connect(elgin_leitor)
telas_4.pushButton_2.clicked.connect(tela4_qr)

telas_5=uic.loadUi("telas_5.ui")
tela5_2qr=uic.loadUi("tela5_2qr.ui")
telas_2.pushButton_4.clicked.connect(tanca_leitor)
telas_5.pushButton_2.clicked.connect(tela5_qr)

telas_6=uic.loadUi("telas_6.ui")
tela6_2qr=uic.loadUi("tela6_2qr.ui")
telas_2.pushButton_5.clicked.connect(zebra_leitor)
telas_6.pushButton_2.clicked.connect(tela6_qr)

telas_2.show()
app.exec()


if telas_2 == "__main__":
    import sys
    app = QtWidgets.QApplication(sys.argv)
    Dialog = QtWidgets.QMainWindow()
    ui = datalogic_leitor()
    ui.setupUi(Dialog)
    Dialog.show()
    sys.exit(app.exec_())

    