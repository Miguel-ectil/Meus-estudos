"use client"
import React, { useState } from 'react'
import { Input, Card, IconButton, Button, Typography } from '@material-tailwind/react'
import { MdDeleteForever } from "react-icons/md"
import { HiOutlineRectangleStack } from "react-icons/hi2"
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';

const TABLE_HEAD = ["Ordem de Produção", "Id Estampador", "Estampador", "Qtde Produzidas", "Qtde Restante", "Qtde Lote", "Tipo_Plca", "Cor", "Furos", "Status", "Gerar_Pedido", ""];
const TABLE_ROWS = [
  {
    Ordem_Produção: "DVR-OP-77",
    Id_Estampador: "2502",
    Estampador: "Victor placas",
    Qtde_Produzidas: "51",
    Qtde_Restante: "148",
    Qtde_Lote: "200",
    Tipo_Placa: "Carro",
    Cor: "Preta",
    Furos: "Sem furos",
    Status: "A_Produzir",
    Gerar_Pedido: "Victor",
  },
  {
    Ordem_Produção: "DVR-OP-76",
    Id_Estampador: "3242",
    Estampador: "Placas Maria",
    Qtde_Produzidas: "320",
    Qtde_Restante: "70",
    Qtde_Lote: "250",
    Tipo_Placa: "Carro",
    Cor: "Preta",
    Furos: "4 furos",
    Status: "A_Produzir",
    Gerar_Pedido: "Maria",
  },
  {
    Ordem_Produção: "DVR-OP-75",
    Id_Estampador: "86",
    Estampador: "João placas",
    Qtde_Produzidas: "90",
    Qtde_Restante: "80",
    Qtde_Lote: "40",
    Tipo_Placa: "Carro",
    Cor: "Preta",
    Furos: "2 Furos",
    Status: "Produzido",
    Gerar_Pedido: "João",
  },
  {
    Ordem_Produção: "DVR-OP-74",
    Id_Estampador: "2648",
    Estampador: "Neide Placas",
    Qtde_Produzidas: "30",
    Qtde_Restante: "5",
    Qtde_Lote: "10",
    Tipo_Placa: "Carro",
    Cor: "Preta",
    Furos: "2 Furos",
    Status: "Produzido",
    Gerar_Pedido: "Neide ",
  },
  {
    Ordem_Produção: "DVR-OP-73",
    Id_Estampador: "8252",
    Estampador: "Glauco Placas",
    Qtde_Produzidas: "130",
    Qtde_Restante: "300",
    Qtde_Lote: "120",
    Tipo_Placa: "Carro",
    Cor: "Preta",
    Furos: "Sem Furos",
    Status: "A_Produzir",
    Gerar_Pedido: "Glauco",
  },
  {
    Ordem_Produção: "DVR-OP-72",
    Id_Estampador: "2714",
    Estampador: "Leo placas",
    Qtde_Produzidas: "360",
    Qtde_Restante: "200",
    Qtde_Lote: "60",
    Tipo_Placa: "Carro",
    Cor: "Preta",
    Furos: "2 Furos",
    Status: "Produzido",
    Gerar_Pedido: "Leonardo",
  },
  {
    Ordem_Produção: "DVR-OP-71",
    Id_Estampador: "1780",
    Estampador: "Rafa Placas",
    Qtde_Produzidas: "160",
    Qtde_Restante: "100",
    Qtde_Lote: "120",
    Tipo_Placa: "Carro",
    Cor: "Preta",
    Furos: "2 Furos",
    Status: "A_Produzir",
    Gerar_Pedido: "Rafael",
  }
];

