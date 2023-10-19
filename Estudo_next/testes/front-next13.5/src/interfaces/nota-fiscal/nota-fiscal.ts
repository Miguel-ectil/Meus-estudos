export interface emissaoNf {
//   numeroAe?: any;
  cpfCnpj?: any,
  razaoSocial?: any,
  email?: any,
  telefone: {
    ddd?: any,
    numero?: any,
  },
  endereco: {
    cidade?: any,
    bairro?: any,
    numero?: any,
    estado?: any,
    cep?: any,
	complemento?: any,
	logradouro?: any
  },
  itens: {
	cfop?: any,
  },
  pagamentos: {
	valorNota?: any,
  },
  tipoNota?: any,
  observacao?: any,
//   numNota?: any,
//   chaveNota?: ''| null,
//   alteraCfop?: any,
}
		  export interface FormClientesFiscais {
			  cidade?: any;
			  bairro?: any;
			  estado?: any;
			  cep?: any;
	
			numero_autorizacao?: any;
			cliente?:{},
			solicitante?:{}
				numeroAE?: any,
					  cpfCnpj?: any,
					  nome?: any| null,
					  nomeSolicitante?: any| null,
					  razaoSocial?: any,
					  email?: any,
					  valorTotal?: any,
					  inscricaoEstadual?: any,
					  observacao?: any,
					  cfop?: any,
					  numNota?: any,
					  chaveNota?: ''| null,
					  saida?: any,
					  alteraCfop?: any,
					  liberaCampos?: any,
					  rgIe?: any,
					  
					  telefone?: {
						ddd?: any,
						numero?: any,
								  },
					endereco?: {
					logradouro?: any,
					cidade?: any,
					bairro?: any,
					numero?: any,
					descricaoCidade?: any,
					estado?: any,
					cep?: any,
						
					
					  },
			

}


