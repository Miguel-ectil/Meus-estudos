"use client"
import React, { useState } from 'react'
import { Input, Select, Option, Card, IconButton, Button, Typography} from '@material-tailwind/react'
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { MdDeleteForever } from 'react-icons/md';

const TABLE_HEAD = ["Ordem de Produção", "Id_Estampador", "Estampador", "Qtde_Qr", "Tipo_Plca", "Cor", "Furos", "Status", "Usuario", "Edit"];
const TABLE_ROWS = [
 {
    Ordem_Produção: "DVR-OP-77",
    Id_Estampador: "2502",
    Estampador: "Victor placas",
    Qtde_Qr: "30",
    Tipo_Placa: "Carro",
    Cor: "Preta",
    Furos: "Sem furos",
    Status: "A_Produzir",
    Usuario: "Victor",
  },
  {
    Ordem_Produção: "DVR-OP-76",
    Id_Estampador: "3242",
    Estampador: "Placas Maria",
    Qtde_Qr: "50",
    Tipo_Placa: "Carro",
    Cor: "Preta",
    Furos: "4 furos",
    Status: "A_Produzir",
    Usuario: "Maria",
  },
  {
    Ordem_Produção: "DVR-OP-75",
    Id_Estampador: "86",
    Estampador: "João placas",
    Qtde_Qr: "600",
    Tipo_Placa: "Carro",
    Cor: "Preta",
    Furos: "2 Furos",
    Status: "Produzido",
    Usuario: "João",
  },
  {
    Ordem_Produção: "DVR-OP-74",
    Id_Estampador: "2648",
    Estampador: "Neide Placas",
    Qtde_Qr: "50",
    Tipo_Placa: "Carro",
    Cor: "Preta",
    Furos: "2 Furos",
    Status: "Produzido",
    Usuario: "Neide ",
  },
  {
    Ordem_Produção: "DVR-OP-73",
    Id_Estampador: "8252",
    Estampador: "Glauco Placas",
    Qtde_Qr: "450",
    Tipo_Placa: "Carro",
    Cor: "Preta",
    Furos: "Sem Furos",
    Status: "A_Produzir",
    Usuario: "Glauco",
  },
  {
    Ordem_Produção: "DVR-OP-72",
    Id_Estampador: "2714",
    Estampador: "Leo placas",
    Qtde_Qr: "250",
    Tipo_Placa: "Carro",
    Cor: "Preta",
    Furos: "2 Furos",
    Status: "Produzido",
    Usuario: "Leonardo",
  },
  {
    Ordem_Produção: "DVR-OP-71",
    Id_Estampador: "1780",
    Estampador: "Rafa Placas Automotivas",
    Qtde_Qr: "2000",
    Tipo_Placa: "Carro",
    Cor: "Preta",
    Furos: "2 Furos",
    Status: "A_Produzir",
    Usuario: "Rafael",
  }
];
const ITEMS_PER_PAGE = 10;

export default function OrdemProducao() {
  const [filtrarValor, setFiltrarValor] = useState('');
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
        <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">Ordem de Produção</h2>
      </div>
      <Card className=" bg-white/40 border shadow-xl sm:py-6 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
          <div className="md:mr-0 md:mt-2  xl:mr-12">
            <Input 
              label="Id Estampador :"
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
              crossOrigin={undefined}            
            />
          </div>
          <div className="md:mt-2 xl:ml-12">
            <Input 
              label="CNPJ :"
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
              crossOrigin={undefined}            
            />
          </div>

          <div className="md:mr-0 md:mt-2  xl:mr-12">
            <Input 
              label="Nome Fantasia :"
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
              crossOrigin={undefined}            
            />
          </div>
          <div className="md:mt-2 xl:ml-12">
            <Input 
              label="Quantidade QR :"
              type='number'
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
              crossOrigin={undefined}            
            />
          </div>

          <div className="md:mr-0 md:mt-2  xl:mr-12">
            <Select label="Tipo Placa:" className=" rounded-md border text-gray-400">
              {/*<Option className="md:block">Selecione</Option>  hidden */}
              <Option className="md:block">Carro</Option>
              <Option className="md:block">Moto</Option>
              <Option className="md:block">Mini 11</Option>
              <Option className="md:block">Mini 13</Option>
            </Select>
            <svg className="pointer-events-none absolute text-gray-400" fill="currentColor" aria-hidden="true">
            </svg>
          </div>
          <div className="md:mt-2 xl:ml-12">
            <Select label="Cor:" className="px-20 rounded-md border text-gray-400">
              <Option className="md:block">Padrão</Option> {/* hidden */}
              <Option className="md:block">Preta</Option>
            </Select>
            <svg className="pointer-events-none absolute text-gray-400" fill="currentColor" aria-hidden="true">
            </svg>
          </div>

          <div className="md:mr-0 md:mt-2  xl:mr-12">
            <Select label="Furos:" className="px-20 rounded-md border text-gray-400">
              <Option className="md:block">Sem Furos</Option> {/* hidden */}
              <Option className="md:block">2 Furos</Option>
              <Option className="md:block">4 Furos</Option>
            </Select>
            <svg className="pointer-events-none absolute text-gray-400" fill="currentColor" aria-hidden="true">
            </svg>
          </div>
          <div className="md:mt-2 xl:ml-12">
            <button className="px-4 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white shadow-xl" >
              Cadastrar Ordem
            </button>
          </div> 
        </div>
      </Card> 
      
      <Card className='bg-white/40 overflow-x-auto rounded-xl shadow-xl mt-6 sm:px-4'>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Ordens de serviços cadastrados no sistema
          </Typography>
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
                <MdDeleteForever size={24}/>
              </button>
            </div>
          </div>
            <p className="text-sm">
              Pesquise por: OP, Id, Nome, Usuario, Tipo ou Situação.
            </p>
          </div>
        </div>
        <table className="mt-4 w-full bg-white/80">
          <thead className="bg-blue-gray-100">
            <tr className="border-gray-400 border">
              {TABLE_HEAD.map((head) => (
                <th 
                  key={head} 
                  className="w-26 p-4 text lg font-semibold tracking-wide text-center">
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
                <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                  <Typography as="a" href="#" variant="small" color="gray" className="font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
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