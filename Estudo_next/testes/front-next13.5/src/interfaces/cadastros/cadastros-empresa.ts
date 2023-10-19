
export interface cadastroNf {
	certificado?: string;
	cpfCnpj?: string;
	cnpj?: string;
	csc?: string;
	dddTelefone?: string;
	email?: string;
	id?: string;
	idcsc?: string;
	incentivadorCultural?: string;
	incentivoFiscal?: string;
	inscricaoEstadual?: string;
	inscricaoMunicipal?: string;
	nomeFantasia?: string;
	regimeTributario?: string;
	numeroCf?: string;
	numeroNf?: string;
	razaoSocial?: string;
	regimeTributarioEspecial?: string;
	serieCf?: string;
	serieNf?: string;
	simplesNacional?: string;
	telefone?: string;
	tributoEstadual?: string;
	tributoFederal?: string;
	tributoFonte?: string;
	tributoMunicipal?: string;
	dadosNf:{
	  cfop?: string;
	  cofinsAliquota?: string;
	  cofinsBaseCalculoValor?: string;
	  cofinsCst?: string;
	  cofinsValor?: string;
	  descricao?: string;
	  icmsCreditoSimplesPercentual?: string;
	  icmsCreditoSimplesValor?: string;
	  icmsCst?: string;
	  icmsOrigem?: string;
	  ncm?: string;
	  pisCst?: string;
	}
	endereco: {
	  bairro?: string;
	  cep?: string;
	  codigoCidade?: string;
	  cidade?: string;
	  complemento?: string;
	  estado?: string;
	  logradouro?: string;
	  numero?: string;
	  tipoLogradouro?: string;
	}
	nfse : {
	  ativo?: string;
	  tipoContrato?: string;
	}
	nfe : {
	  ativo?: string;
	  tipoContrato?: string;
	}
	nfce : {
	  ativo?: string;
	  tipoContrato?: string;
	}
  }