import forca
import advinhaçao

print("*************************************")
print("======== escolha o seu jogo! ========")
print("*************************************")

print("(1) FORCA (2) ADVINHAÇÃO")

jogo = int(input("Escolhe uma delas ? "))
print("*************************************")

if (jogo == 1):
    print("======== JOGANDO FORCA ========")
    forca.jogar()
elif (jogo == 2):
    print("====== JOGANDO ADVINHAÇAO ======")
    advinhaçao.jogar()