const TABLE_HEADER = ["Ordem de Serviço", "Id Estampador", "Status"];
const TABLE_ROWS_ORDEM_SERVIÇO = [
  {
    Ordem_Serviço: "DVR-OP-6",
    Id_Estampador: "86",
    Status: "Produzido",
  },
  {
    Ordem_Produção: "DVR-OP-24",
    Id_Estampador: "123",
    Status: "Produzido",
  },
  {
    Ordem_Produção: "DVR-OP-25",
    Id_Estampador: "123",
    Status: "Produzido",
  },
  {
    Ordem_Produção: "DVR-OP-34",
    Id_Estampador: "2502",
    Status: "A_Produzir",
  },
];
const ITEMS_PER_PAGE = 10;

export default function PedidoDeProducao() {
    // Filtro de pesquisa da tabela
  const [lotesGerados, setLotesGerados] = useState(false)
  const [openModalGerar, setOpenModalGerar] = useState(false)
  const [qtAProduzir, setQtAProduzir] = useState<any>(); 

  // Filtro de pesquisa da tabela
  const [filtrarValor, setFiltrarValor] = useState('');
  const [filtrarValor1, setFiltrarValor1] = useState('');

  // Paginação da tabela
  const [paginaAtual, setPaginaAtual] = useState(1)
  const totalPaginas = Math.ceil(TABLE_ROWS.length / ITEMS_PER_PAGE)
  const indiceInicial = (paginaAtual - 1) * ITEMS_PER_PAGE

  // Filtro de pesquisa da tabela
  const handleFilterChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setFiltrarValor(value);
  };

  const handleClearFilter = () => {
    setFiltrarValor('');
  };

  const filteredRows = TABLE_ROWS.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(filtrarValor.toLowerCase())
    )
  );

    // Filtro de pesquisa da tabela
    const handleFilterChange1 = (e: { target: { value: any } }) => {
      const value = e.target.value;
      setFiltrarValor1(value);
    };
  
    const handleClearFilter1 = () => {
      setFiltrarValor1('');
    };
  
    const filteredRows1 = TABLE_ROWS_ORDEM_SERVIÇO.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(filtrarValor1.toLowerCase())
      )
    );

  // Paginação da tabela
  const anterior = () => {
    setPaginaAtual((paginaAnterior) => paginaAnterior - 1)
  };

  const proxima = () => {
    setPaginaAtual((proximaPagina) => proximaPagina + 1)
  };

  const trocarPagina = (numeroPagina: any ) => {
    setPaginaAtual(numeroPagina)
  };

  const numerosPaginas = Array.from({ length: totalPaginas }, (_, idx) => idx + 1)

  return (
    <>
      <div className="rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-3">
        <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">Pedido de Produção</h2>
      </div>
      {!lotesGerados && (
      <Card className="mt-2 overflow-x-hidden bg-white/40 border shadow-xl sm:py-4 sm:px-20 py-3 px-2">
          <button 
            className="px-4 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white shadow-xl w-full"
            onClick={() => setLotesGerados(true)}
          >
            Ver Lotes Gerados
          </button>
        </Card>
      )}
      {lotesGerados && (
        <Card className='p-2 bg-white/40 transi overflow-x-auto rounded-xl shadow-xl mt-2 sm:px-6 px-2'>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Typography variant="h5" color="blue-gray">
              Lotes Gerados
            </Typography>
            <div className="w-full md:w-52">
              <button className="mt-2 px-2 py-2 rounded-lg bg-[#0284c7] hover:bg-[#0ea5e9] font-bold text-white shadow-xl  w-full" onClick={() => setLotesGerados(false)}>
                Ocultar Lotes Gerados
              </button>
            </div> 
          </div>
          <div className="flex mt-2">
            <Input
              label="Pesquisar..."
              className="rounded-r-lg"
              onChange={handleFilterChange1}
              value={filtrarValor1} 
              crossOrigin={undefined}            
            />
            <div className="relative">
              <button className="absolute right-0 h-10 px-6 pt-1 text-xs" onClick={handleClearFilter1}>
                <MdDeleteForever size={24} />
              </button>
            </div>
          </div>
          <div>
            <p className="text-sm">
              Pesquise por: OS, Id ou Status.
            </p>
          </div>
          <table className="mt-4 mb-2 w-full bg-white/80">
            <thead className="bg-blue-gray-100">
              <tr className="border-gray-400 border">
                {TABLE_HEADER.map((header) => (
                  <th key={header} className="w-26 p-4 text-lg font-semibold tracking-wide text-center">
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
              {filteredRows1.map((row, index) => (
                <tr 
                  key={index}
                  className="border-b even:bg-blue-gray-50/50 items-center justify-center"
                >
                  {Object.values(row).map((value, index) => (
                    <td key={index} className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {value}
                      </Typography>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
      <Card className='bg-white/40 overflow-x-auto rounded-xl shadow-xl mt-6 sm:px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='mt-4'>
          <div className="flex w-96">
            <Input
              label="Pesquisar..."
              className="rounded-r-lg"
              onChange={handleFilterChange}
              value={filtrarValor} 
              crossOrigin={undefined}            
            />
            <div className="relative">
              <button className="absolute right-0 h-10 px-6 pt-1 text-xs" onClick={handleClearFilter}>
                <MdDeleteForever size={24} />
              </button>
            </div>
          </div>
            <p className="text-sm">
              Pesquise por: OP, Id, Estampador, Status, Tipo etc...
            </p>
          </div>
        </div>
        <table className="mt-4 w-full bg-white/80">
          <thead className="bg-blue-gray-100">
            <tr className="border-gray-400 border">
              {TABLE_HEAD.map((header) => (
                <th key={header} className="w-26 p-4 text-lg font-semibold tracking-wide text-center">
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
            {filteredRows.slice(indiceInicial, indiceInicial + ITEMS_PER_PAGE).map((row, index) => (
              <tr 
                key={index}
                className="border-b even:bg-blue-gray-50/50 items-center justify-center"
              >
                {Object.values(row).map((value, index) => (
                  <td key={index} className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {value}
                    </Typography>
                  </td>
                ))}
                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                  <button 
                    className="
                    px-4 py-2 rounded-lg bg-[#0284c7] hover:bg-[#0ea5e9] font-bold text-white shadow-xl shadow-[#bae6fd] transition ease-in-out duration-200 translate-10" 
                    onClick={() => setOpenModalGerar(true)}
                  >
                    Gerar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center py-2 justify-center">
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
                className='py-1 px-1 '
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
            Próxima
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      </Card>
      {openModalGerar && (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity">
          </div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-7 text-blue-600" fill="none" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <HiOutlineRectangleStack size={26}/>
                      </svg>
                    </div>
                    <div className=" text-center lg:ml-4 lg:mt-2 sm:text-left">
                      <h3 
                      className="text-base font-semibold leading-6 text-gray-900" 
                      id="modal-title"
                      >
                        Carro / Moto
                      </h3>
                    </div>
                  </div>
                  <div className='flex mb-4 mt-4 px-14'>
                    <Image src="/placa-c.png" alt="" width={'900'} height={'0'} />
                  </div>
                  </div>
                  <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-20 py-3 sm:flex-row-reverse sm:px-6">
                    <div className="mt-3">
                      <Input 
                        label='Quantidade a produzir :'
                        type='number'
                        value={qtAProduzir}
                        onChange={(e) => setQtAProduzir(e.target.value)}
                        className="shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                        crossOrigin={undefined}                      
                      />
                    </div>
                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button 
                          className="
                          px-4 py-2 rounded-lg bg-[#0284c7] hover:bg-[#0ea5e9] font-bold text-white shadow-xl shadow-[#bae6fd] transition ease-in-out duration-200 translate-10"
                          hidden={!qtAProduzir} 
                        >
                          Confirmar
                        </button>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button 
                            type="button" 
                            className="inline-flex px-4 w-full justify-center rounded-md bg-white py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-100 sm:mt-0 sm:w-auto"  
                            onClick={() => setOpenModalGerar(false)}
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
