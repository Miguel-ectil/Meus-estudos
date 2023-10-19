"use client"

import React, { useState, useEffect } from "react";
import {Card, Textarea, Radio, Input, Select, Option, TabsHeader, Tab, Tabs, Typography,} from "@material-tailwind/react";
import { AiOutlinePlus} from "react-icons/ai";

const Emitir_NotaFiscal: React.FC = () => {
  const [type, setType] = useState("informacaoNota");
  // INFORMAÇÕES DA NOTA
  const [tipoPagina, setTipoPagina] = useState<any>("0");
  const [tipoOperacao, setTipoOperacao] = useState<any>("");
  const [numeroNota, setNumeroNota] = useState<any>("");
  const [serieNota, setSerieNota] = useState<any>("");
  const [operacao, setOperacao] = useState<any>("");
  const [naturezaDaOperacao, setNaturezaDaOperacao] = useState<any>("0");
  const [emissao, setEmissao] = useState<any>("0")
  const [presenca, setPresenca] = useState<any>("")
  const [dataDaEmissao, setDatadaEmissada] = useState<any>("")
  const [dataSaidaNota, setDataSaidaNota] = useState<any>("")
  const [selectedFinalidade, setSelectedFinalidade] = useState<any>("0")
  const [localDaOperacao, setLocalDaOperacao] = useState<any>("0")
  // Dados de Entrega da Nota
  const [nomeCliente, setNomeCliente] = useState<any>("")
  const [cpfCnpj, setCpfCnpj] = useState<any>("")
  const [consumidor, setConsumidor] = useState<any>("0")
  const [selectedFrete, setFrete] = useState<any>("0")
  //Dados da Transportadora
  const [cnpjTransportador, setCnpjTransportador] = useState<any>("");
  const [ufTransportador, setUfTransportador] = useState<any>("");
  const [placaTransportador, setPlacaTransportador] = useState<any>("");
  //Dados do Endereço do Rementente
  const [cep, setCep] = useState<any>('')
  const [inscricaoEstadual, setInscricaoEstadual] = useState("");
  const [tipoLogradouro, setTipoLogradouro] = useState<any>('')
  const [logradouro, setLogradouro] = useState("");
  const [uf, setUf] = useState("");
  const [descricaoCidade, setDescricaoCidade] = useState("");
  const [bairro, setBairro] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")
  // Dados do Valor da Entrega
  const [porcentagemDesc, setPorcentagemDesc] = useState("")
  const [descontoPercentual, setDescontoPercentual] = useState("")
  const [valorDesconto, setValorDesconto] = useState("")
  const [valorFrete, setValorFrete] = useState("")
  const [valorSeguro, setValorSeguro] = useState("")
  const [valorDespesas, setValorDespesas] = useState("")

  // NFCe
  const [valorNFCe, setValorNFCe] = useState<any>("")
  const [inserirDados, setInserirDados] = useState<any>(false)

  // PRODUTOS
  const [selectedProduto, setSelectedProduto] = useState<any>("")
  const [quantidadeProduto, setQuantidadeProduto] = useState<number>(0);
  const [valorUnitario, setValorUnitario] = useState<any>("");
  const [valorIPI, setValorIPI] = useState<any>("");
  const [valorICMS, setValorICMS] = useState<any>("");
  const [valorIcmsST, setValorIcmsST] = useState<any>("");

  // FORMA DE PAGAMENTO
  const [formaPagamento, setFormaPagamento] = useState<any>("");
  const [valorPagamento, setValorPagamento] = useState<any>(0);
  const [valorPago, setValorPago] = useState<any>();
  const [troco, setTroco] = useState<any>(0);
  const [valorRestante, setValorRestante] = useState<any>();

  // ENCERRAMENTO
  const [marcaVolumes, setMarcaVolumes] = useState<any>("");
  const [qtdeVolumes, setQtdeVolumes] = useState<any>("");
  const [especieVolumes, setEspecieVolumes] = useState<any>("");
  const [pesoBruto, setPesoBruto] = useState<any>("");
  const [pesoLiquido, setPesoLiquido] = useState<any>("");
  const [baseIcmsST, setBaseIcmsST] = useState<any>();
  const [baseICMS, setBaseICMS] = useState<any>();
  const [baseIPI, setBaseIPI] = useState<any>();
  const [valorTotalIcmsST, setValorTotalIcmsST] = useState<any>();
  const [valorTotalICMS, setValorTotalICMS] = useState<any>();
  const [valorTotalIPI, setValorTotalIPI] = useState<any>();
  const [valorTotalNota, setValorTotalNota] = useState<any>();
  const [observacao, setObservacao] = useState<any>();

  const [todosDadosProdutos, setTodosDadosProdutos] = useState<any[]>([]);
  const TABLE_HEAD = ["Produtos","Quantidade","Valor"];
  const ordemRenderizacao = ['nomeProduto',"Quantidade",'Valor'];

  const [todosDadosPagamentos, setTodosDadosPagamentos] = useState<any[]>([]);
  const TABLE_HEAD2 = ["Forma de Pagamento","Valor","Data Vencimento", "Cliente Devedor", "Ações"];
  const ordemRenderizacao2 = ['formaPagamento',"valor",'dataVencimento','clienteDevedor','acoes'];

  // Cálculos para paginação da tabela
  const itemsPerPage = 10;
  const [paginaAtual, setPaginaAtual] = useState(1);
  const indiceInicial = (paginaAtual - 1) * itemsPerPage;
  const itensVisiveis = todosDadosProdutos.slice(
    indiceInicial,
    indiceInicial + itemsPerPage
  );

  const handleFreteChange = (e:any) => {
    setFrete(e);
  };

  const definindoOperacao = () => {
    if (tipoOperacao === "1") {
      setOperacao("1")
      setNaturezaDaOperacao("1")
      setLocalDaOperacao("1")
      setSelectedFinalidade("1")
    }
  }

  const formatarParaMoeda = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value/100);
  };

  const handleValorPagamentoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove caracteres não numéricos
    const valorNumerico = parseFloat(e.target.value.replace(/[^\d]/g, ''));
    setValorPagamento(valorNumerico / 100);
  };

  const handleValorTotalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove caracteres não numéricos
    const valorNumerico = parseFloat(e.target.value.replace(/[^\d]/g, ''));
    setValorTotalProdutos(valorNumerico / 100);
  };

  const handleValorPagoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove caracteres não numéricos
    const valorNumerico = parseFloat(e.target.value.replace(/[^\d]/g, ''));
    setValorPago(valorNumerico / 100);
  };

  const handleTrocoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove caracteres não numéricos
    const valorNumerico = parseFloat(e.target.value.replace(/[^\d]/g, ''));
    setTroco(valorNumerico / 100);
  };

  const handleValorRestanteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove caracteres não numéricos
    const valorNumerico = parseFloat(e.target.value.replace(/[^\d]/g, ''));
    setValorRestante(valorNumerico / 100);
  };

  // O que define os valores fixo dos produtos
  const opcoesProdutos = [
    { label: "Suporte de carro", preco: 22.99 },
    { label: "Suporte de Moto", preco: 22.99 },
    { label: "Placa de carro", preco: 44.50 },
    { label: "Placa Mini", preco: 44.50 },
    { label: "Placa colecionador", preco: 44.50 },
    { label: "Kit acessorios", preco: 11.99 },
  ];

  const handleAddChange = () => {
    const produtoSelecionado = opcoesProdutos.find(item => item.label === selectedProduto);

    if (selectedProduto !== "" && quantidadeProduto !== null && quantidadeProduto > 0 && produtoSelecionado) {
      const novoItem = {
        nomeProduto: selectedProduto,
        Quantidade: quantidadeProduto, 
        Valor: produtoSelecionado.preco * quantidadeProduto
      };

      const produtoExistente = todosDadosProdutos.find(item => item.nomeProduto === novoItem.nomeProduto);
      // logica: se o item não tem na lista: Adiciona o item novo, se ja existir na lista: Soma a quantidade  
      if (!produtoExistente) {
        setTodosDadosProdutos([...todosDadosProdutos, novoItem]);
        setQuantidadeProduto(0)
      } else {
        const updatedQtde = todosDadosProdutos.map((item) => {
          if (item.nomeProduto === novoItem.nomeProduto) { // verifica qual item foi selecionado no SELECT de produtos
            return {
              ...item,
              Quantidade: item.Quantidade + quantidadeProduto, // em seguida aumenta sua quantidade
            };
          }
          return item;
        });
      
        const updated = updatedQtde.map((item) => {
          if (item.nomeProduto === novoItem.nomeProduto) { // verifica qual item foi selecionado no SELECT de produtos
            return {
              ...item,
              Valor: produtoSelecionado.preco * item.Quantidade, // em seguida aumenta o valor de acordo com sua quantidade
            };
          }
          return item;
        });
        setTodosDadosProdutos(updated);
        setQuantidadeProduto(0)
      }
    }
  }
  const [valorTotalProdutos, setValorTotalProdutos] = useState<any>(0); 
  // para pegar o Valor total e a quantidade de Total
  useEffect(() => {
    let total = 0;
    for (const produto of todosDadosProdutos) { // acessando a lista dos produtos
      total += produto.Valor;
    }
    setValorTotalProdutos(total);

    let valorTipoPagamento = 0
    for (const pagamento of todosDadosPagamentos) {
      valorTipoPagamento += pagamento.valor;
    }
    setValorPago(valorTipoPagamento)
    if (valorPago > valorTotalProdutos) {
      const troco_pagamento = valorPago - valorTotalProdutos
      setTroco(troco_pagamento)
    } else {
      const valor_restante = valorTotalProdutos - valorPago
      setValorRestante(valor_restante)
    }
    
  }, [todosDadosProdutos, todosDadosPagamentos, valorPago, valorTotalProdutos]);

  const [erroCamposObrigatorios, setErroCamposObrigatorios] = useState<any[]>([]);
  let camposObrigatorios = [
    { valor: tipoPagina, nome: 'tipo pagina' },
    { valor: tipoOperacao, nome: 'tipo de operacao' },
    { valor: numeroNota, nome: 'numero nota' },
    { valor: serieNota, nome: 'serie' },
    { valor: operacao, nome: 'operacao' },
    { valor: naturezaDaOperacao, nome: 'natureza da operacao' },
    { valor: emissao, nome: 'emissao' },
    { valor: presenca, nome: 'presenca' },
    { valor: dataDaEmissao, nome: 'data de emissao' },
    { valor: dataSaidaNota, nome: 'data saida' },
    { valor: selectedFinalidade, nome: 'finalidade' },
    { valor: localDaOperacao, nome: 'local operacao' },
    // dados de entrega da nota
    { valor: nomeCliente, nome: 'nome cliente' },
    { valor: cpfCnpj, nome: 'cpfCnpj' },
    { valor: consumidor, nome: 'consumidor' },
    { valor: selectedFrete, nome: 'frete' },
  ];

  let camposObrigatoriosProduto = [
    { valor: valorUnitario, nome: 'valor unitario' },
    { valor: valorIPI, nome: 'valor IPI' },
    { valor: valorICMS, nome: 'valor ICMS' },
    { valor: valorIcmsST, nome: 'valor ICMS ST' },
  ]

  let camposObrigatoriosPagamento = [
    { valor: formaPagamento, nome: 'forma pagamento' },
  ]

  let camposObrigatoriosEncerramento = [
    { valor: marcaVolumes, nome: 'marca volumes' },
    { valor: qtdeVolumes, nome: 'qtde volumes' },
    { valor: especieVolumes, nome: 'especie volumes' },
    { valor: pesoBruto, nome: 'peso bruto' },
    { valor: pesoLiquido, nome: 'peso liquido' },

  ]

  const isCampoVazio = (campoValor:any) => {
    return campoValor === '';
  };

  const [disableTab1, setDisableTab1] = useState<any>(false);
  const [disableTab2, setDisableTab2] = useState<any>(true);
  const [disableTab3, setDisableTab3] = useState<any>(true);
  const [disableTab4, setDisableTab4] = useState<any>(true);
  
  const handleTabChange1 = () => {
    if (selectedFrete !== "0" && selectedFrete != "4" ) {
      camposObrigatorios.push(
        { valor: cnpjTransportador, nome: 'cnpj transportador' },
        { valor: ufTransportador, nome: 'uf transportador' },
        { valor: placaTransportador, nome: 'placa transportador' },
        // dados do endereco do remetente 
        { valor: cep, nome: 'cep' },
        { valor: tipoLogradouro, nome: 'tipo logradouro' },
        { valor: logradouro, nome: 'logradouro' },
        { valor: uf, nome: 'estado' },
        { valor: descricaoCidade, nome: 'cidade' },
        { valor: bairro, nome: 'bairro' },
        { valor: numero, nome: 'numero' },
        // dados do valor da entrega
        { valor: valorFrete, nome: 'valor frete' },
        { valor: valorSeguro, nome: 'valor seguro' },
        { valor: valorDespesas, nome: 'valor despesas' },
      )
    }
    if (tipoPagina === "1") {
      const novosCamposObrigatorios = [
        { valor: valorNFCe, nome: 'valor nfce' },
      ]
      camposObrigatorios = novosCamposObrigatorios
      if (inserirDados === true) {
        novosCamposObrigatorios.push(
          { valor: cpfCnpj, nome: 'cpf cnpj cliente' },
          { valor: nomeCliente, nome: 'nome cliente' },
        )
      } 
    }
    const camposVazios = camposObrigatorios.filter(campo => isCampoVazio(campo.valor));
    if (camposVazios.length > 0) {
      setErroCamposObrigatorios(camposVazios.map(campo => campo.nome));
    }
    else {
      setErroCamposObrigatorios([]);
      setDisableTab1(true);
      setDisableTab2(false);
      setDisableTab3(true);
      setType("produtos");
    }
  };

  const handleTabChange2 = () => {
      setErroCamposObrigatorios([]);
      setDisableTab1(false)
      setDisableTab2(true)
      setType("informacaoNota") 
  };

  const handleTabChange3 = () => {
    const camposVazios = camposObrigatoriosProduto.filter(campo => isCampoVazio(campo.valor));
    if (camposVazios.length > 0) {
      setErroCamposObrigatorios(camposVazios.map(campo => campo.nome));
    }
    else {
      setDisableTab2(true)
      setDisableTab3(false)
      setDisableTab4(true)
      setType("formaPagamento") 
    }
  };

  const handleTabChange4 = () => {
    const camposVazios = camposObrigatoriosPagamento.filter(campo => isCampoVazio(campo.valor));
    if (camposVazios.length > 0) {
      setErroCamposObrigatorios(camposVazios.map(campo => campo.nome));
    }
    else {
      setDisableTab3(!disableTab3)
      setDisableTab4(false)
      setType("Encerramento") 
    }
  };

  const handleAddChange2 = () => {
    const novoItem = {
      formaPagamento: formaPagamento,
      valor: valorPagamento,
      dataVencimento: "",
      clienteDevedor: nomeCliente,
      acoes: ""
    };
    const pagamentoExistente = todosDadosPagamentos.find(item => item.formaPagamento === novoItem.formaPagamento);
    if (!pagamentoExistente) {
      setTodosDadosPagamentos([...todosDadosPagamentos, novoItem]);
      setQuantidadeProduto(0)
    } else {
      const updatedValor = todosDadosPagamentos.map((item) => {
        if (item.formaPagamento === novoItem.formaPagamento) {
          return {
            ...item,
            valor: item.valor + valorPagamento
          }
        }
        return item
      })
      setTodosDadosPagamentos(updatedValor)
    }    
  }
  // const serviceNFe = useNotaFiscalService()
  
  const emitirNota = () => {
    const camposVazios = camposObrigatoriosEncerramento.filter(campo => isCampoVazio(campo.valor));
    if (camposVazios.length == 0) {
      if (tipoPagina === "0") {
        const EmissaoNF: EmissaoNota = { 
          tipoOperacao, numeroNota, serieNota, operacao, naturezaDaOperacao, emissao, dataDaEmissao, dataSaidaNota, selectedFinalidade, localDaOperacao, nomeCliente, cpfCnpj, consumidor, selectedFrete,
          dadosTransportadora: {
            cnpjTransportador, ufTransportador, placaTransportador,
          },
          enderecoRemente: {
            cep, inscricaoEstadual, tipoLogradouro, logradouro, uf, descricaoCidade, bairro, numero, complemento,
          },   
          valorEntrega: {
              porcentagemDesc, descontoPercentual, valorDesconto, valorFrete, valorSeguro, valorDespesas,
          },
          todosDadosProdutos, valorUnitario, valorIPI, valorICMS, valorIcmsST,
          dadosPagamento: {formaPagamento, valorPagamento, valorPago, troco, valorTotalProdutos, valorRestante
          },
          encerramentoNota: { marcaVolumes, qtdeVolumes, especieVolumes, pesoBruto, pesoLiquido,baseIcmsST, baseICMS, baseIPI, valorTotalIcmsST, valorTotalICMS, valorTotalIPI, valorTotalProdutos, valorTotalNota, observacao
          },
        }
    
        serviceNFe.emitirNf(EmissaoNF)
        .then((res:any) => {
          console.log(res)
        })
        .catch((error:any) => {
          console.log(error)
        })
      } 
      else {
        const EmissaoNFCe: EmissaoCupomFiscal = {
          valorNFCe ,inserirDados ,cpfCnpj ,nomeCliente,
          todosDadosProdutos ,valorUnitario ,valorIPI ,valorICMS ,valorIcmsST,
          dadosPagamento: { formaPagamento ,valorPagamento ,valorPago ,troco ,valorTotalProdutos ,valorRestante
          },
          encerramentoNota: { marcaVolumes ,qtdeVolumes ,especieVolumes ,pesoBruto ,pesoLiquido ,baseIcmsST ,baseICMS ,baseIPI ,valorTotalIcmsST ,valorTotalICMS ,valorTotalIPI ,valorTotalProdutos ,valorTotalNota ,observacao
          },
        }
        serviceNFe.emitirCf(EmissaoNFCe)
        .then((res:any) => {
          console.log(res)
        })
        .catch((error:any) => {
          console.log(error)
        })
      }
    }
    else {
      setErroCamposObrigatorios(camposVazios.map(campo => campo.nome));
    }
  }

  return (
    <>
      <div 
        className='rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl'
      >
        <h2 
          className='p-3 font-mono text-lg font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased'
        >
          Dados da Nota Fiscal
        </h2>
      </div>
      <Card className="bg-white/40 border py-6 px-10 rounded-xl shadow-xl mt-4 overflow-hidden space-y-2">
          <Tabs value={type} key={type} className=" overflow-auto ">
              <TabsHeader className="relative mb-4">
                <Tab disabled={disableTab1} key="informacaoNota" value="informacaoNota">
                  Informações da Nota
                </Tab>
                <Tab disabled={disableTab2} key="produtos" value="produtos">
                  Produtos
                </Tab>
                <Tab disabled={disableTab3} key="formaPagamento" value="formaPagamento">
                  Forma de Pagamento
                </Tab>
                <Tab disabled={disableTab4} key="Encerramento" value="Encerramento">
                  Encerramento
                </Tab>
              </TabsHeader>
          </Tabs>
          {type === "informacaoNota" && (
            <>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Select
                  label="Tipo Pagina *"
                  value={tipoPagina}
                  onChange={(e) => {
                    setTipoPagina(e)
                  }}
                >
                  <Option value={'0'} className="hidden md:block">NFE</Option>
                  <Option value={'1'} className="hidden md:block">NFCE</Option>
                </Select>
                {erroCamposObrigatorios.includes('tipo pagina') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
              </div>
              {tipoPagina === "0" && (
              <>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Select
                    label="Tipo de Operação *"
                    value={tipoOperacao}
                    onChange={(e) => {
                      setTipoOperacao(e);                          
                      definindoOperacao();
                    }}
                    >
                    <Option value={"0"} className="hidden md:block">Entrada</Option>
                    <Option value={"1"} className="hidden md:block">Saida</Option>
                  </Select>
                  {erroCamposObrigatorios.includes('tipo de operacao') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4">
                  <Input
                    label="Numero da Nota"
                    value={numeroNota}
                    onChange={(e) => {
                    setNumeroNota(e.target.value);}}
                    className="rounded"
                    required                      
                  />
                  {erroCamposObrigatorios.includes('numero nota') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Input
                    label="Série "
                    required
                    className="rounded"
                    value={serieNota}
                    onChange={(e) => setSerieNota(e.target.value)}
                  />
                  {erroCamposObrigatorios.includes('serie') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
              </>
              )}
            </div>
              {tipoPagina === "1" && (
              <>
                <div className="flex flex-wrap">
                  <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                    <Input
                      label="Valor "
                      required
                      className="rounded"
                      value={valorNFCe}
                      onChange={(e) => setValorNFCe(e.target.value)}
                    />
                    {erroCamposObrigatorios.includes('valor nfce') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                  </div>
                  <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                    <Radio
                        name="formato2"
                        id="option1"
                        label="Inserir Dados"
                        onClick={() => setInserirDados(!inserirDados)}
                    />
                  </div>
                </div>
                {inserirDados === true && (
                <>
                  <div className="grid-cols-2 grid">
                    <div className="w-full sm:w-auto sm:flex-1 sm:mr-4">
                      <Input
                        label="CPF / CNPJ"
                        className="rounded"
                        required

                        value={cpfCnpj}
                        onChange={(e) => setCpfCnpj(e.target.value)}
                      />
                      {erroCamposObrigatorios.includes('cpf cnpj cliente') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                    </div>
                    <div className="w-full sm:w-auto sm:flex-1 mb-4">
                      <Input
                        label="Nome / Razão Social"
                        className="rounded"
                        value={nomeCliente}
                        onChange={(e) => setNomeCliente(e.target.value)}
                      />
                      {erroCamposObrigatorios.includes('nome cliente') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                    </div>
                  </div>
                </>
                )}
              </>
              )}
            {tipoPagina === "0" && (
            <>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Select label="Operação *"
                    value={operacao}
                    onChange={(e) => setOperacao(e)}
                  >
                    <Option value={"0"} className="hidden md:block">1 - Venda de produção do estabelecimento -  </Option>
                    <Option value={"1"} className="hidden md:block">2 - Devolução de venda de produção do estabelecimento</Option>
                  </Select>
                  {erroCamposObrigatorios.includes('operacao') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Select label="Natureza da Operação *"
                    value={naturezaDaOperacao}
                    onChange={(e) => setNaturezaDaOperacao(e)}>
                    <Option value={"0"} className="hidden md:block">5101 - Venda de Produção do Estabelecimento </Option>
                    <Option value={"1"} className="hidden md:block">1201 - Devolução de Venda de Produção do Estabelecimento</Option>
                  </Select>
                  {erroCamposObrigatorios.includes('natureza da operacao') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Select 
                    label="Emissão *"
                    value={emissao}
                    onChange={(e) => setEmissao(e)}
                  >
                    <Option value={"0"} className="hidden md:block">1 - Emissão Normal -  </Option>
                    <Option value={"1"} className="hidden md:block">2 -  Contingência fs-ia com impressão danfe em formulario de segurança </Option>
                  </Select>
                  {erroCamposObrigatorios.includes('emissao') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-5">
                  <Select
                    label="Presença *"
                    value={presenca}
                    onChange={(e) => setPresenca(e)}
                  >
                    <Option value={"0"} className="hidden md:block">1 -Não se Aplica (ajuste ou devolução) -  </Option>
                    <Option value={"1"} className="hidden md:block">2 -  Operação presencial  </Option>
                  </Select>
                  {erroCamposObrigatorios.includes('presenca') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
              </div>
        
              <div className="flex flex-wrap">
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Input
                    required
                    label="Data de emissão da nota "
                    value={dataDaEmissao}
                    className="rounded"
                    type="text"
                    onChange={(e) => setDatadaEmissada(e.target.value)}
                  />
                   {erroCamposObrigatorios.includes('data de emissao') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Input
                    label="Data de saida da nota *"
                    value={dataSaidaNota}
                    className="rounded"
                    onChange={(e) => setDataSaidaNota(e.target.value)}
                  />
                   {erroCamposObrigatorios.includes('data saida') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Select
                    label="Finalidade *"
                    value={selectedFinalidade}
                    onChange={(e) => setSelectedFinalidade(e)}
                    className="rounded"
                  >
                    <Option value="0">Normal </Option>
                    <Option value="1">Devolução</Option>
                  </Select>
                  {erroCamposObrigatorios.includes('finalidade') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Select label="Local da Operação *"
                    value={localDaOperacao}
                    onChange={(e) => setLocalDaOperacao(e)}
                    className="rounded"
                  >
                    <Option value="0">Interna </Option>
                    <Option value="1">Devolução</Option>
                  </Select>
                  {erroCamposObrigatorios.includes('local operacao') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
              </div>
        
              <h1 className="font-bold">Dados de Entrega da Nota</h1>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                  <Input
                    label="Nome ou Razão Social"
                    required
                    value={nomeCliente}
                    className="rounded"
                    onChange={(e) => setNomeCliente(e.target.value)}
                  />
                  {erroCamposObrigatorios.includes('nome cliente') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                  <Input
                    label="CPF/CNPJ"
                    required
                    value={cpfCnpj}
                    className="rounded"
                    onChange={(e) => setCpfCnpj(e.target.value)}
                  />
                  {erroCamposObrigatorios.includes('cpfCnpj') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                  <Select 
                    label="Consumidor *" 
                    value={consumidor}
                    onChange={(e) => setConsumidor(e)}
                    className="rounded">
                    <Option value={"0"}>Consumidor final </Option>
                    <Option value={"1"}>Normal</Option>
                  </Select>
                  {erroCamposObrigatorios.includes('consumidor') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                  <Select
                    label="Frete *"
                    value={selectedFrete}
                    onChange={handleFreteChange}
                    className="rounded"
                  >
                    <Option value={"0"}>Sem frete</Option>
                    <Option value={"1"}>Frete por conta do Emitente</Option>
                    <Option value={"2"}>Frete por conta do Remetente</Option>
                    <Option value={"3"}>Frete por conta de Terceiros</Option>
                    <Option value={"4"}>Transporte Próprio por conta do Remetente</Option>
                    <Option value={"5"}>Transporte Próprio por conta do Destinatário</Option>
                  </Select>
                  {erroCamposObrigatorios.includes('frete') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
              </div>
            </>
            )}
            {(selectedFrete != "0" && selectedFrete != "4" ) && (
              <>
                <h1 className="font-bold mt-2">Dados da Transportadora</h1>
                <div className="flex flex-wrap">
                  <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                    <Input
                      required
                      label="CNPJ Transportador"
                      value={cnpjTransportador}
                      onChange={e => setCnpjTransportador(e.target.value)}
                      className="rounded"
                    />
                    {erroCamposObrigatorios.includes('cnpj transportador') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                  </div>
                  <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                    <Input
                      required
                      label="UF Transportador"
                      value={ufTransportador}
                      onChange={e => setUfTransportador(e.target.value)}
                      className="rounded"
                    />
                    {erroCamposObrigatorios.includes('uf transportador') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                  </div>
                  <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                    <Input
                      required
                      label="Placa Transportador"
                      value={placaTransportador}
                      onChange={e => setPlacaTransportador(e.target.value)}
                      className="rounded"
                    />
                    {erroCamposObrigatorios.includes('placa transportador') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                  </div>
                </div>
              </>
            )}
            {selectedFrete != "0" && selectedFrete != "4" && (
            <>
              <h1 className="font-bold mt-2">Endereço do Remetente</h1>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                  <Input
                      required
                      label="CEP:"
                      className="mr-3 h-10 w-40 border bg-transparent border-gray-400 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-900 p-2"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                  />
                  {erroCamposObrigatorios.includes('cep') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                  <Input
                    label="Inscrição Estadual"
                    value={inscricaoEstadual}
                    onChange={e => setInscricaoEstadual(e.target.value)}
                    className="rounded"
                  />
                  {erroCamposObrigatorios.includes('emissao') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                  <Select
                      label="Tipo Logradouro:"
                      value={tipoLogradouro}
                      onChange={(e) => setTipoLogradouro(e)}
                  >
                      <Option value={'RUA'} className="hidden md:block">RUA</Option>
                      <Option value={'AVENIDA'} className="hidden md:block">AVENIDA</Option>
                      <Option value={'ALAMEDA'} className="hidden md:block">ALAMEDA</Option>
                      <Option value ={'TRAVESSA'} className="hidden md:block">TRAVESSA</Option>
                      <Option value={'PRAÇA'} className="hidden md:block">PRAÇA</Option>
                      <Option value={'RODOVIA'} className="hidden md:block">RODOVIA</Option>
                      <Option value={'ESTRADA'} className="hidden md:block">ESTRADA</Option>
                  </Select>
                  {erroCamposObrigatorios.includes('tipo logradouro') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
        
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                  <Input
                    required
                    label="Logradouro"
                    value={logradouro}
                    onChange={e => setLogradouro(e.target.value)}
                    className="rounded"
                  />
                  {erroCamposObrigatorios.includes('logradouro') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                  <Input
                    required
                    label="UF"
                    value={uf}
                    onChange={e => setUf(e.target.value)}
                    className="rounded"
                  />
                  {erroCamposObrigatorios.includes('estado') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Input
                    required
                    label="Cidade"
                    value={descricaoCidade}
                    onChange={e => setDescricaoCidade(e.target.value)}
                    className="rounded"
                  />
                  {erroCamposObrigatorios.includes('cidade') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Input
                    required
                    label="Bairro"
                    className="rounded"
                    onChange={(e) => setBairro(e.target.value)}
                    value={bairro}
                  />
                  {erroCamposObrigatorios.includes('bairro') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Input
                    required
                    label="Nº"
                    className="rounded"
                    onChange={(e) => setNumero(e.target.value)}
                    value={numero}
                  />
                  {erroCamposObrigatorios.includes('numero') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Input
                    label="Complemento"
                    className="rounded"
                    onChange={(e) => setComplemento(e.target.value)}
                    value={complemento}
                  />
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 mt-4">
                  <Input
                    label="% de Desconto"
                    value={porcentagemDesc}
                    onChange={e => setPorcentagemDesc(e.target.value)}
                    className="rounded"
                  />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 mt-4">
                  <Input
                    label="Desconto do Percentual"
                    className="rounded"
                    onChange={(e) => setDescontoPercentual(e.target.value)}
                    value={descontoPercentual}
                    disabled
                  />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 mt-4">
                  <Input
                    label="Valor Desconto"
                    className="rounded"
                    onChange={(e) => setValorDesconto(e.target.value)}
                    value={valorDesconto}
                  />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 mt-4">
                  <Input
                    required
                    label="Valor do Frete"
                    className="rounded"
                    onChange={(e) => setValorFrete(e.target.value)}
                    value={valorFrete}
                  />
                  {erroCamposObrigatorios.includes('valor frete') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 mt-4">
                  <Input
                    required
                    label="Valor do Seguro"
                    className="rounded"
                    onChange={(e) => setValorSeguro(e.target.value)}
                    value={valorSeguro}
                  />
                  {erroCamposObrigatorios.includes('valor seguro') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 mt-4">
                  <Input
                    required
                    label="Valor de Outras Despesas"
                    className="rounded"
                    onChange={(e) => setValorDespesas(e.target.value)}
                    value={valorDespesas}
                  />
                  {erroCamposObrigatorios.includes('valor despesas') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
                </div>
              </div>
            </>
          )}
          <div className="flex flex-wrap">
              <button
                onClick={handleTabChange1}
                className="px-4 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white transition ease-in-out duration-200 translate-10 "
              >
                Proximo
              </button>
          </div>
        </>
        )}
        {type === "produtos" && (
          <>
            <div className="flex flex-wrap space-x-6 justify-evenly">
              <div className="w-full sm:w-auto sm:flex-1 mb-2">
                <Select
                  label="Produto"
                  value={selectedProduto}
                  onChange={(e) => setSelectedProduto(e)}
                  className="rounded"
                >
                  <Option value="Suporte de carro">Suporte de carro</Option>
                  <Option value="Suporte de Moto">Suporte de Moto</Option>
                  <Option value="Placa de carro">Placa de carro</Option>
                  <Option value="Placa Mini">Placa Mini</Option>
                  <Option value="Placa colecionador">Placa colecionador</Option>
                  <Option value="Kit acessorios">Kit acessorios</Option>
                </Select>
              </div>
              <div className="w-full sm:w-auto sm:flex-1 mb-2">
                <div className="flex w-44">
                  <Input
                    type="number"
                    label="Quantidade"
                    className="rounded"
                    value={quantidadeProduto}
                    onChange={(e) => setQuantidadeProduto(parseInt(e.target.value))}
                  />
                  <button
                    onClick={handleAddChange}
                    className="ml-2 h-10 px-4 text-xs bg-blue-600 text-white shadow-lg flex items-center justify-center"
                  >
                      <AiOutlinePlus size={18} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap space-x-6 justify-evenly">
              <div className="w-full sm:w-auto sm:flex-1 mb-2">
                <Input
                  label="Valor Unitario"
                  className="rounded"
                  onChange={(e) => setValorUnitario(e.target.value)}
                  value={valorUnitario}
                />
                {erroCamposObrigatorios.includes('valor unitario') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
              </div>
              <div className="w-full sm:w-auto sm:flex-1 mb-4">
                <Input
                  label="Valor IPI"
                  className="rounded"
                  onChange={(e) => setValorIPI(e.target.value)}
                  value={valorIPI}
                />
                {erroCamposObrigatorios.includes('valor IPI') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
              </div>
              <div className="w-full sm:w-auto sm:flex-1 mb-4">
                <Input
                  label="Valor ICMS"
                  className="rounded"
                  onChange={(e) => setValorICMS(e.target.value)}
                  value={valorICMS}
                />
                {erroCamposObrigatorios.includes('valor ICMS') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Input
                  label="Valor ICMS ST"
                  className="rounded"
                  onChange={(e) => setValorIcmsST(e.target.value)}
                  value={valorIcmsST}
                />
                {erroCamposObrigatorios.includes('valor ICMS ST') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
              </div>
            </div>
            <table className="w-full bg-white/80 mt-4">
              <thead className="bg-blue-gray-100">
                <tr className="border-gray-400 border">
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="w-26 p-4 text lg font-semibold tracking-wide text-center">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className=" leading-none opacity-70 font-bold "
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {itensVisiveis.filter((row) => row.Quantidade > 0).map((row, index) => (
                  <tr key={index} className="border-b even:bg-blue-gray-50/50">
                    {ordemRenderizacao.map((key) => (
                      <td key={key} className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {key === "Valor" ? `R$ ${row[key]}` : key === "Quantidade" ? `${row[key]} qtde` : row[key]}
                        </Typography>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-gray-300 border bg-blue-gray-100">
                <tr>
                  <td colSpan={TABLE_HEAD.length}>
                    <div className="text-right mr-16 p-2">
                      <Typography color="blue-gray" className=" text-md font-bold text-blue-gray-800">Total: R$ <span>{valorTotalProdutos}</span></Typography>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="flex flex-wrap">
              <button
                onClick={handleTabChange2}
                className="mt-6 mr-6 px-4 py-2 rounded-lg bg-[#000000] hover:bg-[#313332] font-bold text-white transition ease-in-out duration-200 translate-10 "
              >
                Voltar
              </button>
              <button
                onClick={handleTabChange3}
                className="mt-6 px-4 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white transition ease-in-out duration-200 translate-10 "
              >
                Proximo
              </button>
            </div>
          </>
        )}
        {type === "formaPagamento" && (
          <>
            <div  className="flex flex-wrap space-x-6 items-center justify-evenly">
              <div className="w-full sm:w-auto sm:flex-1 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Valor Total da Compra
                </label>
                <Input
                    disabled
                    className="rounded"
                    value={formatarParaMoeda(valorTotalProdutos * 100)}
                    onChange={handleValorTotalChange}
                />
              </div>
              <div className="w-full sm:w-auto sm:flex-1 mt-4 mb-2">
                <Select
                  value={formaPagamento}
                  label="Forma de Pagamento"
                  onChange={(e) => setFormaPagamento(e)}
                  className="rounded"
                >
                  <Option value={"Dinheiro"}>Dinheiro</Option>
                  <Option value={"Boleto Assas"}>Boleto Assas</Option>
                  <Option value={"PIX Assas"}>PIX Assas</Option>
                  <Option value={"Crédito"}>Crédito</Option>
                  <Option value={"Débito"}>Débito</Option>
                </Select>
                {erroCamposObrigatorios.includes('forma pagamento') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
              </div>
              <div className="w-full sm:w-auto sm:flex-1 mt-6 mb-4">
                <div className="flex">
                  <Input
                    label="Valor do Pagamento"
                    className="rounded"
                    type="text"
                    onChange={handleValorPagamentoChange}
                    value={formatarParaMoeda(valorPagamento * 100)}
                  />
                  <button
                      onClick={handleAddChange2}
                      className="ml-2 h-10 px-4 text-xs bg-blue-600 text-white shadow-lg flex items-center justify-center"
                    >
                        <AiOutlinePlus size={18} />
                  </button>
                </div>
              </div>
            </div>
            <table className="w-full bg-white/80 mt-4">
              <thead className="bg-blue-gray-100">
                <tr className="border-gray-400 border">
                  {TABLE_HEAD2.map((head) => (
                    <th
                      key={head}
                      className="w-26 p-4 text lg font-semibold tracking-wide text-center">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className=" leading-none opacity-70 font-bold "
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {todosDadosPagamentos.map((row, index) => (
                  <tr key={index} className="border-b even:bg-blue-gray-50/50">
                    {ordemRenderizacao2.map((key) => (
                      <td key={key} className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {key === "valor" ? `R$ ${row[key]}` : row[key]}
                        </Typography>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-wrap space-x-6 justify-evenly">
              <div className="mt-6 px-8 w-full sm:w-auto sm:flex-1 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Valor Pago
                </label>
                <Input
                  disabled
                  className="rounded"
                  onChange={handleValorPagoChange}
                  value={formatarParaMoeda(valorPago * 100)}
                />
              </div>
              <div className="mt-6 w-full sm:w-auto sm:flex-1 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-1">
                    Troco
                  </label>
                  <Input
                    disabled
                    label="Troco"
                    className="rounded"
                    onChange={handleTrocoChange}
                    value={formatarParaMoeda(troco * 100)}
                  />
              </div>
              <div className="mt-6 px-8 w-full sm:w-auto sm:flex-1 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-1">
                    Valor Restante
                  </label>
                  <Input
                    disabled
                    label="Valor Restante"
                    className="rounded"
                    onChange={handleValorRestanteChange}
                    value={formatarParaMoeda(valorRestante * 100)}
                  />
              </div>
            </div>
            <div className="flex flex-wrap">
              <button
                onClick={handleTabChange1}
                className="mt-6 mr-6 px-4 py-2 rounded-lg bg-[#000000] hover:bg-[#313332] font-bold text-white transition ease-in-out duration-200 translate-10 "
              >
                Voltar
              </button>
              <button
                onClick={handleTabChange4}
                className="mt-6 px-4 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white transition ease-in-out duration-200 translate-10 "
              >
                Proximo
              </button>
            </div>
          </>
        )}
        {type === "Encerramento" && (
          <>
            <div className="flex flex-wrap space-x-5 justify-evenly">
              <div className="mt-2 w-full sm:w-auto sm:flex-1 mb-4">
                  <Input
                    label="Marca dos Volumes"
                    className="rounded"
                    onChange={(e) => setMarcaVolumes(e.target.value)}
                    value={marcaVolumes}
                  />
                  {erroCamposObrigatorios.includes('marca volumes') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
              </div>
              <div className="mt-2 w-full sm:w-auto sm:flex-1 mb-4">
                  <Input
                    label="Quantidade de Volumes"
                    className="rounded"
                    onChange={(e) => setQtdeVolumes(e.target.value)}
                    value={qtdeVolumes}
                  />
                  {erroCamposObrigatorios.includes('qtde volumes') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
              </div>
              <div className="mt-2 w-full sm:w-auto sm:flex-1 mb-4">
                  <Input
                    label="Espécie dos Volumes"
                    className="rounded"
                    onChange={(e) => setEspecieVolumes(e.target.value)}
                    value={especieVolumes}
                  />
                  {erroCamposObrigatorios.includes('especie volumes') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
              </div>
              <div className="mt-2 w-full sm:w-auto sm:flex-1 mb-4">
                  <Input
                    label="Peso Bruto"
                    className="rounded"
                    onChange={(e) => setPesoBruto(e.target.value)}
                    value={pesoBruto}
                  />
                  {erroCamposObrigatorios.includes('peso bruto') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
              </div>
              <div className="mt-2 w-full sm:w-auto sm:flex-1 mb-4">
                  <Input
                    label="Peso Liquido"
                    className="rounded"
                    onChange={(e) => setPesoLiquido(e.target.value)}
                    value={pesoLiquido}
                  />
                  {erroCamposObrigatorios.includes('peso liquido') && <p className="text-red-500 text-xs p-1">Campo obrigatório</p>}
              </div>
            </div>
            <div className="flex flex-wrap space-x-6 justify-evenly">
              <div className="mt-2 w-full sm:w-auto sm:flex-1 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-1">
                    Base ICMS ST
                  </label>
                  <Input
                    disabled
                    className="rounded"
                    onChange={(e) => setBaseIcmsST(e.target.value)}
                    value={baseIcmsST}
                  />
              </div>
        
              <div className="mt-2 w-full sm:w-auto sm:flex-1 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-1">
                    Base ICMS
                  </label>
                  <Input
                    disabled
                    className="rounded"
                    onChange={(e) => setBaseICMS(e.target.value)}
                    value={baseICMS}
                  />
              </div>
              <div className="mt-2 w-full sm:w-auto sm:flex-1 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-1">
                    Base IPI
                  </label>
                  <Input
                    disabled
                    className="rounded"
                    onChange={(e) => setBaseIPI(e.target.value)}
                    value={baseIPI}
                  />
              </div>
            </div>
            <div className="flex flex-wrap space-x-6 justify-evenly">
              <div className="mt-2 w-full sm:w-auto sm:flex-1 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-1">
                    Valor Total ICMS ST
                  </label>
                  <Input
                    disabled
                    className="rounded"
                    onChange={(e) => setValorTotalIcmsST(e.target.value)}
                    value={valorTotalIcmsST}
                  />
              </div>
              <div className="mt-2 w-full sm:w-auto sm:flex-1 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-1">
                    Valor Total ICMS
                  </label>
                  <Input
                    disabled
                    className="rounded"
                    onChange={(e) => setValorTotalICMS(e.target.value)}
                    value={valorTotalICMS}
                  />
              </div>
              <div className="mt-2 w-full sm:w-auto sm:flex-1 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-1">
                    Valor Total IPI
                  </label>
                  <Input
                    disabled
                    className="rounded"
                    onChange={(e) => setValorTotalIPI(e.target.value)}
                    value={valorTotalIPI}
                  />
              </div>
            </div>
            <div className="flex flex-wrap space-x-6 justify-evenly">
              <div className="mt-2 w-full sm:w-auto sm:flex-1 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-1">
                    Valor dos Produtos
                  </label>
                  <Input
                    disabled
                    className="rounded"
                    onChange={(e) => setValorTotalProdutos(e.target.value)}
                    value={valorTotalProdutos}
                  />
              </div>
              <div className="mt-2 w-full sm:w-auto sm:flex-1 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-1">
                    Valor Total da Nota
                  </label>
                  <Input
                    disabled
                    className="rounded"
                    onChange={(e) => setValorTotalNota(e.target.value)}
                    value={valorTotalNota}
                  />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="mt-2 px-10 w-full sm:w-auto sm:flex-1 mb-4">
                <Textarea
                  onChange={(e) => setObservacao(e.target.value)}
                  value={observacao}
                  label="Observação :"
                  className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
                />
              </div>
            </div>
        
            <div className="flex flex-wrap">
              <div>
                <button
                  onClick={handleTabChange3}
                  className="mr-6 px-4 py-2 rounded-lg bg-[#000000] hover:bg-[#313332] font-bold text-white transition ease-in-out duration-200 translate-10 "
                >
                  Voltar
                </button>
                <button
                  onClick={emitirNota}
                  className="px-4 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white transition ease-in-out duration-200 translate-10 "
                >
                  Proximo
                </button>
              </div>
            </div>
          </>
        )}
      </Card>
    </>
  );
}

export default Emitir_NotaFiscal;