export interface EmissaoNota {
    tipoOperacao?:string,
    numeroNota?:string,
    serieNota?:string,
    operacao?:string,
    naturezaDaOperacao?:string,
    emissao?:string,
    dataDaEmissao?:string,
    dataSaidaNota?:string,
    selectedFinalidade?:string,
    localDaOperacao?:string,
    nomeCliente?:string,
    cpfCnpj?:string,
    consumidor?:string,
    selectedFrete?:boolean,
    dadosTransportadora: {
        cnpjTransportador?:string,
        ufTransportador?:string,
        placaTransportador?:string,
    },
    enderecoRemente: {
        cep?:string,
        inscricaoEstadual?:string,
        tipoLogradouro?:string,
        logradouro?:string,
        uf?:string,
        descricaoCidade?:string,
        bairro?:string,
        numero?:string,
        complemento?:string,
    }
    valorEntrega: {
        porcentagemDesc?:string,
        descontoPercentual?:string,
        valorDesconto?:string,
        valorFrete?:string,
        valorSeguro?:string,
        valorDespesas?:string,
    }

    todosDadosProdutos?:any
    valorUnitario?:string
    valorIPI?:string
    valorICMS?:string
    valorIcmsST?:string
    dadosPagamento: {
        formaPagamento?:string
        valorPagamento?:string
        valorPago?:string
        troco?:string
        valorTotalProdutos?:string
        valorRestante?:string
    }
    encerramentoNota: {
        marcaVolumes?:string
        qtdeVolumes?:string
        especieVolumes?:string
        pesoBruto?:string
        pesoLiquido?:string
        baseIcmsST?:string
        baseICMS?:string
        baseIPI?:string
        valorTotalIcmsST?:string
        valorTotalICMS?:string
        valorTotalIPI?:string
        valorTotalProdutos?:string
        valorTotalNota?:string
        observacao?:string
    }
}

export interface EmissaoCupomFiscal {
    valorNFCe?:string
    inserirDados?:boolean
    cpfCnpj?:string
    nomeCliente?:string
    todosDadosProdutos?:any
    valorUnitario?:string
    valorIPI?:string
    valorICMS?:string
    valorIcmsST?:string
    dadosPagamento: {
        formaPagamento?:string
        valorPagamento?:string
        valorPago?:string
        troco?:string
        valorTotalProdutos?:string
        valorRestante?:string
    }
    encerramentoNota: {
        marcaVolumes?:string
        qtdeVolumes?:string
        especieVolumes?:string
        pesoBruto?:string
        pesoLiquido?:string
        baseIcmsST?:string
        baseICMS?:string
        baseIPI?:string
        valorTotalIcmsST?:string
        valorTotalICMS?:string
        valorTotalIPI?:string
        valorTotalProdutos?:string
        valorTotalNota?:string
        observacao?:string
    }
}