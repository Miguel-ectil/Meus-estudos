"use client"

import React, { useEffect, useState } from "react";
import { Tooltip, Button, Card, Checkbox, Input, Select, Typography, Radio, Option } from "@material-tailwind/react";
import { BsSearch } from "react-icons/bs";
import Cookies from "js-cookie";
import { useEstampagemService } from '../../../src/services/estampagem/estampagemService';
import { useNotaFiscalService } from '../../../src/services/notaFiscal/notaFiscal';
import { emissaoNf } from "../../../src/interfaces/nota-fiscal/nota-fiscal";
import ErrorModal from '../../../src/components/message/ErrorModal';
import SuccessModal  from '../../../src/components/message/SuccessModal';


const Emitir_NotaFiscal: React.FC = () => {
  const TABLE_HEAD = ["Placa", "TipoPlaca", "Status", "Categoria", "Especie", "Tipo", "SerialPlaca"];
  const numAe = Cookies.get("ae")
  const [TABLE_ROWS, setTableRows] = useState<any[]>([]);
  const [autorizacaoEstampagem, setAutorizacaoEstampagem] = useState<any>(numAe)
  const [Proprietario, setProprietario] = useState(true);
  const [Solicitante, setSolicitante] = useState(false);
  const [Terceiro, setParaterceiro] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  // Input de AutoCompletar
  const [proprietarioInput, setProprietarioInput] = useState<any>()
  const [solicitanteInput, setSolicitanteInput] = useState<any>()

  // formulario do PROPRIETARIO
  const [nomeCliente, setNomeCliente] = useState<any>('');
	const [cfop, setCfop] = useState<any>('');
	const [tipoNota, setTipoNota] = useState<any>("0");
	const [cpfCnpj, setCpfCnpj] = useState<any>('');
	const [email, setEmail] = useState<any>('');
	const [valorNota, setValorNota] = useState<any>();
	const [observacao, setObservacao] = useState<any>('');
  const [complemento, setComplemento] = useState<any>('');
  const [ddd, setDDD] = useState<any>('');
	const [numeroTelefone, setNumeroTelefone] = useState<any>('');
  const [cidade, setCidade] = useState<any>('');
	const [bairro, setBairro] = useState<any>('');
	const [numero, setNumero] = useState<any>('');
	const [estado, setEstado] = useState<any>('');
	const [cep, setCep] = useState<any>('');
  const [logradouro, setLogradouro] = useState<any>('')
  // const [numeroAe, setNumeroAe] = useState(false)
  
  // formulario do SOLICITANTE & DESPACHANTE
  const [nomeSolicitante,setNomeSolicitante] = useState<any>('');
	const [cfopSolicitante, setCfopSolicitante] = useState<any>('');
	const [cpfCnpjSolicitante, setCpfCnpjSolicitante] = useState<any>('');
	const [emailSolicitante, setEmailSolicitante] = useState<any>('');
	const [valorNotaSolicitante, setValorNotaSolicitante] = useState<any>('');
	const [observacaoSolicitante, setObservacaoSolicitante] = useState<any>('');
  const [complementoSolicitante, setComplementoSolicitante] = useState<any>('');
  const [dddSolicitante, setDDDSolicitante] = useState<any>('');
	const [numeroTelefoneSolicitante, setNumeroTelefoneSolicitante] = useState<any>('');
  const [cidadeSolicitante, setCidadeSolicitante] = useState<any>('');
	const [bairroSolicitante, setBairroSolicitante] = useState<any>('');
	const [numeroSolicitante, setNumeroSolicitante] = useState<any>('');
	const [estadoSolicitante, setEstadoSolicitante] = useState<any>('');
	const [cepSolicitante, setCepSolicitante] = useState<any>('');
  const [logradouroSolicitante, setLogradouroSolicitante] = useState<any>('')

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCheckboxChange = () => {
    setIsCheckboxChecked((prevState) => !prevState);
  }

  type ErrorInput = {
    cfop?: string;
    valorNota?: string;
    cpfCnpj?: string;
    nome?: string; 
    email?: string;
    ddd?: string;
    numeroTelefone?: string;
    cep?: string;
    estado?: string;
    cidade?: string;
    logradouro?: string;
    numero?: string;
    bairro?: string;
  };
  const [errorInput, setErrorInput] = useState<ErrorInput>({});

  const validateFields = () => {  
    const newErrorInput: ErrorInput = {}; // Crie um novo objeto de erro vazio
    // Validação dos campos
    if (!nomeCliente && !nomeSolicitante) {
      newErrorInput.nome = "Campo obrigatorio!";
    }
    if (!cfopSolicitante && !cfop) {
      newErrorInput.cfop = "Campo obrigatorio!";
    }
    if (!valorNotaSolicitante && !valorNota) {
      newErrorInput.valorNota = "Campo obrigatorio!";
    }
    if (!cpfCnpjSolicitante && !cpfCnpj) {
      newErrorInput.cpfCnpj = "Campo obrigatorio!";
    }
    if (!emailSolicitante && !email) {
      newErrorInput.email = "Campo obrigatorio!";
    }
    if (!dddSolicitante && !ddd) {
      newErrorInput.ddd = "Campo obrigatorio!";
    }
    if (!numeroTelefoneSolicitante && !numeroTelefone) {
      newErrorInput.numeroTelefone = "Campo obrigatorio!";
    }
    if (!cepSolicitante && !cep) {
      newErrorInput.cep = "Campo obrigatorio!";
    }
    if (!estadoSolicitante && !estado) {
      newErrorInput.estado = "Campo obrigatorio!";
    }
    if (!cidadeSolicitante && !cidade) {
      newErrorInput.cidade = "Campo obrigatorio!";
    }
    if (!logradouroSolicitante && !logradouro) {
      newErrorInput.logradouro = "Campo obrigatorio!";
    }
    if (!numeroSolicitante && !numero) {
      newErrorInput.numero = "Campo obrigatorio!";
    }
    if (!bairroSolicitante && !bairro) {
      newErrorInput.bairro = "Campo obrigatorio!";
    }
    setErrorInput(newErrorInput);
    // Retorna true se não houver erros, caso contrário, false
    const isValid = Object.keys(newErrorInput).length === 0;
    return isValid;
  };

  const service = useEstampagemService()
	const serviceFiscal = useNotaFiscalService()

	const ConsultarAutorizacaoEstampagem = () => {
    service.getAeByNumeroConcluida(numAe)
    .then((res:any) => {
      Cookies.remove("ae");
      setTableRows(res[0].estampagens)
      setProprietarioInput(res[0].nomeCliente);
      setSolicitanteInput(res[0].nomeSolicitante);
      setCfop(res[0].cfop)
    })
    .catch((err:any) => {
      setError(err.response.data.message)
    })
	}

  useEffect(() => {
    ConsultarAutorizacaoEstampagem()
  },[])

  // Para o botão de limpar inputs quando for para emitir nota para "Terceiro"
  const limparInputs = () => {
    setNomeCliente('')
    setCfop('')
		setTipoNota('')
		setCpfCnpj('')
		setEmail('')
		setValorNota('')
    setObservacao('')
    setComplemento('')
    setDDD('')
    setNumeroTelefone('')
    setCidade('')
    setBairro('')
    setNumero('')
    setEstado('')
    setCep('')
    setLogradouro('')
    // limpar campos SOLICITANTE & DESPACHANTE
    setNomeSolicitante('')
    setCfopSolicitante('')
		setCpfCnpjSolicitante('')
		setEmailSolicitante('')
		setValorNotaSolicitante('')
    setObservacaoSolicitante('')
    setComplementoSolicitante('')
    setDDDSolicitante('')
    setNumeroTelefoneSolicitante('')
    setCidadeSolicitante('')
    setBairroSolicitante('')
    setNumeroSolicitante('')
    setEstadoSolicitante('')
    setCepSolicitante('')
    setLogradouroSolicitante('')
  }

  const preencherCampos = async() => {
    if(Proprietario === true) {
      service.retornaCliente(nomeCliente)
      .then((res:any) => {
        // adicionando os dados aos value dos inputs 
        // e evitando armazenar "null"
        setNomeCliente(res[0].nome)
        setEmail(res[0].email !== null ? res[0].email : '')
        setCpfCnpj(res[0].cpf !== null ? res[0].cpf  : '')
        setNumero(res[0].numero !== null ? res[0].numero : '')
        setBairro(res[0].bairro !== null ? res[0].bairro : '')
        setCidade(res[0].cidade !== null ? res[0].cidade : '')
        setEstado(res[0].estado !== null ? res[0].estado : '') 
        setLogradouro(res[0].logradouro !== null ? res[0].logradouro : '') 
        setCep(res[0].cep !== null ? res[0].cep : '')
        setNumeroTelefone(res[0].telefone !== null ? res[0].telefone : '')
      })
    } else if (Solicitante === true) {
      service.retornaSolicitante(nomeCliente)
      .then((res:any) => {
        // adicionando os dados aos value dos inputs 
        // e evitando armazenar "null"
        setNomeSolicitante(res[0].nome)
        setEmailSolicitante(res[0].email !== null ? res[0].email : '')
        setCpfCnpjSolicitante(res[0].cpf !== null ? res[0].cpf  : '')
        setNumeroSolicitante(res[0].numero !== null ? res[0].numero : '')
        setBairroSolicitante(res[0].bairro !== null ? res[0].bairro : '')
        setCidadeSolicitante(res[0].cidade !== null ? res[0].cidade : '')
        setEstadoSolicitante(res[0].estado !== null ? res[0].estado : '') 
        setLogradouroSolicitante(res[0].logradouro !== null ? res[0].logradouro : '') 
        setCepSolicitante(res[0].cep !== null ? res[0].cep : '')
        setNumeroTelefoneSolicitante(res[0].telefone !== null ? res[0].telefone : '')
      })
    }
	}

  const EmitirNFE = () => {
    const isValid = validateFields();
    if (isValid === true) {
      if (Solicitante === false) {
        const emissaoNf: emissaoNf = {
          cpfCnpj, razaoSocial:nomeCliente, 
          email, 
          telefone: {
            ddd, numero:numeroTelefone,
          },
          endereco: {
            cidade, bairro, numero, estado, logradouro, cep, complemento,
          },
          itens: {
            cfop
          },
          pagamentos: {
            valorNota:valorNota,
          },
          tipoNota,
          observacao,
        }
        serviceFiscal.emitirNf(emissaoNf)
        .then((res:any) => {
          setSuccess(res.message)
          limparInputs()
        }) 
        .catch((err:any) => {
          setError(err.response.data.message)
        })
      } else {
        const emissaoNf: emissaoNf = {
          cpfCnpj:cpfCnpjSolicitante, razaoSocial:nomeSolicitante, 
          email:emailSolicitante, 
          telefone: {
            ddd:dddSolicitante, numero:numeroTelefoneSolicitante,
          },
          endereco: {
            cidade:cidadeSolicitante, bairro:bairroSolicitante, numero:numeroSolicitante, estado:estadoSolicitante, 
            logradouro:logradouroSolicitante, cep:cepSolicitante, complemento:complementoSolicitante,
          },
          itens: {
            cfop:cfopSolicitante
          },
          pagamentos: {
            valorNota:valorNotaSolicitante,
          },
          tipoNota,
          observacao:observacaoSolicitante,
        }
        serviceFiscal.emitirNf(emissaoNf)
        .then((res:any) => {
          setSuccess(res.message)
          limparInputs()
        }) 
        .catch((err:any) => {
          setError(err.response.data.message)
        })
      }
    }
  }

  const solicitante = () => {
    setParaterceiro(false);
    setSolicitante(true);
    setProprietario(false)
  };

  const proprietario = () => {
    setParaterceiro(false);
    setSolicitante(false)
    setProprietario(true)
  };

  const paraTerceiro = () => {
    setProprietario(false)
    setSolicitante(false);
    setParaterceiro(true);
  };

  // Handles para os onChange dos input, pois cada input tem duas variaveis
  // para armazenar os dados
  const handleChangeCfop = (e:any) => {
    const cfop = e.target.value;
    if (Solicitante === true) {
      setCfopSolicitante(cfop)
    } else {
      setCfop(cfop)
    }     
  }
  const handleChangeValorNota = (e:any) => {
    const valorNota = e.target.value;
    if (Solicitante === true) {
      setValorNotaSolicitante(valorNota)
    } else {
      setValorNota(valorNota)
    }     
  }
  const handleChangeCpfCnpj = (e:any) => {
    const cpfCnpj = e.target.value;
    if (Solicitante === true) {
      setCpfCnpjSolicitante(cpfCnpj)
    } else {
      setCpfCnpj(cpfCnpj)
    }     
  }
  const handleChangeNome = (e:any) => {
    const nome = e.target.value;
    if (Solicitante === true) {
      setNomeCliente(nome)
    } else {
      setSolicitante(nome)
    }     
  }
  const handleChangeEmail = (e:any) => {
    const email = e.target.value;
    if (Solicitante === true) {
        setEmailSolicitante(email)
    } else {
        setEmail(email)
    }     
  } 
  const handleChangeDDD = (e:any) => {
    const ddd = e.target.value;
    if (Solicitante === true) {
      setDDDSolicitante(ddd)
    } else {
      setDDD(ddd)
    }   
  }
  const handleChangeTelefone = (e:any) => {
    const telefone = e.target.value;
    if (Solicitante === true) {
        setNumeroTelefoneSolicitante(telefone)
    } else {
        setNumeroTelefone(telefone)
    }   
  }
  const handleChangeCep = (e:any) => {
    const cep = e.target.value;
    if (Solicitante === true) {
        setCepSolicitante(cep)
    } else {
        setCep(cep)
    }   
  }
  const handleChangeEstado = (e:any) => {
    const estado = e.target.value;
    if (Solicitante === true) {
        setEstadoSolicitante(estado)
    } else {
        setEstado(estado)
    }   
  }
  const handleChangeCidade = (e:any) => {
    const cidade = e.target.value;
    if (Solicitante === true) {
        setCidadeSolicitante(cidade)
    } else {
        setCidade(cidade)
    }   
  }
  const handleChangeLogradouro = (e:any) => {
    const logradouro = e.target.value;
    if (Solicitante === true) {
        setLogradouroSolicitante(logradouro)
    } else {
        setLogradouro(logradouro)
    }   
  }
  const handleChangeNumero = (e:any) => {
    const numero = e.target.value;
    if (Solicitante === true) {
        setNumeroSolicitante(numero)
    } else {
        setNumero(numero)
    }   
  }
  const handleChangeComplemento = (e:any) => {
    const complemento = e.target.value;
    if (Solicitante === true) {
        setComplementoSolicitante(complemento)
    } else {
        setComplemento(complemento)
    }   
  }
  const handleChangeBairro = (e:any) => {
    const bairro = e.target.value;
    if (Solicitante === true) {
        setBairroSolicitante(bairro)
    } else {
        setBairro(bairro)
    }   
  }
  const handleChangeObservacao = (e:any) => {
    const observacao = e.target.value;
    if (Solicitante === true) {
        setObservacaoSolicitante(observacao)
    } else {
        setObservacao(observacao)
    }   
  }

  return (
    <>
      <ErrorModal  isOpen={!!error} onClose={() => setError('')} error={error} />
      <SuccessModal  isOpen={!!success} onClose={() => setSuccess('')} success={success} />
      <div>
        <div className="rounded-lg bg-white/40 ring-1 ring-white/60 shadow-xl mb-6">
          <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">
            Emissão de Nota Fiscal
          </h2>
        </div>
        <Card className="bg-white/40 border p-4 rounded-xl shadow-xl overflow-hidden">
          <h1 className="font-bold">Número de Autorização de estampagem</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="flex mt-2 w-80">
                <Input
                  label="EX: 2814451022070430"
                  value={autorizacaoEstampagem}
                  onChange={(e) => setAutorizacaoEstampagem(e.target.value)}
                  className="py-2 shadow-sm sm:text-sm sm:leading-6"
                />
                <div className='relative'>
                  <button
                    onClick={() => ConsultarAutorizacaoEstampagem()}
                    className="absolute right-0 h-10 px-4 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg"
                  >
                    <BsSearch size={16} />
                  </button>
                </div>
              </div>
          </div>
          <h1 className="font-bold mt-4">Dados Estampagem</h1>
          <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead className="bg-gray-100 border-b-2 border-gray-300">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="p-4 text-sm font-semibold tracking-wide text-left">
                    <Typography variant="small" color="blue-gray" className="leading-none opacity-70 font-bold">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {TABLE_ROWS.map((item, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50 items-center justify-center">
                  <td className="p-4 text-sm text-gray-700">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.placa}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.tipoPlaca}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.status}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.categoriaVeiculo}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.especieVeiculo}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.tipoVeiculo}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.serialBlank}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </Card>
        <div className="mt-1">
          <Card className="bg-white/40 border p-2 rounded-xl shadow-xl mt-4 overflow-hidden">
            <div className="p-2">
              <h1 className="font-bold">Autocompletar</h1>
                <h2 className="mt-4 font-bold text-center">Escolha como deseja preencher os dados da nota fiscal.</h2>
                <div className="justify-center flex">
                  <div className="mr-12">
                    <Radio
                      name="vertical-list"
                      id="vertical-list-react"
                      label="Proprietário"
                      onClick={proprietario}
                      defaultChecked
                      className="hover:before:opacity-0"
                    />
                  </div>
                  <div className="mx-6">
                    <Radio
                      name="vertical-list"
                      id="vertical-list-vue"
                      onClick={solicitante}
                      label="Solicitantes/Despachantes"
                      className="hover:before:opacity-0"
                    />
                  </div>
                  <div className="ml-12">
                    <Radio
                      name="vertical-list"
                      id="vertical-list-svelte"
                      onClick={paraTerceiro}
                      label="Terceiro"
                      className="hover:before:opacity-0"
                    />
                  </div>
                </div>
                {Proprietario && (
                  <div className="mt-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                    <Input 
                      value={proprietarioInput} 
                      onChange={(e) => setProprietarioInput(e)}
                      label="Proprietario" 
                      className="rounded flex mb-8" 
                    />
                    <Button onClick={preencherCampos} color="blue" className="w-28 justify-center flex">Preencher</Button>
                  </div>
                )}
                {Solicitante && (
                  <div  className="mt-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                    <Input 
                      value={solicitanteInput} 
                      onChange={(e) => setSolicitanteInput(e)}
                      label="Solicitante" 
                      className="rounded flex mb-8" 
                    />
                    <Button onClick={preencherCampos} className="w-28 justify-center flex">Preencher</Button>
                  </div>
                )}
                {Terceiro && (
                  <Button onClick={limparInputs} className="mt-2 ml-4">Limpar Campos</Button>
                )}
            </div> 
          </Card>
          <Card className="bg-white/40 border px-6 py-4 rounded-xl shadow-xl mt-4 overflow-hidden space-y-2">
            <h1 className="font-bold text-center mb-2">Dados da Nota Fiscal</h1>
            <div className="flex flex-wrap">
              <Tooltip content="Alterar CFOP">
                <Checkbox
                  checked={isCheckboxChecked}
                  onChange={handleCheckboxChange}
                />
              </Tooltip>
              <div className={`w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 ${isCheckboxChecked ? "" : "pointer-events-none"}`}>
                <Input 
                  label="CFOP" 
                  value={Solicitante === true ? cfopSolicitante : cfop} 
                  className="rounded"
                  onChange={handleChangeCfop} 
                  disabled={!isCheckboxChecked} 
                />
                {errorInput.cfop && <span className="text-red-700 p-1 text-sm">{errorInput.cfop}</span>}
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Select 
                  label="Tipo de Notas" 
                  value={tipoNota}
                  onChange={(e) => {
                    setTipoNota(e)
                  }}  
                >
                  <Option value={"0"} className="hidden md:block"> Nota de Saída</Option>
                  <Option value={"1"} className="hidden md:block"> Nota de Entrada</Option>
                </Select>
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Input 
                  label="Valor da Nota R$: *" 
                  className="rounded" 
                  value={Solicitante === true ? valorNotaSolicitante : valorNota} 
                  onChange={handleChangeValorNota}  
                />
                {errorInput.valorNota && <span className="text-red-700 p-1 text-sm">{errorInput.valorNota}</span>}
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4">
                <Input 
                  onChange={handleChangeCpfCnpj}
                  value={Solicitante === true ? cpfCnpjSolicitante : cpfCnpj} 
                  label="CPF/CNPJ *" 
                  className="rounded" 
                />
                {errorInput.cpfCnpj && <span className="text-red-700 p-1 text-sm">{errorInput.cpfCnpj}</span>}
              </div>
            </div>
            <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
              <Input 
                label="Nome ou Razão Social *" 
                value={Solicitante === true ? nomeSolicitante : nomeCliente} 
                onChange={handleChangeNome}
              />
              {errorInput.nome && <span className="text-red-700 p-1 text-sm">{errorInput.nome}</span>}
            </div>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Input 
                  label="E-Mail" 
                  className="rounded"
                  value={Solicitante === true ? emailSolicitante : email} 
                  onChange={handleChangeEmail} 
                />
                {errorInput.email && <span className="text-red-700 p-1 text-sm">{errorInput.email}</span>}
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Input 
                  label="DDD" 
                  className="rounded"
                  value={Solicitante === true ? dddSolicitante : ddd} 
                  onChange={handleChangeDDD} 
                />
                {errorInput.ddd && <span className="text-red-700 p-1 text-sm">{errorInput.ddd}</span>}
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4">
                <Input 
                  label="Telefone" 
                  className="rounded"
                  value={Solicitante === true ? numeroTelefoneSolicitante : numeroTelefone} 
                  onChange={handleChangeTelefone} 
                />
                {errorInput.numeroTelefone && <span className="text-red-700 p-1 text-sm">{errorInput.numeroTelefone}</span>}
              </div>
            </div>
            <div className="flex w-full mr-2">
              <div className="flex flex-col mb-4">
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 flex items-center">
                  <Input
                    label="CEP *"
                    className="rounded-r-none"
                    value={Solicitante === true ? cepSolicitante : cep}
                    onChange={handleChangeCep}
                  />
                  <button className="bg-blue-600 h-10 rounded-r-lg px-4 py-3 text-xs text-white shadow-lg shadow-blue-300">
                    <BsSearch size={16} />
                  </button>
                </div>
                {errorInput.cep && <span className="text-red-700 p-1 text-sm">{errorInput.cep}</span>}
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Input 
                  label="UF *" 
                  className="rounded"
                  value={Solicitante === true ? estadoSolicitante : estado} 
                  onChange={handleChangeEstado} 
                />
                {errorInput.estado && <span className="text-red-700 p-1 text-sm">{errorInput.estado}</span>}
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4">
                <Input 
                  label="Município" 
                  className="rounded"
                  value={Solicitante === true ? cidadeSolicitante : cidade} 
                  onChange={handleChangeCidade} 
                />
                {errorInput.cidade && <span className="text-red-700 p-1 text-sm">{errorInput.cidade}</span>}
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Input 
                  label="Endereço" 
                  className="rounded"
                  value={Solicitante === true ? logradouroSolicitante : logradouro} 
                  onChange={handleChangeLogradouro} 
                />
                {errorInput.logradouro && <span className="text-red-700 p-1 text-sm">{errorInput.logradouro}</span>}
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Input 
                  label="N º" 
                  className="rounded"
                  value={Solicitante === true ? numeroSolicitante : numero} 
                  onChange={handleChangeNumero} 
                />
                {errorInput.numero && <span className="text-red-700 p-1 text-sm">{errorInput.numero}</span>}
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Input 
                  label="Complemento" 
                  className="rounded"
                  value={Solicitante === true ? complementoSolicitante : complemento} 
                  onChange={handleChangeComplemento} 
                />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Input 
                  label="Bairro" 
                  className="rounded"
                  value={Solicitante === true ? bairroSolicitante : bairro} 
                  onChange={handleChangeBairro} 
                />
                {errorInput.bairro && <span className="text-red-700 p-1 text-sm">{errorInput.bairro}</span>}
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Input 
                  label="Observação :" 
                  className="rounded"
                  value={Solicitante === true ? observacaoSolicitante : observacao} 
                  onChange={handleChangeObservacao} 
                />
              </div>
            </div>
            <div>
              <Button onClick={EmitirNFE} color="blue" className="">Emitir Nota Fiscal</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Emitir_NotaFiscal;