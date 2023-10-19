"use client"
import { Button, Card, IconButton, Typography } from "@material-tailwind/react"
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useLotesService } from "../../../src/services/lotes/lotesService";

  const ITEMS_PER_PAGE = 10; 

export default function ReceberLote() {
  const service = useLotesService()
  const [todosDados, setTodosDados] = useState<any[]>([]);
  const [rows, setRows] = useState<any>(0);
  const TABLE_HEAD = ["Lotes", "Tipo Placa", "Data de envio"];
  const [active, setActive] = React.useState(1);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const totalPaginas = Math.ceil(todosDados.length / ITEMS_PER_PAGE);
  const indiceInicial = (paginaAtual - 1) * ITEMS_PER_PAGE;
  const itensVisiveis = todosDados.slice(
    indiceInicial,
    indiceInicial + ITEMS_PER_PAGE
  );
 
  const anterior = () => {
      setPaginaAtual((paginaAnterior) => paginaAnterior - 1);
    };

    const proxima = () => {
      setPaginaAtual((proximaPagina) => proximaPagina + 1);
    };

    const trocarPagina = (numeroPagina: any ) => {
      setPaginaAtual(numeroPagina);
    };

  const numerosPaginas = Array.from({ length: totalPaginas }, (_, idx) => idx + 1);

    useEffect(() => {
      consultaLotesRecebidos()
    }, [])

    const consultaLotesRecebidos = () => {
        service.getLotesSaidaEstampador()
          .then((response: any) => {
            setTodosDados(response.data);
            // console.log(response.data);
        })
        .catch((error: any) => {
          console.log(error, "Não é possivel consultar Lote")  
        })
      }
  return (
      <>
        <div className="rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-3">
          <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">Consulta Lotes Recebidos</h2>
        </div>
        <Card className="px-2 py-4 block bg-white/40 overflow-x-auto w-full rounded-lg shadow-xl mb-6 mt-2">
          <table className="mt-4 w-full bg-white/80">
            <thead className="bg-blue-gray-100">
              <tr className='border-gray-400 border'>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="p-4 text-sm font-semibold tracking-wide text-center">
                    <Typography variant="small" color="blue-gray" className="leading-none opacity-70 font-bold">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {itensVisiveis.map((item, index) => (
                <tr key={index} className="border-b even:bg-blue-gray-50/50 items-center justify-center">
                  <td className="text-center p-4 text-sm text-gray-700 ">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.Lotes}
                    </Typography>
                    
                  </td>
                  <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.TipoPlaca}
                    </Typography>
                  </td>
                  <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.DataEnvio}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-center gap-4 mt-3.5 ">
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
      </>
    );
}
