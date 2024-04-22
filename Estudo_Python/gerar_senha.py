import random
import string

def generate_password(length=12):
  # Define os caracteres possíveis para a senha
  characters = string.ascii_letters + string.digits + string.punctuation
  print("Caracteres definidos:", characters)
  
  # Gera a senha aleatória usando os caracteres definidos
  password = ''.join(random.choice(characters) for _ in range(length))

  return password

if __name__ == "__main__":
  # Chama a função para gerar uma senha de 12 caracteres
  password = generate_password()
  print("Senha gerada:", password)
