"use client"
import { BsSearch } from 'react-icons/bs'
import { Typography, Tooltip, Input, Button, Card, IconButton, Menu, MenuHandler, MenuList, MenuItem, Dialog, DialogHeader, DialogBody, DialogFooter, } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { VscError, VscPass } from "react-icons/vsc";
import { BiSolidChevronDown, BiChevronUp } from "react-icons/bi"
import { useRouter } from 'next/navigation'
import { ListaAes } from '../../../src/interfaces/estampagem/lista-aes';
import { useEstampagemService } from '../../../src/services/estampagem/estampagemService'
import { useRelatorioService } from '../../../src/services/relatorio/relatorioService';
// import EstampagemAe from '@/components/cadastrarAe'
import Image from "next/image";
import {AiOutlineCheckCircle} from 'react-icons/ai'
import Cookies from "js-cookie";
import ErrorModal from '../../../src/components/message/ErrorModal';
import SuccessModal  from '../../../src/components/message/SuccessModal';

export default function Lista_Estampagem() {
  // services
  const serviceEstampagem = useEstampagemService()
  const serviceRelatorio = useRelatorioService()
  const router = useRouter();
  const TABLE_HEAD = ["", "", "Autorização", "Placa", "Data", "Tipo", "Anexos", "Situação", "Doc Fiscal", "NFe","NFCe"];

  const [ae, setAe] = useState<any>()
  const [isLoading, setIsLoading] = useState(true);
  const [openCadastrarAe, setOpenCadastrarAe] = useState(false);
  const [open, setOpen] = useState(false);
  const [textBotao, setTextBotao] = useState<any>('Autorizações Pendentes')

  // paginação tabela
  const [itensVisiveis, setItensVisiveis] = useState<any[]>([]); // Use correct type or interface
  const [numerosPaginas, setNumerosPaginas] = useState<number[]>([]);
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const [totalPaginas, setTotalPaginas] = useState<number>(1);

  // parte mensageria
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleOpenCadatroAe = () => setOpenCadastrarAe(!openCadastrarAe);
  const handleOpen = (ae: any) => {
    setAe(ae)
    setOpen(!open)
  }

  // funções de redirecionamento de tela e envio dos dados
  const telaEstampagem = (ae: any) => {
    try {
      router.push(`/producao/cadastrar-ae`);
      Cookies.set('ae', ae)
    } catch (err) {
      setError(`Erro ao consultar tela de estampagem, verifique os dados do AE. ${err}`)
    }
  };

  const telaEmitirNotaFiscal = () => {
    try {
      router.push(`/cadastros/gerar-nf`);
      Cookies.set('ae', ae)
    } catch (err) {
      setError(`Erro ao consultar tela de gerar nota fiscal, verifique os dados do AE. ${err}`)
    }
  };

  const telaEmitirCupomFiscal = () => {
    try {
      router.push(`/cadastros/gerar-cupom`);
      Cookies.set('ae', ae)
    } catch (err) {
      setError(`Erro ao consultar tela de gerar cupom fiscal, verifique os dados do AE. ${err}`)
    }
  };

  // recebe os dados necessarios da apí
  const [todosDados, setTodosDados] = useState([]);

  useEffect(() => {
    getListaAe(1)
  }, [])
  const getListaAe = (page: number) => {
    serviceEstampagem.getListaAePorPagina(page)
      .then((res) => {
        console.log(res)
        setIsLoading(false);
        setItensVisiveis(res.lista_ae);
        setTotalPaginas(res.total_paginas);
        setNumerosPaginas(Array.from({ length: res.total_paginas }, (_, index) => index + 1));
      })
      .catch((err) => {
        setError(err.response.data.message);
        setIsLoading(false);
      });
  };

  const todasAsAutorizacoes = () => {
    getListaAe(1)
    setTextBotao('Autorizações Pendentes')
  }
  const autorizacaoPendente = () => {
    const numero = 1
    serviceEstampagem.getListaAePorPaginaNotConcluido(numero)
    .then((res) => {
      setIsLoading(false);
      setItensVisiveis(res.aes_pendentes);
      setTotalPaginas(res.total_paginas);
      setTextBotao('Todas as Autorizações')
      setNumerosPaginas(Array.from({ length: res.total_paginas }, (_, index) => index + 1));
    })
    .catch((err) => {
      setError(err.response.data.message);
      setIsLoading(false);
    });
  }

  const returnOrdemServico = async (ae: any) => {// Funcao para imprimir Os.
    serviceRelatorio.relatorioOS(ae, {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/pdf",
      },
    })
    .then((res:any) => {
      const url = URL.createObjectURL(
          new Blob([res], { type: "application/pdf" })
      )
      window.open(url)
      //window.location.href = url;
    })
    .catch((error:any) => {
      setError("Erro ao ler o pdf, Verifique os dados do número da autorização de estampagem");
    })
  }

  const returnComprovante = async (ae: number) => {
    try {
      const response = await serviceRelatorio.relatorioComprovante(ae, {
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
      setError("Erro ao ler o pdf, Verifique os dados do número da autorização de estampagem");
    }
  }

  const returnTermoResponsabilidade = async (ae: number) => {// Funcao para imprimir Os.
    try {
      const response = await serviceRelatorio.relatorioTermo(ae, {
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
      setError("Erro ao ler o pdf, Verifique os dados do número da autorização de estampagem");
    }
  }

  // personalização de componentes
  const [selectBottom, setSelectBottom] = useState(false);

  // Filtro do input de pesquisa da tabela
  const [filtrarValor, setFiltrarValor] = useState<any>()
  const getListaAePorFiltro  = () => {
    if (filtrarValor) {
      const page = 1
      serviceEstampagem.getBuscaAe(filtrarValor, page)
      .then((resp) => {
        setIsLoading(false);
        setItensVisiveis(resp.lista_ae)
        console.log(resp.lista_ae)
        setTotalPaginas(resp.total_paginas);
        setNumerosPaginas(Array.from({ length: resp.total_paginas }, (_, index) => index + 1));
      })
      .catch((error) => {
        setError(error.response.data.message);
        setIsLoading(false);
      });
    } 
  }

  // parte de filtrar dados por data inicial e final
  const [form, setForm] = useState<any>({
    dataInicial: null,
    dataFinal: null,
    page: null
  })

  type ErrorInput = {
    dataInicial?: string;
    dataFinal?: string;
    logica?: string
  };
  const [errorInput, setErrorInput] = useState<ErrorInput>({});

  const validateFields = () => {  
    const newErrorInput: ErrorInput = {}; // Crie um novo objeto de erro vazio
    if (!form.dataInicial) {
      newErrorInput.dataInicial = "Informe a data de inicial";
    }
    if (!form.dataFinal) {
      newErrorInput.dataFinal = "Informe a data final";
    }
    if (form.dataInicial > form.dataFinal) {
      newErrorInput.logica = "A data inicial não pode ser maior que a data final"
    }
    setErrorInput(newErrorInput);
    const isValid = Object.keys(newErrorInput).length === 0;
    return isValid;
  }

  const periodoEstampagem = () => {
    const isValid = validateFields();
    console.log(isValid)
    if (isValid === true) {
      serviceEstampagem.getListaBuscaData(form.dataInicial, form.dataFinal, 1)
      .then((res:any) => {
        setItensVisiveis(res.data)
      })
      .catch((err:any) =>{
        setError(err.response.data.message);
      })
    } 
  };

  const trocarPagina = (novaPagina: any) => {
    setPaginaAtual(novaPagina);
    getListaAe(novaPagina);
  };

  const anterior = () => {
    if (paginaAtual > 1) {
      trocarPagina(paginaAtual - 1);
    }
  };

  const proxima = () => {
    if (paginaAtual < totalPaginas) {
      trocarPagina(paginaAtual + 1);
    }
  };

  return (
    <>
      <ErrorModal  isOpen={!!error} onClose={() => setError('')} error={error} />
      <SuccessModal  isOpen={!!success} onClose={() => setSuccess('')} success={success} /> 
      <div className="overflow-hidden rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-2">
        <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">Lista de Estampagens</h2>
      </div>
      <div className="overflow-hidden bg-white/40 border border-gray-300 p-4 mt-4 rounded-xl shadow-xl">
          <div className="flex md:grid-cols-3 sm:grid-cols-1">
            <div className="sm:mr-10 xl:mr-10">
              <p className="font-bold">
                Data Inicial:
              </p>
              <input
                type="date"
                id="date"
                onChange={(e) => setForm({ ...form, dataInicial: e.target?.value })}
                className="block w-[13.5rem] h-9 rounded-md border-gray-400 p-4 border"
              />
              {errorInput.dataInicial && <span className="text-red-700 text-sm">{errorInput.dataInicial}</span>}
            </div>
            <div>
              <p className="font-bold flex">Data Final:</p>
              <div className='flex'>
                <input
                  onChange={(e) => setForm({ ...form, dataFinal: e.target?.value })}
                  type="date"
                  id="date"
                  className="rounded-md block w-[13.5rem] h-9 border-gray-400 shadow-sm focus:ring-opacity-50 p-4 border"
                />
                {errorInput.logica && 
                  <div className='ml-4 flex items-center'>
                    <Tooltip
                      placement="bottom"
                      className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                      content={
                        <div className="w-80">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-80"
                          >
                            {errorInput.logica}
                          </Typography>
                        </div>
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-6 w-6 cursor-pointer text-yellow-900"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                    </Tooltip>
                  </div>
                }
              </div>
              {errorInput.dataFinal && <span className="text-red-700 text-sm">{errorInput.dataFinal}</span>} 
            </div>
            <div className='w-full mt-6'>
              <Button
                color='blue'
                className="ml-10 h-9 rounded-r-lg px-4 py-3 text-xs text-white shadow-lg items-center justify-center flex"
                onClick={periodoEstampagem}
              >
                Pesquisar por periodo
              </Button>
            </div>
          </div>
      </div>
      <Card className='bg-white/40 overflow-x-auto rounded-xl shadow-xl px-4 mt-4 minW'>
        <div className="flex gap-2 p-2 flex-col md:flex-row items-center justify-between mt-3">
          {/* <div><Button onClick={handleOpenCadatroAe}>Cadastrar</Button></div> onClick={() => router.push('../estoque/confirmar-recebimento-caixa')} */}
          <div className="flex w-96">
            <Input
              value={filtrarValor}
              onChange={(e) => setFiltrarValor(e.target.value)}
              label="Digite a PLACA ou o n° AE: "
              className='rounded-r-lg'
            />
            <div className='relative'>
              <button
                className="absolute right-0 h-10 px-6 text-xs"
                onClick={getListaAePorFiltro}
              >
                <BsSearch size={16} />
              </button>
            </div>
          </div>
          {textBotao == 'Autorizações Pendentes' && (
            <div>
              <Button
                color='blue' 
                onClick={autorizacaoPendente}>
                {textBotao}
              </Button>
            </div>
          )}
          {textBotao === 'Todas as Autorizações' && (
            <div>
              <Button 
                color='blue'
                onClick={todasAsAutorizacoes}>
                Todas as Autorizações
              </Button>
            </div>
          )}
        </div>
        <table className="mt-4 w-full bg-white/80">
          <thead className="bg-blue-gray-100 w-full">
            <tr className='border-gray-400 border'>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="w-26 p-4 text-lg font-semibold tracking-wide text-center">
                  <Typography variant="small" color="blue-gray" className="leading-none opacity-70 font-bold">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
          {itensVisiveis.map((row, index) => (
              <tr key={index} className='border-b even:bg-blue-gray-50/50'>
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap text-center">
                  {(row?.status === 'CRIADA') && (
                      <div className="text-sm text-gray-700 whitespace-nowrap text-center">
                        <Button color="green" onClick={() => { telaEstampagem(row?.ae); }} className="w-32 p-2 h-10 justify-center items-center flex">
                          Criada
                        </Button>
                      </div>
                  )}
                  {(row?.status === "EM_ESTAMPAGEM") && (
                      <div className="text-sm text-gray-700 whitespace-nowrap text-center">
                        <Button color="green" onClick={() => { telaEstampagem(row?.ae); }} className="w-32 p-2 h-10 justify-center items-center flex">
                          Em Estampagem
                        </Button>
                      </div>
                  )}
                </td>
                <td className="p-4 text-sm text-gray-700 whitespace-nowrap text-center">
                  <div className="">
                    <Menu>
                      <MenuHandler>
                        <Button color='gray' onClick={() => {
                          setSelectBottom(!selectBottom);
                        }} className='!bg-gray-800/90 !hover:shadow-gray-800 uppercase w-32 h-10 flex items-center'>
                          Ações
                          {selectBottom ? <BiChevronUp className="ml-6" size={20} /> : <BiSolidChevronDown className="ml-6" size={20} />}
                        </Button>
                      </MenuHandler>
                      <MenuList>
                        <MenuItem onClick={() => telaEstampagem(row?.ae)}>Editar</MenuItem>
                        <MenuItem onClick={() => returnOrdemServico(row?.ae)}>Ordem de Serviço</MenuItem>
                        <MenuItem onClick={() => returnComprovante(row?.ae)}>Comprovante</MenuItem>
                        {(row?.NFe === '0' && row?.NFCe === '0' && row?.status === 'CONCLUIDA' || row?.status === 'EM_ESTAMPAGEM' || row?.status === 'AGUARDANDO_CONCLUSAO') && (
                            <MenuItem onClick={() => handleOpen (row?.ae)}>Emitir Nota Cupom</MenuItem>
                        )}
                        <MenuItem onClick={() => returnTermoResponsabilidade(row?.ae)}>Termo de Responsabilidade</MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </td>
                <td key={row} className="items-center p-4 text-sm text-gray-700 whitespace-nowrap text-center">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                      {row.ae}
                  </Typography>
                </td>
                <td key={row} className="items-center p-4 text-sm text-gray-700 whitespace-nowrap text-center">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                      {row.placa}
                  </Typography>
                </td>
                <td key={row} className="items-center p-4 text-sm text-gray-700 whitespace-nowrap text-center">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                      {row.data}
                  </Typography>
                </td>
                <td key={row} className="items-center p-4 text-sm text-gray-700 whitespace-nowrap text-center">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                      {row.tipo}
                  </Typography>
                </td>
                <td key={row} className="items-center p-4 text-sm text-gray-700 whitespace-nowrap text-center">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                      {row.quantidade_anexos}
                  </Typography>
                </td>
                <td key={row} className="items-center p-4 text-sm text-gray-700 whitespace-nowrap text-center">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                      {row.status}
                  </Typography>
                </td>
                <td key={row} className="items-center p-4 text-sm text-gray-700 whitespace-nowrap text-center">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                      {row.xml}
                  </Typography>
                </td>
                {(parseInt(row?.nfe) === 0) ?
                  <td key={row} className="p-4 text-sm text-red-900 whitespace-nowrap text-center">
                    <Typography variant="small" color="#991b1b"  className="font-normal">
                      <VscError size={28} />
                    </Typography>
                  </td> : 
                  <td key={row} className="p-4 text-sm text-green-900 whitespace-nowrap text-center">
                    <Typography variant="small" color="#075018"  className="font-normal">
                      <AiOutlineCheckCircle size={28} />
                    </Typography>
                  </td>
                }
                {(parseInt(row?.nfce) === 0) ?
                  <td key={row} className="p-4 text-sm text-red-900 whitespace-nowrap text-center">
                    <Typography variant="small" color="#991b1b"  className="font-normal">
                      <VscError size={28} />
                    </Typography>
                  </td> : 
                  <td key={row} className="p-4 text-sm text-green-900 whitespace-nowrap text-center">
                    <Typography variant="small" color="blue-gray"  className="font-normal">
                      <AiOutlineCheckCircle size={28} />
                    </Typography>
                  </td>
                }
              </tr>
          ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center py-2">
          <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1"
              onClick={anterior}
              disabled={paginaAtual === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Anterior
          </Button>
          <div className="flex items-center gap-1">
            {numerosPaginas.map((numeroPagina) => (
                <IconButton
                    key={numeroPagina}
                    onClick={() => trocarPagina(numeroPagina)}
                    className={`py-1 px-1 ${
                        paginaAtual === numeroPagina ? "bg-blue-400 text-white" : ""
                    }`}
                >
                  {numeroPagina}
                </IconButton>
            ))}
          </div>
          <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1"
              onClick={proxima}
              disabled={paginaAtual === totalPaginas}
          >
            Próxima <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      </Card>
      
      <Dialog open={open} handler={handleOpen} size={'sm'} className='top-0 absolute'>
        <div className="p-4 grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
          <div>
            {/*<a href='/cadastros/gerar-nf'>*/}
              <button
                className="px-1 py-1.5 rounded-lg bg-[#374151] hover:bg-[#4b5563] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10  w-full"
                onClick={telaEmitirNotaFiscal}
              >
                Emitir Nota Fiscal
              </button>
            {/*</a>*/}
          </div>
          <div>
            <button
              className="px-4 py-1.5 rounded-lg bg-[#111827] hover:bg-[#1f2937] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10 w-full"
              onClick={telaEmitirCupomFiscal}
            >
              Emitir Cupom Fiscal
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
