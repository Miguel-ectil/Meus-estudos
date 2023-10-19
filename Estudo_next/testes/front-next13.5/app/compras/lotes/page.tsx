"use client";
import { Card, Input, Typography, Button, IconButton, Dialog, DialogFooter, DialogBody, DialogHeader } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { BsSearch } from "react-icons/bs";
import React, { Fragment, useState } from "react";

  const TABLE_ROWS = [
    {
      ID: "Leléo Mar",
      "Numero Serpro": "14633821000170",
      Data: "23/04/18",
      "Quantidade Blanks": "50",
      Status: "CONCLUIDO",
    },
    {
      ID: "Alexa Liras",
      "Numero Serpro": "14633821000170",
      Data: "23/04/18",
      "Quantidade Blanks": "50",
      Status: "CONCLUIDO",
    },
    {
      ID: "Alexa Liras",
      "Numero Serpro": "14633821000170",
      Data: "23/04/18",
      "Quantidade Blanks": "50",
      Status: "CONCLUIDO",
    },
    {
      ID: "Alexa Liras",
      "Numero Serpro": "14633821000170",
      Data: "23/04/18",
      "Quantidade Blanks": "50",
      Status: "CONCLUIDO",
    },
    {
      ID: "Alexa Liras",
      "Numero Serpro": "14633821000170",
      Data: "23/04/18",
      "Quantidade Blanks": "50",
      Status: "CONCLUIDO",
    },
    {
      ID: "Rafael Liras",
      "Numero Serpro": "14633821000170",
      Data: "23/04/18",
      "Quantidade Blanks": "50",
      Status: "CONCLUIDO",
    },
    {
      ID: "Rafael Liras",
      "Numero Serpro": "14633821000170",
      Data: "23/04/18",
      "Quantidade Blanks": "50",
      Status: "CONCLUIDO",
    },
  ];
  const ITEMS_PER_PAGE = 10;

export default function Lote() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const TABLE_HEAD = ["ID", "Numero Serpro", "Data", "Quantidade Blanks", "Status", ""];
  
  const [paginaAtual, setPaginaAtual] = useState(1);
  const totalPaginas = Math.ceil(TABLE_ROWS.length / ITEMS_PER_PAGE);
  const indiceInicial = (paginaAtual - 1) * ITEMS_PER_PAGE;
  const itensVisiveis = TABLE_ROWS.slice(
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


  return (
    <>
      <div>
        <div className="rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-6">
          <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">Comprar Lote</h2>
        </div>
        <Card className="bg-white/40 border p-6 rounded-xl shadow-xl mt-3 overflow-hidden">
          <h1 className="font-bold">Número Serpro</h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="flex">
              <Input label="EX: 0150F9278B0DE44E67BAE89DED40" className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-" crossOrigin={Input} />
                <div className="relative">
                  <button
                  className="absolute right-0 h-10 px-6 pt-1 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg"
                    >
                  <BsSearch size={16} />
                  </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-3">
              <div className="flex ">
                <Input
                  label="Qtd. Blanks"
                  type="number"
                  className="w-full rounded-l-md shadow-lg border-2 font-bold" 
                  crossOrigin={Input}                
                />
              </div>
              <div className="">
                <Button className="bottom-0 sm:w-auto sm:static flex" onClick={handleOpen}>SOLICITAR</Button></div>
            </div>
          </div>
        </Card>
        <Card className='bg-white/40 px-4 py-6 overflow-x-auto rounded-xl shadow-xl mt-6'>
          <table className='w-full bg-white/80'>
            <thead className="bg-gray-300 border-gray-400 border">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="text-center w-26 p-4 text-lg font-semibold tracking-wide">
                    <Typography variant="small" color="blue-gray" className="leading-none opacity-70 font-bold">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {itensVisiveis.map((item, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50 items-center justify-center">
                  <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.ID}
                    </Typography>
                  </td>
                  <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item["Numero Serpro"]}
                    </Typography>
                  </td>
                  <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.Data}
                    </Typography>
                  </td>
                  <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item["Quantidade Blanks"]}
                    </Typography>
                  </td>
                  <td className="p-4 text-center text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.Status}
                    </Typography>
                  </td>
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
          <div className="py-1 mx-4 md:mx-10 lg:mx-0 xl:mx-0">
            <div className="flex items-center justify-center gap-1">
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
            <Fragment>
              <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
                }}
                size={"sm"}
              >
                <DialogHeader className='justify-center items-center'>
                  Digite a Senha para Confirmar
                </DialogHeader>
                <DialogBody divider>
                <div className="px-4 w-28">
                  <div className="justify-center items-center">
                    <Input 
                      label="Digite a sua Senha:"
                      className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                      crossOrigin={undefined}                  
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
          </div>
        </Card>   
      </div>
    </>
  );
}

