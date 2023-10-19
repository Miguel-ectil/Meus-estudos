"use client"
import React, { useState } from 'react'
import { Input, Card, IconButton, Button, Typography} from '@material-tailwind/react'
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { BsSearch } from 'react-icons/bs'

const TABLE_HEAD = ["Id","Estampador", "Tipo Placa", "Quantidade", "Status", "", "", "", ""];
const TABLE_ROWS = [
 {
    Id: "2023051083",
    Estampador: "2502",
    TipoPlaca: "Carro",
    Quantidade: "50",
    Status: "TRANSPORTE",
      
  },
  {
    Id: "2023051073",
    Estampador: "0214",
    TipoPlaca: "Carro",
    Quantidade: "30",
    Status: "TRANSPORTE",

  },
  {
    Id: "2023051063",
    Estampador: "9142",
    TipoPlaca: "Moto",
    Quantidade: "20",
    Status: "ESTOQUE",

  },
  {
    Id: "2023051053",
    Estampador: "6224",
    TipoPlaca: "Carro",
    Quantidade: "50",
    Status: "TRANSPORTE", 

  },
  {
    Id: "2023051043",
    Estampador: "8771",
    TipoPlaca: "Mini Placa",
    Quantidade: "50",
    Status: "ESTOQUE",
  },
  {
    Id: "2023051032",
    Estampador: "7523",
    TipoPlaca: "Moto",
    Quantidade: "50",
    Status: "ESTOQUE",
  },
  {
    Id: "2023051042",
    Estampador: "7523",
    TipoPlaca: "Mini Placa",
    Quantidade: "50",
    Status: "TRANSPORTE",
  }
];

const ITEMS_PER_PAGE = 10;

export default function ConsultarCaixaEstoque() {
  const [filtrarValor, setFiltrarValor] = useState('');

  const [paginaAtual, setPaginaAtual] = useState(1)
  const totalPaginas = Math.ceil(TABLE_ROWS.length / ITEMS_PER_PAGE)
  const indiceInicial = (paginaAtual - 1) * ITEMS_PER_PAGE

  // Filtro de pesquisa da tabela
  const handleFilterChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setFiltrarValor(value);
  };

  const filteredRows = TABLE_ROWS.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(filtrarValor.toLowerCase())
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


  return(
    <>
    <div className="rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-3">
      <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">Consultar Lote</h2>
    </div>
    <Card className="bg-white/40 overflow-hidden border shadow-xl sm:py-6 sm:px-6">
      <div className="flex justify-between md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
        <div className="flex mt-2 w-80">
          <Input 
            label="Id Lote : "
            className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
            value={filtrarValor}
            onChange={handleFilterChange} 
            crossOrigin={undefined}          
          />
            <div className='relative'>
              <Button
                className="bg-blue-600 h-10 rounded-l-none px-6 py-3 text-xs text-white shadow-lg hover:bg-[#0ea5e9] absolute right-0"
                >
              <BsSearch size={16} />
              </Button>
            </div>
        </div>
        <div className="md:mt-2 mt-2 px-2">
          <a href='/producao/criar'>
            <button className="px-4 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white =" >
              Criar Lote
            </button>
          </a>
        </div>
      </div>
    </Card>
    <Card className='bg-white/40 px-4 py-6 overflow-x-auto rounded-xl shadow-xl mt-6'>
        <table className="w-full bg-white/80">
          <thead className="bg-gray-300 border-gray-400 border">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="text-center w-26 p-4 text-lg font-semibold tracking-wide">
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
          {filteredRows.slice(indiceInicial, indiceInicial + ITEMS_PER_PAGE).map((row, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50 items-center justify-center">
                {Object.values(row).map((value, index) => (
                  <td key={index} className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {value}
                    </Typography>
                  </td>
                ))}
                <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                  <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                  <BsSearch size={18} />
                  </Typography>
                </td>
                <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                  <Typography as="a" href="/producao/criar" variant="small" color="gray" className="font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  </Typography>
                </td>
                <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                    <button>
                      <Typography as="a" href="#" variant="small" color="red" className="font-medium text-red-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
                      </Typography>
                    </button>
                </td>
                <td className="text-center p-4 text-sm text-blue-900 whitespace-nowrap">
                  <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                  </svg>
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center py-3">
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
    </>
  )
}
