"use client";

import React, { useState, useEffect } from "react";
import { Typography, Button, Card, IconButton, Dialog } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useCupomFiscalService } from '../../../src/services/cupomFiscal/cupomFiscalService';
// import JSZip from 'jszip';
// import { saveAs } from 'file-saver';
import ErrorModal from "../../../src/components/message/ErrorModal";
import SuccessModal from "../../../src/components/message/SuccessModal";

export default function Cupom_Fiscal() {
    const TABLE_HEAD = ["NFCe", "Documento", "Data", "Destinatario", "Status", "AE", "", "", ""];
    //const serviceCuponsFiscal = useCupomFiscalService();
    const CupomFiscal = useCupomFiscalService();
    const [cuponsFiscal, setCuponsFiscal] = useState<any[]>([]);
    const [open, setOpen] = useState(false);
    const [confirmacao, setConfirmacao] = useState(false);
    const [cf, setCf] = useState()
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const consultaCuponsFiscais = () => {
            CupomFiscal.getNfcsEmitidas()
            .then((response: any) => {
                setCuponsFiscal(response)
            })
            .catch((error: any) => {
                console.error(error, "Ocorreu um erro:");
            })
    };
    const [timer, setTimer] = useState<any>(null);
    useEffect(() => {
        consultaCuponsFiscais();
        const interval = setInterval(() => consultaCuponsFiscais(),    60000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const ITEMS_PER_PAGE = 20;
    const [paginaAtual, setPaginaAtual] = useState(1);
    const totalPaginas = Math.ceil(cuponsFiscal.length / ITEMS_PER_PAGE);
    const indiceInicial = (paginaAtual - 1) * ITEMS_PER_PAGE;
    const itensVisiveis = cuponsFiscal.slice(indiceInicial, indiceInicial + ITEMS_PER_PAGE);

    // FUNÇÕES DE CADA UM DOS BOTÕES 
    const [form, setForm] = useState<any>({ dataInicial: null, dataFinal: null });
    const solicitarZipPeriodo = async () => {
        try {
            const json = await CupomFiscal.solicitarZipPeriodo(form, {responseType: "arraybuffer",
            })
            const url = window.URL.createObjectURL(new Blob([json]))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", "Cupons Fiscais XML.zip")
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        } catch (err) {
            // return displayMessage(`Erro!`, message, "error")
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
        console.log(dataCancela.getTime() > dataHoje.getTime());
        return dataCancela.getTime() > dataHoje.getTime();
    };

    function handleOpen(id:any) {
        setOpen(!open)
        setCf(id)
      }

    useEffect(() => {
        if (confirmacao == true) {
          setOpen(!open);
          cancelarCf(cf);
        }
    },[confirmacao, cf])

    const cancelarCf = async (idCf: any) => {
        try {
            form.idCupomFiscal = idCf
            await CupomFiscal.cancelarCf(form)
            .then((res:any) => {
                consultaCuponsFiscais();
                console.log(res.data.message)
            })
        } catch (err) {
            console.error(error)
            setError("Não foi possivel, cancelar o Cupom Fiscal")
        }
    };

    const getDetalheCf = async (idCf: any) => {
        try {
            const data = await CupomFiscal.getDetalheCf(idCf);
            for (var i = 0; i < data.length; i++) {
                setSuccess("Sucesso!")
                // para pegar mensagem do JSONs de detalhes de cada NFCe's
                // displayMessage("Detalhes do CF", data[i].mensagem, "info")
            }
        } catch (err) {
            // return displayMessage(`Erro!`, message, "error")
        }
        finally {
        }
    }

    const getCFPdf = async (data: any) => {
        try {
            console.log(data)
            const response = await CupomFiscal.getCFPdf(data, {
                responseType: "arraybuffer",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/pdf",
                },
            });
            const url = URL.createObjectURL(new Blob([response], { type: "application/pdf" }));
            window.open(url);
        }
        catch (err) {
            // return displayMessage(`Erro!`, message, "error")
        }
    };

    return (
        <>
            <ErrorModal isOpen={!!error} onClose={() => setError('')} error={error} />
            <SuccessModal isOpen={!!success} onClose={() => setSuccess('')} success={success} />
            <div className='rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-3'>
                <h2 className='p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased'>Cupons Fiscais Gerados</h2>
            </div>
            <div className="overflow-hidden bg-white/40 border border-gray-300 p-4 mt-4 rounded-xl shadow-xl">
                <div className="mb-2">
                    <Typography variant="h5">Baixar Cupons XML por Periodo</Typography>
                </div>
                <hr className='mb-6 bg-gray-300 h-0.5 border-t-0' />
                <div className="flex my-2 ml-8 flex-wrap">
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
                    </div>
                    <div className="xl:mx-2">
                        <p className="font-bold">Data Final:</p>
                        <input
                            onChange={(e) => setForm({ ...form, dataFinal: e.target?.value })}
                            type="date"
                            id="date"
                            className="block h-9 rounded-md border-gray-400 p-4 border w-[13.5rem]"
                        />
                    </div>
                    <div className="sm:mt-6 md:w-52 md:ml-4">
                        <Button
                          color="blue"
                            className="px-4 h-9 sm:static overflow-hidden w-52 justify-center items-center flex"
                            onClick={solicitarZipPeriodo}>
                            Download XMLs em ZIP
                        </Button>
                    </div>
                </div>
            </div>
            <Card className='px-2 block bg-white/40 overflow-x-auto w-full shadow-xl rounded-xl mb-6 mt-4'>
                <table className="mt-4 w-full bg-white/80">
                    <thead className="bg-blue-gray-100">
                        <tr className='border-gray-400 border'>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="w-26 p-4 text-lg font-semibold tracking-wide text-center">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="leading-none opacity-70 font-bold"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {itensVisiveis.map((item, index) => (
                            <tr key={index} className="border-b even:bg-blue-gray-50/50">
                                <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {item.numeroNota}
                                    </Typography>
                                </td>
                                <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {item.documentoCliente}
                                    </Typography>
                                </td>
                                <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {item.nomeCliente}
                                    </Typography>
                                </td>
                                <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {item.createAt}
                                    </Typography>
                                </td>
                                <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {item.status}
                                    </Typography>
                                </td>
                                <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {item.numeroAE}
                                    </Typography>
                                </td>
                                <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                                    <button
                                        onClick={() => getDetalheCf(item.idNotaFiscal)}
                                        className="uppercase px-4 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-semibold text-white shadow-xl">
                                        Detalhe
                                    </button>
                                </td>
                                <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                                    {(item.status === 'CONCLUIDO' || item.status === 'CANCELADO') && (
                                        <button
                                            onClick={() => getCFPdf(item.idNotaFiscal)}
                                            className="uppercase px-4 py-2 rounded-lg bg-[#0284c7] hover:bg-[#38bdf8] font-semibold text-white shadow-xl">
                                            PDF
                                        </button>
                                    )}
                                </td>
                                <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                                    {(item.status !== 'REJEITADO' && item.status !== 'CANCELADO' && permiteCancelar(item.horaCancela)) && (
                                        <button
                                        onClick={() => handleOpen(item.idNotaFiscal)}
                                        className="px-4 py-2 uppercase rounded-lg  bg-[#ab2222] hover:bg-[#e14040] font-semibold text-white shadow-xl  transition ease-in-out duration-200 translate-10 ">
                                        Cancelar
                                        </button>
                                    )}
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
                        Próxima <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
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