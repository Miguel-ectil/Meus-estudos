"use client"
import React, { useEffect, useState } from 'react'
import {
  Input, Card, Typography, Dialog,
  Select, Tabs, TabsHeader, TabsBody, Tab, TabPanel, Option, Checkbox,
} from '@material-tailwind/react'
import { BsSearch } from 'react-icons/bs'
import { MdDeleteForever } from 'react-icons/md';
import { useEstampagemService } from '../../../src/services/estampagem/estampagemService'
import { useRelatorioService } from '../../../src/services/relatorio/relatorioService'
import Image from 'next/image';
import Cookies from "js-cookie";
import PlacaCarroComponent  from './PlacaCarroComponent'
import PlacaMotoComponent  from './PlacaMotoComponent'
import ErrorModal from '../../../src/components/message/ErrorModal';
import SuccessModal  from '../../../src/components/message/SuccessModal';
import { useCadastros } from '../../../src/services/cadastros/cadastros-service'
import { useEnderecoService } from '@/src/services/endereco/enderecoService';


export default function CadastrarAes() {
  const service = useEstampagemService()
  const service1 = useCadastros()
  const serviceRelatorio = useRelatorioService()
  const serviceEndereco = useEnderecoService()

  const numAe = Cookies.get("ae")
  Cookies.remove("ae");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [idInicioEstampagem, setIdInicioEstampagem] = useState('')
  const [checkboxAcept, setCheckboxAcept] = useState('not_accepted')

  const [autorizacaoEstampagem, setAutorizacaoEstampagem] = useState<any>(numAe)
  const [chassis, setChassis] = useState<any>()
  const [statusAe, setStatusAe] = useState<any>()
  const [categoriaVeiculo, setCategoriaVeiculo] = useState<any>()
  const [especieVeiculo, setEspecieVeiculo] = useState<any>()
  const [tipoVeiculo, setTipoVeiculo] = useState<any>()
  const [placa, setPlaca] = useState<any>()
  const [serialBlankDianteira, setSerialBlankDianteira] = useState<any>()
  const [serialBlankTraseira, setSerialBlankTraseira] = useState<any>()
  const [tipodianteira, setTipoDianteira] = useState<any>()
  const [tipoTraseira, setTipoTraseira] = useState<any>()
  const [tiposegundaTraseira, setTipoSegundaTraseira] = useState<any>()
  const [tiposPlaca, setTiposPlaca] = useState()

  // solicitante cliente
  const [nomeCliente ,setNomeCliente ] = useState<any>()
  const [nomeSolicitante, setNomeSolicitante] = useState<any>()
  const [proprietarios, setProprietarios] = useState<any[]>([])
  const [solicitantes, setSolicitantes] = useState<any[]>([])
  const [selectedSolicitante, setSelectedSolicitante] = useState<string>('')
  const [selectKey, setSelectKey] = useState(0);
  const [selectProprietario, setSelectProprietario] = useState<any>('')

  type ErrorInputNome = {
    nome?: string;
  };
  const [errorInput, setErrorInput] = useState<ErrorInputNome>({});
  const validateInput = () => {
    const newErrorInput: ErrorInputNome = {};
    if (!nome) {
      newErrorInput.nome = "Campo obrigatorio!"
    }
    setErrorInput(newErrorInput);
    const isValid = Object.keys(newErrorInput).length === 0;
    return isValid;
  }
  
  // modal upload img
  const [open, setOpen] = useState(false);
  const [type, setType] = React.useState("anexarArquivo")
  // const [anexos, setAnexos] = useState<any>();
  const [xml, setXml] = useState<File | null>(null)
  const [showXmlContent, setShowXmlContent] = useState(false)
  const [pdf, setPdf] = useState<File | null>(null)

  const [selectedFile, setSelectedFile] = useState<File[]>([])
  const [links, setLinks] = useState<any[]>([])
  const [ getNameFile, setGetNameFile ] = useState(false)

  // modal iniciar estampagem
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);


  const handleOpenUpload = () => {
    setOpen(!open)
    getFile()
  }
  const handleOpenIniciarEstampagem = () => setOpen1(!open1);
  const handleOpenSolicitanteClient = () => {
    setOpen2(!open2);
    setNome(''); setNomeFantasia('')
    setRgie(''); setCep('')
    setEstado(''); setComplemento('')
    setCidade(''); setLogradouro('')
    setCpfCnpj(''); setNumero('')
    setBairro(''); setEmail('')
    setTelefone1(''); setTelefone2('')
    setTitle("Cadastrar Solicitante");
  }
  const handleOpenClient= () => {
    handleOpenSolicitanteClient()
    setNome(''); setNomeFantasia('')
    setRgie(''); setCep('')
    setEstado(''); setComplemento('')
    setCidade(''); setLogradouro('')
    setCpfCnpj(''); setNumero('')
    setBairro(''); setEmail('')
    setTelefone1(''); setTelefone2('')
    setTitle("Cadastrar Proprietario");
  }
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (selectedFile.length > 0) {
      setSelectedFile([...selectedFile, ...files]);
    } else {
      setSelectedFile(files);
    }
  }

  const handlePdfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPdf = event.target.files && event.target.files[0];
    if (selectedPdf) {
      setPdf(selectedPdf);
      // console.log(selectedPdf);
    }
  };

  const handleXmlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedXml = event.target.files && event.target.files[0];
    if (selectedXml) {
      setXml(selectedXml);
    }
  };

  useEffect(() => {
    getAutorizacaoDeEstampagem()
  }, []);

  const getAutorizacaoDeEstampagem = () => {
    if (!autorizacaoEstampagem) {
      return;
    } else if (autorizacaoEstampagem.length > 15) {
      setError('Erro: O Número de Autorização não pode ter mais que 15 dígitos.');
      return;
    } else {
      service.getAutorizacaoEstampagem(autorizacaoEstampagem)
        .then((response) => {
          setChassis(response.chassis);
          setStatusAe(response.estadoAutorizacao);
          console.log("Valor de statusAe:", response.estadoAutorizacao); 
          getSolicitantesClientes()
          //resultado do console.log: Valor de statusAe: AGUARDANDO_CONCLUSAO

          setCategoriaVeiculo(response.veiculo.categoria);
          setEspecieVeiculo(response.veiculo.especie);
          setTipoVeiculo(response.veiculo.tipo);
          setSerialBlankDianteira(response.serialBlankDianteira);
          setSerialBlankTraseira(response.serialBlankTraseira)
          setPlaca(response.veiculo.placa)
          setTipoDianteira(response.tiposPlacas.dianteira)
          setTiposPlaca(response.tiposPlacas)
          setTipoTraseira(response.tiposPlacas.traseira)
          setTipoSegundaTraseira(response.tiposPlacas.segundaTraseira)
          if (response.nomeCliente) {
            setNomeCliente(response.nomeCliente)
          }
          if (response.nomeSolicitante) {
            setNomeSolicitante(response.nomeSolicitante)
          }
        })
        .catch((err) => {
          setError("Erro: Autorização de estampagem não encontrada.")
          // Limpe os outros estados relacionados à resposta, se necessário
          setChassis(null);
          setStatusAe(null);
          setCategoriaVeiculo(null);
          // ... outros estados
          console.error(err);
      });
    }
  }

  const getSolicitantesClientes = () => {
    service1.getSolicitante()
    .then((response: any) => {
      setSolicitantes(response); 
    })
    .catch((error:any) => {
      setError(error.response.data.message);
    });

    // get clientes
    service1.getProprietario()
    .then((response: any) => {
      setProprietarios(response); 
    })
    .catch((error: any) => {
      setError(error.response.data.message);
    })
  }

  const apagaFile = (index: any) => {
    const updatedFiles = [...selectedFile];
    updatedFiles.splice(index, 1);
    setSelectedFile(updatedFiles);
  };

  const imprimirComprovante = async (data: any) => {
    try {
    const response = await serviceRelatorio.relatorioComprovante(autorizacaoEstampagem, {
      responseType: "arraybuffer",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/pdf",
      },
    })
    const url = URL.createObjectURL(
      new Blob([response], { type: "application/pdf" })
    )
    window.open(url)
    }
    catch (err) {
      // displayMessage(`Erro!`, text, "error")
    }
  }

  const imprimirOs = async () => {
    try {
      const response = await serviceRelatorio.relatorioOS(autorizacaoEstampagem, {
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/pdf",
        },
      })
      const url = URL.createObjectURL(
        new Blob([response], { type: "application/pdf" })
      )
      window.open(url)
      //window.location.href = url;
    }
    catch (err) {
    }
  }

  // Requisições dos files
  const salvarFile = (files: File[], autorizacaoEstampagem: string) => {
    if (files.length > 0 && autorizacaoEstampagem) {
      const uploadFiles = new FormData();
      files.forEach(file => {
        uploadFiles.append("file", file);
        uploadFiles.append("numeroAe", autorizacaoEstampagem)
      });
      service.postFile(uploadFiles)
        .then((response) => {
          console.log('Anexos salvos com sucesso');
          setSelectedFile([])
          getFile()
        })
        .catch((error) => {
          console.log(error, 'error');
        });
    }
  };
  const handleClickSalvar = () => {
    if (autorizacaoEstampagem) {
      salvarFile(selectedFile, autorizacaoEstampagem);
    }
  }

  const getFile = () => {
    service.getArquivos(autorizacaoEstampagem)
      .then((response) => {
        const linksArray = response.map((item: any) => {
          const filename = item.link.substring(
            item.link.lastIndexOf('/') + 1,
            item.link.indexOf('?') > -1 ? item.link.indexOf('?') : undefined
          )
          return {
            id: item.id,
            type: item.type,
            link: item.link,
            filename: filename,
          }
        })
        if (linksArray !== '') {
          setGetNameFile(true)
        }
        else {
          console.log('Array erro vazio')
        }
        setLinks(linksArray);
      })
      .catch((err) => {
        console.log(err, 'Error,Nenhum anexo foi encontrado');
      });
  }

  const deleteFile = (idToDelete: any) => {
    service.DeleteFile(idToDelete)
      .then((response) => {
        // console.log('Deletado com sucesso!!', response)
        getFile()
      })
      .catch((err) => {
      console.log(err, 'Error, Autorização de estampagem não encontrada');
    });
  }

  const updateFile = (files:any) => {
    service.updateFile(files)
    .then((resp) =>{
      getFile()
    })
    .catch((err) => {
      setError(err.response.data.message)
    }) 
  }

  const iniciarEstampagem = () => {
    if (serialBlankDianteira && serialBlankDianteira !== '' || serialBlankTraseira !== ''){
      const form = {autorizacaoEstampagem, categoriaVeiculo, especieVeiculo, tipoVeiculo, placa}
      service.iniciarEstampagem(form)
        .then((response) => {
          console.log('sucesso!!')
        })
        .catch((err) => {
          console.log(err, 'Error, Autorização de estampagem não encontrada');
        });
    } else {
      return console.log('prencha os campos')
    }
  }

  // requisições dos pdf e xml
  const enviaPdf = () => {
    if (pdf) {
      const formPdfPost = new FormData();
        formPdfPost.append('foto', pdf);
        formPdfPost.append('nome', pdf.name);
        formPdfPost.append('numAE', autorizacaoEstampagem);
        formPdfPost.append('campo', '_NOTA_PDF');

      service.postPdf(formPdfPost)
        .then((response) => {
          console.log('Pdf salvo com sucesso');
          setPdf(null)
        })
        .catch((error) => {
          console.log(error, 'error');
        });
    } else {
      console.log('Nenhum PDF selecionado');
    }
  }
  const limpaCampoPdf = () => {
    setPdf(null)
  }
  const handleVisualizarPdf = () => {
    if (pdf) {
      const pdfContent = URL.createObjectURL(pdf)
      window.open(pdfContent, '_blank')
    }
  };

  const enviaXml = () => {
    if (xml) {
      const formXmlPost = new FormData();
        formXmlPost.append('foto', xml);
        formXmlPost.append('nome', xml.name);
        formXmlPost.append('numAE', autorizacaoEstampagem);
        formXmlPost.append('campo', '_NOTA_XML');

      service.postXml(formXmlPost)
        .then((response) => {
          console.log('Xml salvo com sucesso');
          setXml(null);
        })
        .catch((error) => {
          console.log(error, 'error');
        });
    } else {
      console.log('Nenhum Xml selecionado');
    }
  }
  const limpaCampoXml = () => {
      setXml(null)
  }
  const handleVisualizarXml = () => {
    if (xml) {
      const xmlContent = URL.createObjectURL(xml);
      window.open(xmlContent, '_blank');
    }
  }
  const cadastroEstampagem = () => {
    const form = {autorizacaoEstampagem, categoriaVeiculo, especieVeiculo, tipoVeiculo, placa}
    service.cadastrarAe(form)
      .then((response) => {
        console.log('sucesso!!')
      })
      .catch((err) => {
        console.log(err, 'Error, Autorização de estampagem não encontrada');
      });
  }
  const registrarEstampagem = () => {
    const form = {
      autorizacaoEstampagem, categoriaVeiculo, 
      especieVeiculo, tipoVeiculo, placa,
      tipoPlaca: tiposPlaca 
    }
    service.registraEstampagem(form)
      .then((response) => {
        console.log('sucesso!!')
      })
      .catch((err) => {
        console.log(err, 'Error, Autorização de estampagem não encontrada');
      });
  }
  const cancelarEstampagem = () => {
    const form = {idInicioEstampagem: idInicioEstampagem}
    service.cancelaEstampagem(form)
      .then((response) => {
        console.log('sucesso!!')
      })
      .catch((err) => {
        console.log(err, 'Error, Autorização de estampagem não encontrada');
      });
  }

  // solicitante and Client
  const [register, setRegister] = useState('solicitante')
  const [title, setTitle] = useState('')
  const [habilitarInput, setHabilitarInput] = useState(true); 

  const [nome, setNome] = useState<string>("")
	const [nomeFantasia, setNomeFantasia] = useState<string>("")
	const [tipoPessoa, setTipoPessoa] = useState('')
  const [visibleInput, setVisibleInput] = useState(false); 

	const [cpfCnpj, setCpfCnpj] = useState<string>("")
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
			numero: numero,
			bairro: bairro,
			email: email,
			telefone1: telefone1.replace(/[^0-9]/g, ""),
			telefone2: telefone2.replace(/[^0-9]/g, ""),
			cep: cep.replace(/[^0-9]/g, "")
		}
    const isValid = validateInput();
    if (isValid === true) {
      service1.postRegistroSolicitante(solicitante)
      .then((resp) => {
        setOpen2(false)
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
			numero: numero,
			bairro: bairro,
			email: email,
			telefone1: telefone1.replace(/[^0-9]/g, ""),
			telefone2: telefone2.replace(/[^0-9]/g, ""),
			cep: cep.replace(/[^0-9]/g, "")
		}
    const isValid = validateInput();
    if (isValid === true) {      
      service1.postRegistroProprietario(proprietario)
      .then((resp) => {
        getSolicitantesClientes()
        setOpen2(false);
        setSuccess(resp[1].message)
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
    }
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
  const dadosEndereco = () => {
    const dados = "Todos os dados do cliente"
    if (dados === null || "") {
      setHabilitarInput(false)
    }
    else {
      setHabilitarInput(!habilitarInput)
    }
  }

  return (
      <>
        <ErrorModal  isOpen={!!error} onClose={() => setError('')} error={error} />
        <SuccessModal  isOpen={!!success} onClose={() => setSuccess('')} success={success} />
        <div className='rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl '>
          <h2 className='p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased'>Cadastrar AE</h2>
        </div>
        <Card className='bg-white/40 overflow-x-auto rounded-xl shadow-xl mt-4 sm:px-4 sm:py-1.5'>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-1">
                  <a href='lista-aes'>
                      <button
                          className="w-48 px-2 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-1"
                      >
                          Listagem de Aes
                      </button>
                  </a>
                  <div className="md:w-42 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2">
                    {statusAe && categoriaVeiculo && especieVeiculo && tipoVeiculo && (
                      <>
                        {(statusAe !== 'EM_ESTAMPAGEM') && (
                          <button
                              className="w-48 px-2 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10 block"
                              onClick={imprimirComprovante}
                          >
                              Imprimir comprovante
                          </button>
                        )}
                        {/* {(statusAe === 'AGUARDANDO_CONCLUSAO' || statusAe === 'EM_ESTAMPAGEM' || statusAe === 'CONCLUIDA') && ( */}
                          <button
                              className=" py-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10 block w-48"
                              onClick={imprimirOs}
                          >
                              Imprimir OS
                          </button>
                        {/* )} */}
                      </>
                    )}
                  </div>
              </div>
              {/* <div className='mt-2 divide-y divide-slate-95'/> */}
              <hr className='mt-1 mb-2'/>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-x-2">
                <div className="md:mr-0 md:my-2">
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-y-2 gap-x-5 mt-2">
                    <div className="flex md:mr-0 md:mt-2 ">
                      <Input
                        label="Número Autorização :"
                        value={autorizacaoEstampagem}
                        onChange={(e) => setAutorizacaoEstampagem(e.target.value)}
                        color='blue'
                        className="py-2 shadow-sm sm:text-sm sm:leading-6" 
                        crossOrigin={undefined}                                
                      />
                      <div className="relative">
                        <button
                          className="absolute right-0 h-10 px-4 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg"
                          onClick={getAutorizacaoDeEstampagem}
                        >
                          <BsSearch size={16} />
                        </button>
                      </div>
                    </div>
                      {statusAe && categoriaVeiculo && especieVeiculo && tipoVeiculo && (
                        <>
                          <div className="md:mt-2 ">
                            <Input
                              label="Chassis :"
                              value={chassis}
                              onChange={(e) => setChassis(e.target.value)}
                              color='blue'
                              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                              crossOrigin={undefined}                                        
                            />
                            <div className='flex'>
                              <Checkbox 
                                type="checkbox" 
                                className='w-4 h-4 '
                                value='accepted'
                                onChange={(e) => setCheckboxAcept(e.target.value)}
                                color='blue'
                                crossOrigin={undefined}
                              />
                              <div className="text-xs mt-3">Veiculos anteriores a 22/01/1998</div>
                            </div>
                          </div>

                          <div className="md:mr-0 md:mt-2">
                            <Input
                              label="Status AE :"
                              value={statusAe}
                              onChange={(e) => setStatusAe(e.target.value)}
                              color='blue'
                              disabled
                              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
                              crossOrigin={undefined}                                        
                              />
                          </div>
                          <div className="md:mt-2">
                            <Input
                              label="Categoria Veiculo :"
                              value={categoriaVeiculo}
                              onChange={(e) => setCategoriaVeiculo(e.target.value)}
                              color='blue'
                              disabled
                              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                              crossOrigin={undefined}                                        
                              />
                          </div>
                          <div className="md:mr-0 md:mt-2 ">
                            <Input
                              label="Espécie Veículo :"
                              value={especieVeiculo}
                              onChange={(e) => setEspecieVeiculo(e.target.value)}
                              color='blue'
                              disabled
                              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                              crossOrigin={undefined}                                        
                              />
                          </div>
                          <div className="md:mt-2">
                            <Input
                              label="Tipo de Veículo :"
                              value={tipoVeiculo}
                              onChange={(e) => setTipoVeiculo(e.target.value)}
                              color='blue'
                              disabled
                              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                              crossOrigin={undefined}                                        
                            />
                          </div>
                          {statusAe !== "CONCLUIDA" && (
                            <div className="md:mr-0 md:mt-1 ">
                                <button
                                  disabled={statusAe === "EM_ESTAMPAGEM" || statusAe === "CRIADA"}
                                  onClick={cadastroEstampagem}
                                  className="px-1 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 font-bold text-white shadow-xl  transition ease-in-out duration-200 translate-10  w-full"
                                >
                                  Cadastrar Ae
                                </button>
                            </div>
                          )}
                          <div className="md:mr-0 md:mt-1">
                            <button
                                className="px-1 py-1.5 rounded-lg bg-[#111827] hover:bg-[#1f2937] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10  w-full"
                                onClick={handleOpenUpload}
                            >
                                Anexar Arquivos
                            </button>
                          </div>
                          {statusAe !== 'CONCLUIDA' && (
                            <div className="md:mt-1">
                              <button
                                  className="px-1 py-1.5 rounded-lg bg-blue-gray-600 hover:bg-blue-gray-700 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10  w-full"
                                  onClick={handleOpenIniciarEstampagem}
                                  disabled={(statusAe === "EM_ESTAMPAGEM")}
                              >
                                  Iniciar Estampagem
                              </button>
                            </div>
                          )}
                          {statusAe === 'EM_ESTAMPAGEM' && (
                            <>
                            <div className="md:mt-1">
                              <button
                                className="px-1 py-1.5 rounded-lg bg-[#047857] hover:bg-[#166534] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10  w-full"
                                onClick={registrarEstampagem}
                              >
                                Registrar Estampagem
                              </button>
                            </div>
                            <div  className="md:mt-1">
                              <button className="px-1 py-1.5 rounded-lg bg-red-700 hover:bg-red-600 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10  w-full"
                              onClick={cancelarEstampagem} 
                              >
                                Cancelar Estampagem
                              </button>
                            </div>
                            </>
                          )}
                      </>
                    )}
                  </div>
                  </div>
                  <div className=" grid-cols-10">
                    {tipoVeiculo !== 'MOTOCICLETA' && (
                      <div className='flex justify-center'>
                        <PlacaCarroComponent placa={placa} />
                      </div>
                    )}
                    {tipoVeiculo == 'MOTOCICLETA' && (
                      <div className='flex justify-center'>
                        <PlacaMotoComponent placa={placa} />
                      </div>
                    )}
                    {statusAe && categoriaVeiculo && especieVeiculo && tipoVeiculo  && (
                      <div className='flex justify-center'>
                        <div className="grid gap-x-4 grid-cols-3 grid-rows-3">
                          {tipodianteira === true && (
                            <div
                              className="overflow-hidden mt-2 px-1.5 rounded-lg bg-[#047857] hover:bg-[#166534] font-bold text-white text-sm shadow-xl"
                              style={{textAlign: 'center'}}
                            >
                              Dianteira <br/>
                              {serialBlankDianteira}
                            </div>
                          )}
                          {tipoTraseira === true && (
                            <div
                              className="overflow-hidden mt-2 px-1.5 rounded-lg bg-[#047857] hover:bg-[#166534] font-bold text-white text-sm shadow-xl"
                              style={{ textAlign: 'center' }}
                            >
                              Traseira <br />
                              {serialBlankTraseira}
                            </div>
                          )}
                          { tiposegundaTraseira === true && (
                            <div
                              className="overflow-hidden mt-2 px-1.5 text-sm rounded-lg bg-red-800 hover:bg-red-900 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10 w-full"
                              style={{textAlign: 'center'}}
                            >
                              Segunda Traseira <br/>
                              {/*230523071833185*/}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
              </div>
              {statusAe && categoriaVeiculo && especieVeiculo && tipoVeiculo && (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 mt-4 mb-1">
                <div>
                  <div className="mb-2">
                    <Typography variant="h5">Solicitante / Despachante</Typography>
                  </div>
                  <div className="min-w-[300px]">
                    <div className="sm:w-auto">
                      <Select
                        key={selectKey}
                        value={selectedSolicitante}
                        onChange={(e:any) => {
                          setSelectedSolicitante(e);
                          setSelectKey(selectKey + 1);
                        }}
                        label="Selecione um Solicitante, ou cadastre um novo Solicitante"
                        disabled={statusAe === 'CRIADA'}
                      >
                        <Option value={nomeSolicitante}> {nomeSolicitante} </Option>

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
                  </div>
                  <div className="grid md:flex grid-cols-2 justify-start space-x-4 w-full mt-2">
                    <button 
                      onClick={handleOpenSolicitanteClient} 
                      className="w-48 px-2 py-2 rounded-lg  bg-blue-600 hover:bg-blue-700 font-bold text-white shadow-xl  transition ease-in-out duration-200 translate-10">
                      Cadastrar Solicitante
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
                        disabled={statusAe === 'CRIADA'}
                      >
                        <Option value={nomeCliente}> {nomeCliente} </Option>
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
                  </div>
                  <div className="grid md:flex grid-cols-2 justify-start space-x-4 w-full mt-2">
                    <button 
                      onClick={handleOpenClient} 
                      className="px-2 py-2 w-48 rounded-lg  bg-blue-600 hover:bg-blue-700 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10">
                      Cadastrar Proprietário
                    </button>
                  </div>
                </div> 
              </div>
            )}
          </Card>
            <Dialog
              open={open}
              handler={handleOpenUpload}
              size={'sm'}
              className='absolute top-0 overflow-y-scroll' 
              style={{ maxHeight: '580px' }}
            >
              <Tabs value={type} className="px-2 mt-2">
                <TabsHeader className="mb-4">
                  <Tab value="anexarArquivo" onClick={() => setType("anexarArquivo")}>
                    Anexar arquivos
                  </Tab>
                  <Tab value="notaFiscal" onClick={() => setType("notaFiscal")}>
                    Nota Fiscal
                  </Tab>
                </TabsHeader>
                <TabsBody
                  className="!overflow-hidden "
                  animate={{
                    initial: {
                        x: type === "anexarArquivo" ? 400 : -400,
                    },
                    mount: {
                        x: 0,
                    },
                    unmount: {
                        x: type === "anexarArquivo" ? 400 : -400,
                    },
                  }}
                >
                  <TabPanel value="anexarArquivo" className="p-2">
                    <div>
                      <div className="md:mt-2 xl:mr-0 ">
                        <label
                          htmlFor="large_size"
                          className="block w-full bg-gray-200 rounded-lg px-4 py-2 cursor-pointer text-center border-2 border-dashed border-gray-400"
                        >
                          Adicionar Anexo
                          <div>
                            <input
                              className="hidden"
                              id="large_size"
                              type="file"
                              multiple
                              onChange={handleFileChange}
                            />
                          </div>
                        </label>
                        <p>
                          <strong className='text-sm'>
                            Agora você pode adicionar vários anexos ao mesmo tempo
                          </strong>
                        </p>
                        {links.map((item , index) => (
                          <div key={item}>
                            <Card className="border rounded-xl shadow-xl mt-2">
                              <div className="mt-2 px-2 overflow-hidden">
                                <Typography variant="h4" className="text-sm text-gray-800">
                                  {item.filename}
                                </Typography>
                                <img
                                  src={item.link}
                                  width={'130'}
                                  height={'110'}
                                  alt="Arquivo selecionado"
                                  className="mx-auto"
                                />
                                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-2">
                                  <Select
                                    key={item.id}
                                    value={item.type}
                                    className=''
                                    label='Classifque o tipo de anexo'
                                    onChange={(e) => item.type = e}
                                  >
                                    <Option value={"RG"}>RG</Option>
                                    <Option value={"CNH"}>CNH</Option>
                                    <Option value={"Placa Dianteira Fixada"}>Placa Dianteira Fixada</Option>
                                    <Option value={"Placa Traseira Fixada"}>Placa Traseira Fixada</Option>
                                    <Option value={"Placa Segunda Traseira Fixada"}>Placa Segunda Traseira Fixada</Option>
                                    <Option value={"Placa Dianteira Fixa Removidada"}>Placa Dianteira Fixa Removidada</Option>
                                    <Option value={"Placa Traseira Fixa Removidada"}>Placa Traseira Fixa Removidada</Option>
                                    <Option value={"Placa Segunda Traseira  Removida"}>Placa Segunda Traseira  Removida</Option>
                                    <Option value={"Qr Placa Dianteira"}>Qr Placa Dianteira</Option>
                                    <Option value={"Qr Placa Traseira"}>Qr Placa Traseira</Option>
                                    <Option value={"Qr Placa Segura Traseira"}>Qr Placa Segura Traseira</Option>
                                    <Option value={"Chassi"}>Chassi</Option>
                                    <Option value={"Local"}>Local</Option>
                                  </Select>
                                  <Typography
                                    as="a"
                                    href="#"
                                    variant="small"
                                    // color="#991b1b"
                                    className="font-medium text-red-900"
                                    onClick={() => deleteFile(item.id)}
                                  >
                                    <MdDeleteForever size={26} />
                                  </Typography>
                                </div>
                              </div>
                            </Card>
                          </div>
                        ))}
                        {selectedFile && (
                          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-2'>
                            {selectedFile.map((file: File, index) => (
                              <Card
                                className="border rounded-xl shadow-xl mt-2 p-2"
                                key={index}
                              >
                                <div className="mt-2 overflow-hidden">
                                  <Image
                                    src={URL.createObjectURL(file)}
                                    width={'140'}
                                    height={'110'}
                                    alt="Arquivo selecionado"
                                    className="mx-auto"
                                  />
                                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-2">
                                    <Typography variant='h4' className="text-sm text-gray-800">{file.name}</Typography>
                                    <Typography
                                      as="a"
                                      href="#"
                                      variant="small"
                                      // color="#991b1b"
                                      className="font-medium text-red-900"
                                      onClick={() => apagaFile(index)}
                                    >
                                      <MdDeleteForever size={26} />
                                    </Typography>
                                  </div>
                                </div>
                              </Card>
                            ))}
                          </div>
                        )}
                    </div>
                  </div>
                  {!getNameFile && (
                    <div className="flex justify-end mt-2">
                      <button
                        className="w-48 py-1.5 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10 "
                        onClick={handleClickSalvar}
                      >
                        Salvar Anexos
                      </button>
                    </div>
                  )}
                  {getNameFile && (
                    <div className='mt-2 flex justify-between'>
                      <button
                        className="px-4 py-1.5 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white shadow-xl shadow-[#d1fae5] transition ease-in-out duration-200 translate-10 "
                        onClick={() => updateFile(links)}
                      >
                        Atualizar Anexos
                      </button>
                    </div>
                  )}
                </TabPanel>
                <TabPanel value="notaFiscal" className="p-2">
                  <label htmlFor="pdf_input" className="block w-full bg-gray-200 rounded-lg px-4 py-2 cursor-pointer text-center border-2 border-dashed border-gray-400">
                    {pdf ? `PDF selecionado: ${pdf.name}` : 'Adicionar PDF Nota Fiscal'}
                    <input
                      className="hidden"
                      id="pdf_input"
                      type="file"
                      accept=".pdf"
                      onChange={handlePdfChange}
                    />
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    {pdf && (
                      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-2'>
                        <button
                          className="w-20 py-1.5 mt-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10"
                          onClick={limpaCampoPdf}
                        >
                          Limpar
                        </button>

                        <button
                          className="w-24 py-1.5 mt-2 rounded-lg bg-blue-gray-600 hover:bg-blue-gray-700 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10"
                          onClick={handleVisualizarPdf}
                        >
                          Visualizar
                        </button>
                      </div>
                    )}
                    
                    <div className='flex'>
                      <button
                        className="w-48 mt-2 py-1.5 rounded-lg bg-[#047857] hover:bg-[#166534] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10"
                        onClick={enviaPdf}
                      >
                        Salvar PDF Nota Fiscal
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 xl:mr-0">
                    <label htmlFor="xml_input" className="block w-full bg-gray-200 rounded-lg px-4 py-2 cursor-pointer text-center border-2 border-dashed border-gray-400">
                      {xml ? `XML selecionado: ${xml.name}` : 'Adicionar XML Nota Fiscal'}
                      <input
                        className="hidden"
                        id="xml_input"
                        type="file"
                        accept=".xml"
                        onChange={handleXmlChange}
                      />
                    </label>
                   </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                     {xml && (
                       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-2'>
                         <button
                           className="w-20 py-1.5 mt-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10"
                           onClick={limpaCampoXml}
                         >
                           Limpar
                         </button>
                         <button
                           className="w-24 py-1.5 mt-2 rounded-lg bg-blue-gray-600 hover:bg-blue-gray-700 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10"
                           onClick={handleVisualizarXml}
                         >
                           Visualizar
                         </button>
                       </div>
                     )}
                    <div className="mt-2">
                      <button
                        className="w-48 py-1.5 rounded-lg bg-[#047857] hover:bg-[#166534] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10"
                        onClick={enviaXml}
                      >
                        Salvar XML Nota Fiscal
                      </button>
                    </div>
                  </div>
                </TabPanel>
              </TabsBody>
            </Tabs>
      </Dialog>
      <Dialog
        open={open1}
        handler={handleOpenIniciarEstampagem}
        size={'md'}
        className="w-80 absolute top-0 transform -translate-x-1/2 p-4 bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Typography variant="h4" color="blue-gray">
                Iniciar Estampagem
            </Typography>
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-2 gap-2 mt-1">
          {tipodianteira === true && (
            <>
              <div className="md:mt-2">
                <Typography variant="h5" color="blue-gray">
                  Dianteira
                </Typography>
              </div>
              <div className="md:mr-0 md:mt-1 xl:mr-2">
                <Input
                  label="Dianteira:"
                  value={serialBlankDianteira}
                  onChange={(e) => setSerialBlankDianteira(e.target.value)}
                  color='blue'
                  className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                  crossOrigin={undefined}                
                />
              </div>
            </>
          )}
            {tipoTraseira === true && (
            <>
              <div className="md:mt-2">
                <Typography variant="h5" color="blue-gray">
                  Traseira
                </Typography>
              </div>
              <div className="md:mr-0 md:mt-1 xl:mr-2">
                <Input
                  label="Traseira :"
                  value={serialBlankTraseira}
                  onChange={(e) => setSerialBlankTraseira(e.target.value)}
                  color='blue'
                  className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
                  crossOrigin={undefined}               
                />
              </div>
            </>
          )}
          {tiposegundaTraseira === true && (
            <>
              <div className="md:mt-1">
                <Typography variant="h5" color="blue-gray">
                    Segunda Traseira
                </Typography>
              </div>
              <div className="md:mr-0 md:mt-1 xl:mr-2">
                <Input
                  label="Traseira :"
                  value={serialBlankTraseira}
                  onChange={(e) => setSerialBlankTraseira(e.target.value)}
                  color='blue'
                  className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                  crossOrigin={undefined}                
                />
              </div>
            </>
          )}
          <div className="md:mt-1">
            <button
              className="px-1 py-1.5 rounded-lg bg-[#15803d] hover:bg-[#16a34a] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10  w-full"
              onClick={iniciarEstampagem}
            >
              Iniciar Estampagem
            </button>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={open2}
        handler={handleOpenSolicitanteClient}
        size={'lg'}
        style={{ maxHeight: '620px' }}
        className="w-80 absolute top-0 transform -translate-x-1/2 p-4 bg-white rounded-lg shadow-md"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Typography variant="h4" color="blue-gray">
            {title}
            </Typography>
        </div>
        <hr />
        <div className="px-8 mt-4 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
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
              className='rounded-l-none' 
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
              <div className=" xl:mr-12">
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
              </div> 
          </div>
      </Dialog>
    </>
  )
}