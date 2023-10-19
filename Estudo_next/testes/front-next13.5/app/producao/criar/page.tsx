"use client"
import React, { useState } from 'react'
import { Input, Select, Option, Card, IconButton, Button, Typography} from '@material-tailwind/react'
import { MdDeleteForever } from "react-icons/md"
import { TiDeleteOutline } from "react-icons/ti"
import { FaBoxOpen } from "react-icons/fa"
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const TABLE_HEAD = ["Nº", "Serial", "Status", "", ""];
const TABLE_ROWS = [
  {
    Nº: '1',
    Serial: "14633821000176",
    Status: "TRANSPORTE",
  },
  {
    Nº: "2",
    Serial: "14633821000175",
    Status: "CONCLUIDO",
  },
  {
    Nº: "3",
    Serial: "14633821000174",
    Status: "CONCLUIDO",
  },
  {
    Nº: "4",
    Serial: "14633821000173",
    Status: "CANCELADO", 
  },
  {
    Nº: "5",
    Serial: "14633821000172",
    Status: "CONCLUIDO",
  },
  {
    Nº: "6",
    Serial: "14633821000171",
    Status: "CONCLUIDO",
  }
];

const ITEMS_PER_PAGE = 10;

export default function CriarCaixaEstoque() {
  const [idLote, setIdLote] = useState<any>()
  const [idEstampador, setIdEstampador] = useState<any>()
  const [seriasLote, setSeriasLote] = useState<any>()

  const newLocal = false
  const [openModal, setOpenModal] = useState(newLocal)
  const [filtrarValor, setFiltrarValor] = useState('')
  // Paginação da tabela
  const [paginaAtual, setPaginaAtual] = useState(1)
  const totalPaginas = Math.ceil(TABLE_ROWS.length / ITEMS_PER_PAGE)
  const indiceInicial = (paginaAtual - 1) * ITEMS_PER_PAGE

  // Filtro de pesquisa da tabela
  const handleFilterChange = (e: { target: { value: any } }) => {
    const value = e.target.value
    setFiltrarValor(value)
  };

  const handleClearFilter = () => {
    setFiltrarValor('')
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
      <div className="rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-4">
        <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">Criar Lote</h2>
      </div>
      <Card className="bg-white/40 border shadow-xl sm:flex sm:space-x-6 rounded-lg px-4 relative py-4 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="md:mr-0 md:mt-2 xl:mr-12">
            <Input
              label="ID Lote:"
              type="text"
              value={idLote}
              onChange={(e) => setIdLote(e.target.value)}
              name="idLote"
              autoComplete="organization"
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
            />
            <svg className="pointer-events-none absolute text-gray-400" fill="currentColor" aria-hidden="true">
            </svg>
            

            <div className='mt-2'>
              <Input
                label="ID Estampador"
                type="text"
                value={idEstampador}
                onChange={(e) => setIdEstampador(e.target.value)}
                className="py-4 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
              />
            </div>
            <div className='mt-2'>
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
          </div>
          <div className="md:ml- xl:ml-64 px-4">
            {idLote && idEstampador && (
              <button className="px-4  rounded-lg bg-[#7f1d1d] hover:bg-[#991b1b] font-bold text-white shadow-xl w-44 text-sm mt-2 flex">
                Enviar Para Estampador
              </button>
            )}
            {idLote && (
              <button className="xl:mt-2 md:mt-2 lg:mt-2 px-4 py-2 rounded-lg bg-[#0284c7] hover:bg-[#0ea5e9] font-bold text-white shadow-xl w-40 mt-2">
                Atualizar Lote
              </button>
            )}
            {!idLote && (
              <button className=" px-4 py-2 rounded-lg bg-[#0284c7] hover:bg-[#0ea5e9] font-bold text-white  shadow-[#bae6fd] transition ease-in-out duration-200 translate-10 block w-40 mt-2">
                Criar Lote
              </button>
            )}
            
            <a href="/producao/consultar">
              <button className="px-4 py-2 rounded-lg bg-[#7f1d1d] hover:bg-[#991b1b] font-bold text-white shadow-[#fecaca] transition ease-in-out duration-200 translate-10 block w-40 mt-2">
                Voltar
              </button>
            </a>
          </div>
        </div>
      </Card>
      {idLote && (
        <Card className="mt-4 overflow-hidden bg-white/40 border shadow-xl sm:py-4 sm:px-20 py-3 px-2">
          <button className="px-6 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white shadow-xl block w-full" onClick={() => setOpenModal(true)}>
            Inserir Blanks no Lote
          </button>
        </Card>
      )}

      <Card className='block bg-white/40 overflow-x-auto rounded-xl mb-6 shadow-xl mt-6 px-6 py-4'>
        <div className="flex flex-col md:flex-row justify-between">
            <Typography className="mt-2" variant="h5" color="blue-gray">
                Blanks no Lote
            </Typography>
            <div className='mt-2'>
              <div className="flex w-96">
                <Input
                  label="Pesquisar..."
                  className="rounded-r-lg"
                  onChange={handleFilterChange}
                  value={filtrarValor}
                />
                <div className="relative">
                  <button className="absolute right-0 h-10 px-6 pt-1 text-xs" onClick={handleClearFilter}>
                    <MdDeleteForever size={24} />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm">
                  Pesquise o serial .
                  </p>
              </div>
            </div>
          </div>
          <table className="w-full bg-white/80 mt-4">
            <thead className="bg-blue-gray-100">
              <tr className="border-gray-400 border">
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="w-26 p-4 text lg font-semibold tracking-wide text-center">
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
                    <td key={index} className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {value}
                      </Typography>
                    </td>
                  ))}
                  <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                    <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                      <TiDeleteOutline size={26}/>
                    </Typography>
                  </td>    
                  <td className="p-4 text-center text-sm text-red-900 whitespace-nowrap">
                    <Typography as="a" href="#" variant="small" color="#991b1b" className="font-medium">
                    <MdDeleteForever size={26}/>
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
      {openModal && (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity">
          </div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-7 text-blue-600" fill="none" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <FaBoxOpen size={26}/>
                      </svg>
                    </div>
                    <div className=" text-center lg:ml-4 lg:mt-2 sm:text-left">
                      <h3 
                      className="text-base font-semibold leading-6 text-gray-900" 
                      id="modal-title"
                      >
                        Novo Lote
                      </h3>
                      {/* <div className="mt-2">
                      <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                    </div> */}
                    </div>
                  </div>
                  <hr className="mt-1 mb-4"/>
                  <div>
                    <Input 
                      label='Inserir Blanks no lote' 
                      value={seriasLote} 
                      onChange={(e) => setSeriasLote(e.target.value)}
                      type='text' 
                      className="shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3  " />
                  </div>
                  {seriasLote && (
                    <button className="mt-3 px-6 py-2 rounded-lg bg-[#047857] hover:bg-[#059669] font-bold text-white shadow-xl shadow-[#d1fae5] transition ease-in-out duration-200 translate-10 block w-full">
                      Salvar Blanks no Lote
                    </button>
                  )}
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  {!seriasLote && (
                    <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-100 sm:mt-0 sm:w-auto"  onClick={() => setOpenModal(false)}>Cancelar</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}