"use client";
import { BsSearch } from "react-icons/bs";
import { Button, Card, IconButton, Input, Typography } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
// import { useBlankService } from '@/services/blanks/blanksService'

export default function ConsultaBlanksPorLote() {
  // const service = useBlankService();

  const [params, setParams] = useState<any>();
  const [tableRows, setTableRows] = useState<any[]>([]);
  const [consulta, setConsulta] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [consultaNumero, setConsultaNumero] = useState("");



  const ITEMS_PER_PAGE = 5;
  const [filtrarValor, setFiltrarValor] = useState('')
  const handleFilterChange = (e: { target: { value: any } }) => {
    const value = e.target.value
    setFiltrarValor(value)
  };

  const TABLE_HEAD = ["Serial", "Status", "Estampador"];


  // const getConsultaLote = () => {
  //   service.getBlanks(consultaNumero)
  //     .then((res) => {
  //       setIsLoading(false);
  //       setTableRows(res)
  //       // setConsulta(res);
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.error("Erro na requisição:", error);
  //     });
  // };

  const totalPaginas = Math.ceil(tableRows.length / ITEMS_PER_PAGE);
  const indiceInicial = (paginaAtual - 1) * ITEMS_PER_PAGE;
  const itensVisiveis = tableRows.slice(
    indiceInicial,
    indiceInicial + ITEMS_PER_PAGE
  );

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

  return (
    <>
      <div>
        <div className="rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-3">
          <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">Consulta de Blanks por Lote</h2>
        </div>
        <Card className="bg-white/40 border p-6 rounded-xl shadow-xl mt-4 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="flex w-80">
              <Input
                value={consultaNumero} onChange={(e) => setConsultaNumero(e.target.value)}
                label="Numero Lote:"
                className="border py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                crossOrigin={undefined} />
              <div className="relative">
                <button  className="absolute right-0 h-10 px-4 pt-1 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg"> {/*onClick={getConsultaLote}*/}
                  <BsSearch size={16} />
                </button>
              </div>
            </div>
          </div>
        </Card>
        {!visible && (
          <Card className="bg-white/40 overflow-x-auto rounded-xl mt-4 shadow-xl py-8 px-4">
            <table className="w-full bg-white/80">
              <thead className="bg-blue-gray-100">
                <tr className="border-gray-400 border">
                  {TABLE_HEAD.map((header) => (
                    <th
                      key={header}
                      className="w-26 p-4 text-lg font-semibold tracking-wide text-center"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="leading-none opacity-70 font-bold"
                      >
                        {header}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {itensVisiveis.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b even:bg-blue-gray-50/50 items-center justify-center"
                  >
                    <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                      <Typography
                        // variant="body2"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.Serial}
                      </Typography>
                    </td>
                    <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                      <Typography
                        // variant="body2"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.Status}
                      </Typography>
                    </td>
                    <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                      <Typography
                        // variant="body2"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item["QR Code"]}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center py-2 justify-center">
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center"
                onClick={anterior}
                disabled={paginaAtual === 1}
              >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Anterior
              </Button>
              <div className="flex items-center gap-1">
                {numerosPaginas.map((numeroPagina) => (
                  <IconButton
                    key={numeroPagina}
                    className="py-1 px-1"
                    onClick={() => trocarPagina(numeroPagina)}
                  >
                    {numeroPagina}
                  </IconButton>
                ))}
              </div>
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center"
                onClick={proxima}
                disabled={paginaAtual === totalPaginas}
              >
                Próxima <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        )}
      </div>
    </>
  );
}