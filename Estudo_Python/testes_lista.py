from digital_certificate.cert import Certificate
from requests_pkcs12 import post, get
import json
import urllib3
from datetime import datetime

from acessCert import AesEmEstampagem

senhas = []
certificates = []
dados = AesEmEstampagem()
certificados = dados[1]
certificados_maior_data_atual = []
certificados_com_datas = []

for certificado in certificados:
  senhas.append(certificado[1])
  certificates.append(certificado[0])
  
def obter_datas_validade(certificates, senhas):
  try:
    before_dates = []
    after_dates = []
    
    for i in range(len(certificates)):
      cert = Certificate(
        pfx_file=certificates[i],
        password=str.encode(senhas[i])
      )  # Cria um certificado que possa ser acessado
      cert.read_pfx_file()  # Lê o certificado
      # Pega a data de validade do certificado
      beforeDate = datetime.strptime(
        str(cert.not_valid_before()), "%Y-%m-%d %H:%M:%S")
      before_dates.append(beforeDate.strftime("%d/%m/%Y"))
      afterDate = datetime.strptime(
        str(cert.not_valid_after()), "%Y-%m-%d %H:%M:%S")
      after_dates.append(afterDate.strftime("%d/%m/%Y"))
    
    return before_dates, after_dates
  except Exception as e:
    print(e)
    return False

# Chamar a função obter_datas_validade() passando as listas certificates e senhas como argumentos
before_dates, after_dates = obter_datas_validade(certificates, senhas)

data_atual = datetime.now()
    
# # Exemplo de uso dos valores retornados pela função
# print("Datas de validade antes:")
# print(before_dates)
# print("Datas de validade depois:")
# print(after_dates)

# # Verificando autorização de estampagem na Serpro
class ConsultaInicioEstampagem:  
    def __init__(self, certs, pwds) -> None:
        self.certs = certs
        self.pwds = pwds
        self.url = 'https://emplaca.estaleiro.serpro.gov.br/emplaca-ws'
        self.enviar = '/api-estampador/autorizacoes-estampagem/'

    def buscando_json(self, num_autorizacao):
        # for cert, pwd in zip(self.certs, self.pwds):
            response = get(self.url + self.enviar + num_autorizacao,
                            verify=True,
                            pkcs12_filename=self.certs,
                            pkcs12_password=self.pwds)
            jsonInicioEstampagem = response.json()

            if response.status_code == 200:
              print(f'\n Requisição bem-sucedida para autorização {num_autorizacao}')
              # print(jsonInicioEstampagem)
              return
            elif response.status_code == 403:
              cert_index = self.certs.index(certs)
              print(f'\n Requisição falhou com código {response.status_code} para autorização {num_autorizacao}: Certificado expirado - Certificado: {certificates[cert_index]}')
              return
            else:
              print(f'\n Requisição falhou com código {response.status_code} para autorização {num_autorizacao}')

autorizacoes = dados[0]

for certificado, data in zip(certificados, after_dates):
    certificado_com_data = certificado + (data,) # Adiciona a data à tupla do certificado
    certificados_com_datas.append(certificado_com_data) # Adiciona o certificado com a data à nova lista

for certificate in certificados_com_datas:
    data_string = certificate[2] # Obtém a string de data da tupla
    data_tupla = datetime.strptime(data_string, '%d/%m/%Y') # Converte a string de data para um objeto datetime
    data_tupla = data_tupla.date() # Obtém apenas a parte da data do objeto datetime        
    data_atual_formatada = data_atual.strftime('%d/%m/%Y') # Formata a data atual no mesmo formato da data do certificado
    
    # Compara a data do certificado com a data atual
    if data_tupla > datetime.strptime(data_atual_formatada, '%d/%m/%Y').date():
      certs = certificate[0]
      pwds = certificate[1]
      print(certificate)
      print(pwds) 
nova_consulta_serpro = ConsultaInicioEstampagem(certs, pwds)

# para cada autorização na lista, realiza a consulta ao serviço Serpro
for autorizacao in autorizacoes:
    nova_consulta_serpro.buscando_json(autorizacao)

# data_atual = datetime.now()

# for i in range(len(autorizacoes)):
#   if i < len(after_dates):
#     data_vencimento = datetime.strptime(after_dates[i], "%d/%m/%Y")
#     if data_atual <= data_vencimento:
#       # Realize a consulta na serpro para a AES correspondente
#       print(f"Consultando AES \033[32m{autorizacoes[i]} \033[mna serpro...")
#     else:
#       print(f"AES {autorizacoes[i]} \033[1;31mcom certificado vencido.\033[m")
#   else:
#     print(f"AES {autorizacoes[i]}  sem data de vencimento correspondente.")