"use client";
import React, { Fragment, useState } from 'react';
import {
  Input,
  Card,
  Typography,  
  IconButton,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { MdDeleteForever } from "react-icons/md";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { BsSearch } from 'react-icons/bs';

const TABLE_HEAD = ["Id Serpro", "Nome", "CNPJ", "UF", "Edit"];
const TABLE_ROWS = [
  {
    Id_Serpro: "86",
    Nome: "MACHADO'S AUTOPLACAS E COMPONENTE LTDA",
    CNPJ: "11391352000131",
    UF: "PR",
  },
  {
    Id_Serpro: "123",
    Nome: "TOLEDO PLACAS LTDA",
    CNPJ: "10213175000130",
    UF: "PR",
  },
  {
    Ordem_Produção: "186",
    Nome: "AUDIPLACAS IDN. E COMÉRCIO DE PLACAS LTDA - ME",
    CNPJ: "04547646000144",
    UF: "PR",
  },
  {
    Ordem_Produção: "228",
    Nome: "POSTAL SERVICE COMERCIO DE PLACAS AUTOMOTIVAS EIRELI",
    CNPJ: "05440032000121",
    UF: "RS",
  },
  {
    Ordem_Produção: "229",
    Nome: "M. F. PLACAS LTDA",
    CNPJ: "09658955000105",
    UF: "RS",
  },
  {
    Ordem_Produção: "325",
    Nome: "PLACARAMA COMERCIO VAREJISTA DE PLACAS METALICAS EIRELI",
    CNPJ: "11163809000150",
    UF: "MS",
  },
  {
    Id_Serpro: "423",
    Nome: "PLACAS AUTOMOTIVAS CERTA LTDA - ME",
    CNPJ: "04574173000174",
    UF: "PR",
  }
];

const ITEMS_PER_PAGE = 10;

export default function CadastrarCNPJ() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [openModal, setOpenModal] = useState(false);
  const [filtrarValor, setFiltrarValor] = useState('');
  const [paginaAtual, setPaginaAtual] = useState(1);

  // Cálculos para paginação da tabela
  const totalPaginas = Math.ceil(TABLE_ROWS.length / ITEMS_PER_PAGE);
  const indiceInicial = (paginaAtual - 1) * ITEMS_PER_PAGE;
  const itensVisiveis = TABLE_ROWS.slice(
    indiceInicial,
    indiceInicial + ITEMS_PER_PAGE
  );

  // Função para ir para a página anterior
  const anterior = () => {
    setPaginaAtual((paginaAnterior) => paginaAnterior - 1);
  };

  // Função para ir para a próxima página
  const proxima = () => {
    setPaginaAtual((proximaPagina) => proximaPagina + 1);
  };

  // Função para trocar para uma página específica
  const trocarPagina = (numeroPagina: any) => {
    setPaginaAtual(numeroPagina);
  };

  const handleFilterChange = (e: any) => {
    const value = e.target.value;
    setFiltrarValor(value);
  };

  const handleClearFilter = () => {
    setFiltrarValor('');
  };

  const numerosPaginas = Array.from({ length: totalPaginas }, (_, idx) => idx + 1);

  const filteredRows = TABLE_ROWS.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(filtrarValor.toLowerCase())
    )
  );

  return (
    <>
      <div className="rounded-md bg-white/40 overflow-hidden ring-1 ring-white/60 shadow-xl mb-3">
        <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">Estampadores Cadastrados</h2>
      </div>
      <Card className="mt-4 bg-white/40 overflow-hidden border shadow-xl sm:py-4 sm:px-6 px-2">
        <div className="grid grid-cols-1">
          <div className="flex mt-2 w-80">
            <Input
              label="CNPJ : "
              className="py-2 shadow-sm sm:text-sm sm:leading-6"
            />
            <div className='relative'>
              <button
                className="absolute right-0 h-10 px-4 pt-1 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg"
              >
                <BsSearch size={16} />
              </button>
            </div>
          </div>
          <div className="md:mt-2 mt-2">
          </div>
        </div>
      </Card>
      <Card className='px-2 bg-white/40 overflow-x-auto rounded-xl shadow-xl mt-4'>
        <Typography variant="h5" color="blue-gray" className="mt-4 px-4">
            Produção
        </Typography>
        <div className='flex flex-col md:flex-row justify-between px-4'>
          <div className='mt-4'>
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
            <p className="text-sm ml-1">
              Encontre o seu cadastro na tabela
            </p>
          </div>
        </div>
        <table className="mt-4 w-full bg-white/80">
          <thead className="bg-blue-gray-100">
            <tr className='border-gray-400 border'>
              {TABLE_HEAD.map((header) => (
                <th key={header} className="w-26 p-4 text-center text-lg font-semibold tracking-wide">
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
              <tr key={index} className='border-b even:bg-blue-gray-50/50'>
                {Object.values(row).map((value, index) => (
                  <td key={index} className="text-sm text-gray-700 whitespace-nowrap text-center font-medium dark:text-white">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {value}
                    </Typography>
                  </td>
                ))}
                 <td className="p-4 text-sm text-gray-700 text-center whitespace-nowrap">
                  <button onClick={handleOpen}>
                    <Typography as="a" href="#" variant="small" color="gray" className="font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                      </svg>
                    </Typography>
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
          <Fragment>
            <Dialog
              open={open}
              handler={handleOpen}
              size={'sm'}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
            >
              <DialogHeader className='justify-center items-center'>Atualizar dados do Estampador</DialogHeader>
              <DialogBody divider>
               <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="md:mr-0 md:mt-2  xl:mr-12">
                      <Input label="ID Estampador:" 
                      className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                      />
                  </div>
                  <div className="md:mt-2 xl:ml-12">
                      <Input 
                      label="Nome:"
                      className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                      />
                  </div>
                 <div className="md:mr-0 md:mt-2  xl:mr-12">
                      <Input label="Nome Fantasia:" 
                      className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                      />
                  </div>
                  <div className="md:mt-2 xl:ml-12">
                      <Input 
                      label="CEP:"
                      className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                      />
                  </div>
                 <div className="md:mr-0 md:mt-2  xl:mr-12">
                      <Input label="Logradouro:" 
                      className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                      />
                  </div>
                  <div className="md:mt-2 xl:ml-12">
                      <Input 
                      label="Numero:"
                      className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                      />
                  </div>
                 <div className="md:mr-0 md:mt-2  xl:mr-12">
                      <Input label="Complemento:" 
                      className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                      />
                  </div>
                  <div className="md:mt-2 xl:ml-12">
                      <Input 
                      label="Bairro:"
                      className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                      />
                  </div>
                 <div className="md:mr-0 md:mt-2  xl:mr-12">
                      <Input label="Cidade:" 
                      className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                      />
                  </div>
                  <div className="md:mt-2 xl:ml-12">
                      <Input 
                      label="Estado:"
                      className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
                      />
                  </div>
               </div>
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-2"
                >
                  <span>Cancelar</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                  <span>Enviar</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </Fragment>
      </Card>
    </>
  );
}