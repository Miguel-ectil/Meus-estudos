// export { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: any, res: any) {
  return res.status(200).json({
    "numeroAutorizacao": "202300374738050",
    "estadoAutorizacao": "CRIADA",
    "motivoEstampagem": "VEICULO_NORMAL",
    "tiposPlacas": {
        "dianteira": false,
        "traseira": true,
        "segundaTraseira": false
    },
    "tipoVeiculoOficial": null,
    "municipioAutorizado": {
        "id": "7107",
        "nome": "SAO PAULO",
        "uf": "SP"
    },
    "ufOrigemAutorizacao": "SP",
    "veiculo": {
        "placa": "GHQ7F85",
        "tipo": "MOTOCICLETA",
        "especie": "PASSAGEIRO",
        "categoria": "PARTICULAR"
    },
    "dataHoraInclusao": "2023-02-02T16:09:32",
    "cancelamento": null,
    "_links": {
        "Consulta autorização de estampagem por número da autorização.": {
        "href": "http://emplaca.estaleiro.serpro.gov.br/emplaca-ws/api-estampador/autorizacoes-estampagem/202300374738050"
        }
    },
    "chassis": '9CJRCA751PGSA0016',
    "serialBlankTraseira": 210614039412701,
    "disableTraseira": true
  });
}