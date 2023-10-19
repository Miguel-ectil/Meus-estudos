"use client"
"use client"
import { Select, Option, Button, Typography, Input , Checkbox} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { HiOutlinePencilAlt, HiX } from "react-icons/hi"
import { BsSearch } from 'react-icons/bs' 
import { useCadastros } from '../../src/services/cadastros/cadastros-service'
import { useEnderecoService } from '../../src/services/endereco/enderecoService'
import ErrorModal from '../../src/components/message/ErrorModal';
import SuccessModal  from '../../src/components/message/SuccessModal';

// recebendo informações do cadastrar AE nos parametros
export default function Solicitante_Proprietario({ buttonEdit,  nomeCliente} :any) {
  const service = useCadastros()
  const serviceEndereco = useEnderecoService()

  // get solicitante and clientes
  const [solicitantes, setSolicitantes] = useState<any[]>([])
  const [selectedSolicitante, setSelectedSolicitante] = useState<string>('')
  const [proprietarios, setProprietarios] = useState<any[]>([])
  const [selectProprietario, setSelectProprietario] = useState<any>('')
  // register solicitante oor cliente 
  const [register, setRegister] = useState('solicitante')
  const [selectKey, setSelectKey] = useState(0); // Adicione um estado-chave
  // messeges
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [openModal, setOpenModal] = useState(false)
  const [habilitarInput, setHabilitarInput] = useState(true); 
	const [nome, setNome] = useState<string>("")
	const [nomeFantasia, setNomeFantasia] = useState<string>("")
	const [tipoPessoa, setTipoPessoa] = useState('')
  const [visibleInput, setVisibleInput] = useState(false); 

	const [cpfCnpj, setCpfCnpj] = useState<string>("")
//   const [cpf, setCpf] = useState<string>("")
  // const [cnpj, setCnpj] = useState<string>("")
	const [rgIe, setRgie] = useState<string>("")
	const [cep, setCep] = useState<string>("")
	const [estado, setEstado] = useState<string>("")
  const [complemento, setComplemento] = useState<string>("")
	const [cidade, setCidade] = useState<string>("")
	const [logradouro, setLogradouro] = useState<string>("")
	const [numero, setNumero] = useState<string>("")
	const [bairro, setBairro] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [telefone1, setTelefone1] = useState<string>("")
	const [telefone2, setTelefone2] = useState<string>("")

  type ErrorInputNome = {
    nome?: string;
  };
  type ErrorSelectSolicitante = {
    selectedSolicitante?: string;
  };
  type ErrorSelectProprietario = {
    selectedProprietario?: string;
  };
  const [errorInput, setErrorInput] = useState<ErrorInputNome>({});
  const [errorSelectSolicitante, setErrorSelectSolicitante] = useState<ErrorSelectSolicitante>({});
  const [errorSelectProprietario, setErrorSelectProprietario] = useState<ErrorSelectProprietario>({});

  const validateSolicitante = () => {  
    const newErrorInput: ErrorSelectSolicitante = {}; // Crie um novo objeto de erro vazio
    if (!selectedSolicitante) {
      newErrorInput.selectedSolicitante = "Selecione um solicitante para editar!"
    }
    setErrorSelectSolicitante(newErrorInput);
    const isValid = Object.keys(newErrorInput).length === 0;
    return isValid;
  }

  const validateProprietario = () => {  
    const newErrorInput: ErrorSelectProprietario = {};
    if (!selectProprietario) {
      newErrorInput.selectedProprietario = "Selecione um proprietario para editar!"
    }
    // Crie um novo objeto de erro vazio
    setErrorSelectProprietario(newErrorInput);
    const isValid = Object.keys(newErrorInput).length === 0;
    return isValid;
  }

  const validateInput = () => {
    const newErrorInput: ErrorInputNome = {};
    if (!nome) {
      newErrorInput.nome = "Campo obrigatorio!"
    }
    setErrorInput(newErrorInput);
    const isValid = Object.keys(newErrorInput).length === 0;
    return isValid;
  }

  useEffect(() => {
    getSolicitantesClientes()
  }, []);

  const getSolicitantesClientes = () => {
    service.getSolicitante()
    .then((response) => {
      setSolicitantes(response); 
    })
    .catch((error:any) => {
      setError(error.response.data.message);
    });

    // get clientes
    service.getProprietario()
    .then((response) => {
      setProprietarios(response); 
    })
    .catch((error) => {
      setError(error.response.data.message);
    })
  }

  const CadastSolicitante = () => {
		const solicitante = {
			nome: nome,
			nome_fantasia: nomeFantasia,
			tipo_pessoa: tipoPessoa,
			cpf_cnpj: cpfCnpj.replace(/[^0-9]/g, ""),
			rg_ie: rgIe,
			estado: estado,
			complemento: complemento,
			cidade: cidade,
			logradouro: logradouro,
			// tipoPessoa: tipoPessoa,
			numero: numero,
			bairro: bairro,
			email: email,
			telefone1: telefone1.replace(/[^0-9]/g, ""),
			telefone2: telefone2.replace(/[^0-9]/g, ""),
			cep: cep.replace(/[^0-9]/g, "")
		}
    const isValid = validateInput();
    if (isValid === true) {
      service.postRegistroSolicitante(solicitante)
      .then((resp) => {
        getSolicitantesClientes()
        setOpenModal(false);
        setSuccess(resp[1].message)
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
    }
  }

  const CadastProprietario = () => {
		const proprietario = {
			nome: nome,
			nome_fantasia: nomeFantasia,
			tipo_pessoa: tipoPessoa,
			cpf_cnpj: cpfCnpj.replace(/[^0-9]/g, ""),
			rg_ie: rgIe,
			estado: estado,
			complemento: complemento,
			cidade: cidade,
			logradouro: logradouro,
			// tipoPessoa: tipoPessoa,
			numero: numero,
			bairro: bairro,
			email: email,
			telefone1: telefone1.replace(/[^0-9]/g, ""),
			telefone2: telefone2.replace(/[^0-9]/g, ""),
			cep: cep.replace(/[^0-9]/g, "")
		}
    const isValid = validateInput();
    if (isValid === true) {      
      service.postRegistroProprietario(proprietario)
      .then((resp) => {
        getSolicitantesClientes()
        setOpenModal(false);
        setSuccess(resp[1].message)
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
    }
  }

  const editarSolicitante = () => {
    const isValid = validateSolicitante();
    if (isValid === true) {
      setRegister('editar solicitante')
      setOpenModal(true);
      const nomeSolicitante = { nomeSolicitante: selectedSolicitante }
      service.postEditSolicitante(nomeSolicitante)
      .then((resp) => {
        setNome(resp.nome)
        setNomeFantasia(resp.nomeFantasia)
        setBairro(resp.bairro)
        setCep(resp.cep)
        setCidade(resp.cidade)
        setCpfCnpj(resp.cpfCnpj)
        setEmail(resp.email)
        setEstado(resp.estado)
        setLogradouro(resp.logradouro)
        setRgie(resp.rgIe)
        setTipoPessoa(resp.tipoPessoa)
        setTelefone1(resp.telefone1)
        setTelefone2(resp.telefone2)
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
    }
  }

  const editarProprietario = () => {
    const isValid = validateProprietario();
    if (isValid === true) {
      setRegister('editar proprietario')
      setOpenModal(true);
      const proprietario = {
        nome: selectProprietario,
      }
      if(selectProprietario) {
        service.postEditProprietario(proprietario)
        .then((resp) => {
          setNome(resp.nome)
          setNomeFantasia(resp.nomeFantasia)
          setBairro(resp.bairro)
          setCep(resp.cep)
          setCidade(resp.cidade)
          setCpfCnpj(resp.cpfCnpj)
          setEmail(resp.email)
          setEstado(resp.estado)
          setLogradouro(resp.logradouro)
          setRgie(resp.rgIe)
          setTipoPessoa(resp.tipoPessoa)
          setTelefone1(resp.telefone1)
          setTelefone2(resp.telefone2)
        })
        .catch((error) => {
          setError(error.response.data.message);
        });
      }
    }
  }
  
  const dadosEndereco = () => {
    const dados = "Todos os dados do cliente"
    if (dados === null || "") {
      setHabilitarInput(false)
    }
    else {
      setHabilitarInput(!habilitarInput)
    }
  }

	const salvaEdicaoSolicitante = () => {
    const isValid = validateInput();
    if (isValid === true) {
      const solicitante = {
        nome: nome,
        nomeFantasia: nomeFantasia,
        tipoPessoa: tipoPessoa,
        cpfCnpj: cpfCnpj.replace(/[^0-9]/g, ""),
        rgIe: rgIe,
        estado: estado,
        cidade: cidade,
        logradouro: logradouro,
        numero: numero,
        bairro: bairro,
        email: email,
        telefone1: telefone1.replace(/[^0-9]/g, ""),
        telefone2: telefone2.replace(/[^0-9]/g, ""),
        cep: cep.replace(/[^0-9]/g, "")
      }

      service.atualizaSolicitante(solicitante)
      .then((resposta) => {
        setOpenModal(false)
        setSuccess(resposta[1].message)
      })
      .catch((error) => {
        setError(error.response.data.message);
      })
    }
	}

	const salvaEdicaoCliente = () => {
    const isValid = validateInput();
    if (isValid === true) {
      const proprietario = {
        nome: nome,
        nomeFantasia: nomeFantasia,
        tipoPessoa: tipoPessoa,
        cpfCnpj: cpfCnpj.replace(/[^0-9]/g, ""),
        rgIe: rgIe,
        estado: estado,
        cidade: cidade,
        logradouro: logradouro,
        numero: numero,
        bairro: bairro,
        email: email,
        telefone1: telefone1.replace(/[^0-9]/g, ""),
        telefone2: telefone2.replace(/[^0-9]/g, ""),
        cep: cep.replace(/[^0-9]/g, "")
      }

      service.atualizaCliente(proprietario)
      .then((resposta) => {
        setOpenModal(false)
        setSuccess(resposta[1].message)
      })
      .catch((error) => {
        setError(error.response.data.message);
      })
    }
	}

  const [title, setTitle] = useState("")
  const botaoCadastrarSolicitante = () => {
    setRegister('solicitante')
    setNome('')
    setNomeFantasia('')
    setRgie('')
    setCep('')
    setEstado('')
    setComplemento('')
    setCidade('')
    setLogradouro('')
    setCpfCnpj('')
    setNumero('')
    setBairro('')
    setEmail('')
    setTelefone1('')
    setTelefone2('')
    setOpenModal(true);
    setTitle("Cadastrar Solicitante");
  }

  // parte proprietario
  const botaoCadastrarProprietario = () => {
      setRegister('proprietario')
      setNome('')
      setNomeFantasia('')
      setRgie('')
      setCep('')
      setEstado('')
      setComplemento('')
      setCidade('')
      setLogradouro('')
      setCpfCnpj('')
      setNumero('')
      setBairro('')
      setEmail('')
      setTelefone1('')
      setTelefone2('')
      setOpenModal(true);
      setTitle("Cadastrar Proprietario");
  }

  // Requisição que traz os dados do Cep
	const consultarCep = () => {
		// const ceep = cep.replace(/[^0-9]/g, "")
		serviceEndereco.getEndereco(cep)
			.then((resp: any) => {
				if (resp) {
					setEstado(resp.uf)
          setCidade(resp.localidade)
					setBairro(resp.bairro)
					setLogradouro(resp.logradouro)
				}
			})
			.catch((error) => {
				console.log(error, "Cep não encontardo")
			})
	}
  return (
    <>
      <div className='rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-3'>
        <h2 className='p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased'>Solicitante & Proprietario</h2>
      </div>
      <div className="bg-white/40 border px-4 py-8 rounded-xl shadow-xl">
      <ErrorModal  isOpen={!!error} onClose={() => setError('')} error={error} />
      <SuccessModal  isOpen={!!success} onClose={() => setSuccess('')} success={success} />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4">
          <div>
            <div className="mb-2">
              <Typography variant="h5">Solicitante / Despachante</Typography>
            </div>
            <div className="min-w-[400px]">
              <div className="sm:w-auto">
                <Select
                  key={selectKey}
                  value={selectedSolicitante}
                  onChange={(e:any) => {
                    setSelectedSolicitante(e);
                    setSelectKey(selectKey + 1);
                  }}
                  label="Selecione um Solicitante, ou cadastre um novo Solicitante"
                >
                  {solicitantes.map((solicitante, index) => (
                    <Option 
                      key={index} 
                      value={solicitante} 
                    >
                      {solicitante}
                    </Option>
                   ))}
                </Select>
              </div>
              {errorSelectSolicitante.selectedSolicitante && <span className="text-red-700 text-sm">{errorSelectSolicitante.selectedSolicitante}</span>} 
            </div>
            <div className="grid md:flex mb-4 grid-cols-2 justify-start space-x-4 w-full mt-3">
              <button onClick={botaoCadastrarSolicitante} className="w-48 px-2 py-2 rounded-lg  bg-blue-600 hover:bg-blue-700 font-bold text-white shadow-xl  transition ease-in-out duration-200 translate-10">
                Cadastrar Solicitante
              </button>
              {/* {buttonEdit && ( */}
              <button className="w-48 px-4 rounded-lg bg-[#047857] hover:bg-[#166534]  font-bold text-white shadow-lg transition ease-in-out duration-200 translate-10"  onClick={editarSolicitante}
              >
                Editar Solicitante
              </button>
            </div>
          </div>
          <div>  
            <div className="mb-2">
              <Typography variant="h5">Proprietário</Typography>
            </div>
            <div className="min-w-[400px]">
              <div className="sm:w-auto">
                <Select
                  key={nomeCliente ? nomeCliente : selectKey} 
                  value={nomeCliente ? nomeCliente : selectProprietario} 
                  onChange={(e) => {
                    setSelectProprietario(e);
                    setSelectKey(selectKey + 1);
                  }}
                  className="flex"
                  label="Selecione um Proprietario, ou Cadastre um novo Proprietario"
                >
                  {proprietarios.map((proprietario, index) => (
                    <Option 
                        key={index} 
                        value={nomeCliente ? nomeCliente : proprietario} 
                        className="hidden md:block"
                    >
                        {proprietario}
                    </Option>
                  ))}
                </Select>
              </div>
              {errorSelectProprietario.selectedProprietario && <span className="text-red-700 text-sm">{errorSelectProprietario.selectedProprietario}</span>} 
            </div>
            <div className="grid md:flex grid-cols-2 justify-start space-x-4 w-full mt-3">
              <button onClick={botaoCadastrarProprietario} className="px-2 py-2 w-48 rounded-lg  bg-blue-600 hover:bg-blue-700 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10">
                Cadastrar Proprietário
              </button>
              <button onClick={editarProprietario} className="px-2 py-2 w-48 rounded-lg bg-[#047857] hover:bg-[#166534] font-bold text-white shadow-lg  transition ease-in-out duration-200 translate-10">
                Editar Proprietário
              </button>
            </div>
          </div> 
        </div>
      </div>
      {openModal && (
          <>
            <div aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity">
              </div>
                <div className="mt-8 fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex items-end justify-center text-center sm:items-center">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                      <div className="flex px-2 py-1 justify-between">
                        <button onClick={() => setOpenModal(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <HiX size={24}/>
                        </button>
                      </div>
                      <div className="bg-white sm:p-2 sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                          <svg className="h-6 w-7 text-blue-600" fill="none" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <HiOutlinePencilAlt size={26}/>
                          </svg>
                        </div>
                        <div className=" text-center mt-2 ml-2 sm:text-left">
                          <h3 
                            className="text-base font-semibold leading-6 text-gray-900" 
                            id="modal-title"
                          >
                            {title}
                          </h3>
                        </div>
                      </div>
                      <hr></hr>
                      <div className="px-8 mt-6 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                      <div className="md:mr-0 md:mt-2 xl:mr-12">
                        <Input label="Nome ou Razão Social :"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          color='blue'
                          className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                          crossOrigin={undefined}            
                        />
                        {errorInput.nome && <span className="text-red-700 text-sm">{errorInput.nome}</span>}
                      </div>
                      <div className="md:mt-2 xl:ml-12">
                        <Input 
                          value={nomeFantasia}
                          onChange={(e) => setNomeFantasia(e.target.value)}
                          color='blue'
                          label="Nome Fantasia :"
                          className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                          crossOrigin={undefined}            
                        />
                      </div>

                      <div className="md:mr-0 md:mt-2  xl:mr-12">
                        <Select
                          value={tipoPessoa}
                          color='blue'
                          label="Tipo Pessoa:"
                          className="rounded-md border text-gray-400"
                        >
                          <Option value="PF" className="md:block">
                            Pessoa Fisica
                          </Option>
                          <Option value="PJ"className="md:block">
                            Pessoa Juridica
                          </Option>
                        </Select>
                      </div>

                      {!visibleInput && (
                        <div className="md:mt-2 xl:ml-12">
                          <Input 
                            value={cpfCnpj}
                            onChange={(e) => setCpfCnpj(e.target.value)}
                            color='blue'
                            label="CPF :"
                            className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                            crossOrigin={undefined}              
                            />
                        </div>
                      )}
                      {visibleInput && (
                        <div className="md:mt-2 xl:ml-12">
                          <Input 
                            value={cpfCnpj}
                            onChange={(e) => setCpfCnpj(e.target.value)}
                            color='blue'
                            label="CNPJ :"
                            className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                            crossOrigin={undefined}              
                          />
                        </div>
                      )}

                      <div className="md:mr-0 md:mt-2  xl:mr-12">
                        <Input 
                          value={rgIe}
                          onChange={(e) => setRgie(e.target.value)}
                          color='blue'
                          label="RG :"
                          type='text'
                          className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                          crossOrigin={undefined}            
                        />
                      </div>

                      <div className="flex md:mt-2 xl:ml-12">
                        <Input 
                          value={cep}
                          onChange={(e) => setCep(e.target.value)}
                          color='blue'
                          label="CEP : "
                          className='rounded-r-none' 
                          crossOrigin={undefined}              
                        />
                        <button
                          className="bg-blue-600 h-10 rounded-r-lg px-4 py-3 text-xs text-white shadow-lg "
                          onClick={consultarCep}
                        >
                          <BsSearch size={16} />
                        </button>
                      </div>
                      <div className="md:mr-0 md:mt-2  xl:mr-12">
                        <Input
                          value={estado}
                          onChange={(e) => setEstado(e.target.value)}
                          color='blue'
                          disabled={habilitarInput}
                          label="UF :"
                          type='text'
                          className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                          crossOrigin={undefined}            
                        />
                      </div>
                      <div className="md:mr-0 md:mt-2  xl:ml-12">
                        <Input 
                          value={cidade}
                          onChange={(e) => setCidade(e.target.value)}
                          color='blue'
                          disabled={habilitarInput}
                          label="Municipio :"
                          type='text'
                          className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                          crossOrigin={undefined}            
                        />
                      </div>
                      <div className="md:mr-0 xl:mr-12">
                        <Checkbox 
                          onClick={dadosEndereco}
                          color='blue'
                          label={<Typography color="blue-gray" className="font-medium flex">Liberar UF e Municipio para edição
                          </Typography>}
                          crossOrigin={undefined}            
                        />
                      </div>
                    </div>
                    <div className="mt-4 mb-10 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
                      <div className="md:mr-0 xl:mr-12">
                        <Input 
                          value={logradouro}
                          onChange={(e) => setLogradouro(e.target.value)}
                          color='blue'
                          label="Logradouro :"
                          type='text'
                          className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                          crossOrigin={undefined}            
                          />
                      </div>
                      <div className="md:mr-0 xl:ml-12">
                        <Input 
                          value={numero}
                          onChange={(e) => setNumero(e.target.value)}
                          color='blue'
                          label="Número :"
                          type='number'
                          className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                          crossOrigin={undefined}            
                          />
                      </div>
                        <div className="md:mr-0 md:mt-2  xl:mr-12">
                          <Input 
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                            color='blue'
                            label="Bairro :"
                            type='text'
                            className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                            crossOrigin={undefined}                
                          />
                        </div>
                          <div className="md:mr-0 md:mt-2  xl:ml-12">
                            <Input 
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              color='blue'
                              label="Email :"
                              type='email'
                              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                              crossOrigin={undefined}                  
                            />
                          </div>
                          <div className="md:mr-0 md:mt-2  xl:mr-12">
                            <Input
                              value={telefone1}
                              onChange={(e) => setTelefone1(e.target.value)}
                              color='blue'
                              label="Telefone 1 :"
                              type='text'
                              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                              crossOrigin={undefined}                  
                            />
                          </div>
                          <div className="md:mr-0 md:mt-2  xl:ml-12">
                            <Input 
                              value={telefone2}
                              onChange={(e) => setTelefone2(e.target.value)}
                              color='blue'
                              label="Telefone 2 :"
                              type='text'
                              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                              crossOrigin={undefined}                  
                            />
                          </div>
                            <div className="md:mt-2 xl:mr-12">
                              {register === 'solicitante' &&(
                                <button onClick={CadastSolicitante} className="px-4 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10 ">
                                  Cadastrar
                                </button>
                              )}
                              {register === 'proprietario' &&(
                                <button onClick={CadastProprietario} className="px-4 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10 ">
                                  Cadastrar
                                </button>
                              )}
                              {register === 'editar solicitante' &&(
                                <button onClick={salvaEdicaoSolicitante} className="px-4 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10 ">
                                  Editar
                                </button>
                              )}
                              {register === 'editar proprietario' &&(
                                <button onClick={salvaEdicaoCliente} className="px-4 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10 ">
                                  Editar
                                </button>
                              )}
                            </div> 
                        </div>
                    </div>    
                    </div>
                </div>
            </div>
          </>
        )} 
    </>
  )
}