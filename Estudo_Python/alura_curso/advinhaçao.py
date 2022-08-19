import random

def jogar():

    print("*********************************************")
    print("=== Seja bem vindo ao jogo de Advinhaçao! ===")
    print("*********************************************")

    numero_secreto = random.randrange(1,101)
    total_de_tentativas = 0
    pontos = 1000

    print("Que nivel de dificuldade você deseja? ")
    print("(1) facil\n(2) medio\n(3) dificil")
    nivel = int(input("digite o nivel: "))

    if(nivel == 1):
        total_de_tentativas = 18
    elif(nivel == 2):
        total_de_tentativas = 10
    else:
        total_de_tentativas = 4

    for  rodada in range(1, total_de_tentativas + 1):
        print("Tentativa {} de {}".format(rodada,total_de_tentativas))
        chute_str = input("Digite um numero entre 1 e 100: ")
        print("Voçê digitou o numero: ",chute_str)
        chute = int(chute_str)

        if(chute < 1 or chute > 100):
            print("O certo e digitar um numero entre 1 e 100!")


        acertou = chute == numero_secreto
        maior   = chute > numero_secreto
        menor   = chute < numero_secreto

        if(acertou):
            print("Parabens você acertou o  numero secreto!")
            print("E fez {} pontos!".format(pontos))

        else:
            if(maior):
               print("Você nao acerto! e o seu chute foi maior do que o numero_secreto")
            elif(menor):
              print("Você não acertou! e o seu chute foi menor do que o numero_secreto")
            pontos_perdidos = numero_secreto - chute
            pontos = pontos - pontos_perdidos

    print("Fim de jogo")

if(__name__ == " __main__"):
    jogar()