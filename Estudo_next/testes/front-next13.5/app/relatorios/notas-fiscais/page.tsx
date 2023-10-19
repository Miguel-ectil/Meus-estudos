"use client"

import { Typography, Tooltip, Button, Card, IconButton, Dialog } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { useNotaFiscalService } from '../../../src/services/notaFiscal/notaFiscal';
import ErrorModal from '../../../src/components/message/ErrorModal';
import SuccessModal  from '../../../src/components/message/SuccessModal';

export default function Nota_Fiscal() {
  const TABLE_HEAD = ["NFe", "Documento", "Destinatario", "Data", "Status", "AE", "", "", ""];
  const NotaFiscal = useNotaFiscalService()
  const [notasFiscais, setNotasFiscais] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [confirmacao, setConfirmacao] = useState(false);
  const [nf, setNf] = useState()
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const consultaNotasfiscais = () => {
    NotaFiscal.getNfsEmitidas()
      .then((response: any) => {
        setNotasFiscais(response)
        //console.log(response)
    })
    .catch ((error: any) => {
      console.error(error, "Ocorreu um erro:");
    })
  }
  const [timer, setTimer] = useState<any>(null);

  useEffect(() => {
    consultaNotasfiscais()
    setTimer(setInterval(() => consultaNotasfiscais(), 60000))
    return () => clearInterval(timer)
  }, [])

  const ITEMS_PER_PAGE = 20;
  const [paginaAtual, setPaginaAtual] = useState(1);
  const totalPaginas = Math.ceil(notasFiscais.length / ITEMS_PER_PAGE);
  const indiceInicial = (paginaAtual - 1) * ITEMS_PER_PAGE;
  const itensVisiveis = notasFiscais.slice(indiceInicial,
    indiceInicial + ITEMS_PER_PAGE);

  const [form, setForm] = useState<any>({ dataInicial: null, dataFinal: null });

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

  const solicitarZipPeriodo = async () => {
    const isValid = validateFields();
    if (isValid === true) {
      try {
        const json = await NotaFiscal.solicitarZipPeriodo(form, {
          responseType: "arraybuffer",
        })
        const url = window.URL.createObjectURL(new Blob([json]))
        const link = document.createElement("a")
        link.href = url
        link.setAttribute("download", "Notas Fiscais XML.zip")
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (err) {
        // return displayMessage(`Erro!`, message, "error")
      }
    }
  }

  const anterior = () => {
    setPaginaAtual((paginaAnterior) => paginaAnterior - 1);
  };
  const proxima = () => {
    setPaginaAtual((proximaPagina) => proximaPagina + 1);
  };
  const trocarPagina = (numeroPagina: any) => {
    setPaginaAtual(numeroPagina);
  };
  const numerosPaginas = Array.from({ length: totalPaginas }, (_, idx) => idx + 1);

  const permiteCancelar = (horaCancela: any) => {
    let dataCancela = new Date(horaCancela);
    let dataHoje = new Date();
    // console.log(dataCancela.getTime() > dataHoje.getTime());
    return dataCancela.getTime() > dataHoje.getTime();
  }

  // FUNÇÕES DE CADA UM DOS BOTÕES

  function handleOpen(id:any) {
    setOpen(!open)
    setNf(id)
  }

  useEffect(() => {
    if (confirmacao == true) {
      setOpen(!open);
      cancelarNf(nf);
    }
  },[confirmacao, nf])

  const cancelarNf = async (idNf: any) => {
    try {
      form.idNotaFiscal = idNf
      await NotaFiscal.cancelarNf(form)
      .then((res:any) => {
        consultaNotasfiscais()
        console.log(res.data.message)
      })
    } catch (err) {
      // displayMessage(`Erro!`, text, "error")
    }
  }

  const getDetalheNf = async (idNf: any) => {
    try {
      const data = await NotaFiscal.getDetalheNf(idNf)
      for (var i = 0; i < data.length; i++) { // para pega mensagem do JSONs de detalhes de cada NFe's
        // displayMessage("Detalhes da NF", data[i].mensagem, "info")
      }
    }
    catch (err) {
      // displayMessage(`Erro!`, message, "error")
    }
    finally {
    }
  }

  const baixarNfePDF = async (data: any) => {
    try {
      console.log(data)
      const response = await NotaFiscal.baixarPDF(data, {
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/pdf",
        },
      })
      const url = URL.createObjectURL(new Blob([response], { type: "application/pdf" }))
      window.open(url)
      //window.location.href = url;
    }
    catch (err) {
      // displayMessage(`Erro!`, text, "error")
    }
  }

  return (
    <>
      <ErrorModal  isOpen={!!error} onClose={() => setError('')} error={error} />
      <SuccessModal  isOpen={!!success} onClose={() => setSuccess('')} success={success} /> 
      <div className='rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-3'>
        <h2 className='p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased'>Notas Fiscais Geradas</h2>
      </div>
      <div className="overflow-hidden bg-white/40 border border-gray-300 p-4 mt-4 rounded-xl shadow-xl">
        <div className="p-1">
          <Typography variant="h5">Baixar Notas XML por Período</Typography>
        </div>
        <hr className='mb-6 bg-gray-300 h-0.5 border-t-0'/>
        <div  className="flex my-2 ml-8 flex-wrap">
          <div className="mr-4">
            <p className="font-bold">
              Data Inicial:
            </p>
            <input
              onChange={(e) => setForm({ ...form, dataInicial: e.target?.value })}
              type="date"
              id="date"
              className="block h-9 rounded-md border-gray-400 p-4 border w-[13.5rem]"
            />
            {errorInput.dataInicial && <span className="text-red-700 text-sm">{errorInput.dataInicial}</span>}
          </div>
          <div className="xl:mx-2">
            <p className="font-bold">Data Final:</p>
            <input
              onChange={(e) => setForm({ ...form, dataFinal: e.target?.value })}
              type="date"
              id="date"
              className="block h-9 rounded-md border-gray-400 p-4 border w-[13.5rem]"
            />
            {errorInput.dataFinal && <span className="text-red-700 text-sm">{errorInput.dataFinal}</span>} 
          </div>
          {errorInput.logica && 
            <div className='ml-4 mr-1 mt-6 flex items-center'>
              <Tooltip
                placement="bottom"
                className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                content={
                  <div className="w-80">
                    <div
                      color="blue-gray"
                      className="font-normal opacity-80"
                    >
                      {errorInput.logica}
                    </div>
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
          <div className="mt-6 md:w-52 md:ml-4">
            <Button
              color="blue"
              className="px-4 h-9 sm:static overflow-hidden w-52 justify-center items-center flex"
              onClick={solicitarZipPeriodo}>
              Download XMLs em ZIP
            </Button>
          </div>
        </div>
      </div>

      <Card className='block bg-white/40 overflow-x-auto w-full shadow-xl rounded-xl mt-4 px-2 py-4'>
        <table className="mt-4 w-full bg-white/80">
          <thead className="bg-blue-gray-100">
            <tr className='border-gray-400 border'>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="w-26 p-4 text-lg font-semibold tracking-wide text-center">
                  <div
                    color="blue-gray"
                    className="leading-none opacity-70 font-bold ">
                    {head}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {itensVisiveis.map((item, index) => (
              <tr key={index} className="border-b even:bg-blue-gray-50/50 items-center justify-center">
                <td className="p-4 text-center text-sm text-gray-700 ">
                  <div color="blue-gray" className="font-normal">
                    {item.numeroNota}
                  </div>
                </td>
                <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                  <div color="blue-gray" className="font-normal">
                    {item.documentoCliente}
                  </div>
                </td>
                <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                  <div color="blue-gray" className="font-normal">
                    {item.nomeCliente}
                  </div>
                </td>
                <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                  <div color="blue-gray" className="font-normal">
                    {item.createAt}
                  </div>
                </td>
                <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                  <div color="blue-gray" className="font-normal">
                    {item.status}
                  </div>
                </td>
                <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                  <div color="blue-gray" className="font-normal">
                    {item.numeroAE}
                  </div>
                </td>
                <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                  <button
                    onClick={() => getDetalheNf(item.idNotaFiscal)}
                    className="uppercase px-4 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-semibold text-white shadow-lg shadow-[#d1fae">
                    Detalhe
                  </button>
                </td>
                <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                  {(item.status === 'CONCLUIDO' || item.status === 'CANCELADO') && (
                    <button
                      onClick={() => baixarNfePDF(item.idNotaFiscal)}
                      className="uppercase px-4 py-2 rounded-lg  bg-[#0284c7] hover:bg-[#38bdf8] font-semibold text-white shadow-lg transition ease-in-out duration-200 translate-10 ">
                      PDF
                    </button>)}
                </td>
                <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                  {(item.status !== 'REJEITADO' && item.status !== 'CANCELADO' && permiteCancelar(item.horaCancela)) && (
                    <button
                      onClick={() => handleOpen(item.idNotaFiscal)}
                      className="px-4 py-2 uppercase rounded-lg  bg-[#ab2222] hover:bg-[#e14040] font-semibold text-white shadow-lg transition ease-in-out duration-200 translate-10 ">
                      Cancelar
                    </button>)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-2 mb-2">
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
              >
                {numeroPagina}
              </IconButton>
            ))}
          </div>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-2"
            onClick={proxima}
            disabled={paginaAtual === totalPaginas}
          >
            Próxima
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      <Dialog open={open} handler={handleOpen} size={'sm'} className='p-4 absolute'>
        <h1 className="text-xl text-center items-center text-gray-800">Tem certeza que deseja cancelar está NFe?</h1>
        <div className="p-4 flex gap-4 md:grid-cols-2 justify-center items-center">
            <button
              className="text-xl mt-2 py-4 px-4 w-40 rounded-lg bg-[#374151] hover:bg-[#4b5563] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10"
              onClick={() => setConfirmacao(true)}
            >
              Sim
            </button>
            <button
              className="text-xl mt-2 py-4 px-4 w-40 rounded-lg bg-[#111827] hover:bg-[#1f2937] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10"
              onClick={() => setOpen(!open)}
            >
              Não
            </button>
        </div>
      </Dialog>
    </>
  );
}
