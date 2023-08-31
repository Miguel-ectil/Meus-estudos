import openpyxl
import os
import subprocess
import time

valor_a = 40
valor_b = 40

# Caminho para o arquivo Excel
excel_file_path = 'arquivo_excel.xlsx'

# Verificar se os valores são numéricos e diferentes de None
if valor_a is None or valor_b is None:
    print("Valores nas células A1 e B1 devem ser preenchidos com números.")
    resultado = None
else:
    resultado = valor_a * valor_b

# Verificar se o resultado não é None antes de continuar
if resultado is not None:
    # Caminho para o arquivo de texto
    texto_file_path = 'teste.txt'

    # Escrever o resultado no arquivo de texto
    with open(texto_file_path, 'w') as f:
        f.write(str(resultado))

    # Abrir a calculadora automaticamente
    subprocess.run(['gnome-calculator'])

    # Aguardar um tempo para que você possa fazer o cálculo manualmente
    time.sleep(10)  # Ajuste o tempo conforme necessário

    # Ler o resultado do arquivo de texto
    with open(texto_file_path, 'r') as f:
        resultado_calculadora = float(f.read())

    # Abrir o arquivo Excel novamente
    workbook = openpyxl.load_workbook(excel_file_path)
    sheet = workbook.active

    # Escrever o resultado de volta no Excel
    sheet['C1'].value = resultado_calculadora

    # Salvar as alterações no arquivo Excel
    workbook.save(excel_file_path)

    # Fechar o arquivo Excel
    workbook.close()

    print("Processo concluído.")