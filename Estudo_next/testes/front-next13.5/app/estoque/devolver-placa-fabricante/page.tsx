"use client"

import { Button, Card, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton, Input, Typography } from "@material-tailwind/react"
import { BsSearch } from "react-icons/bs";
import React, { Fragment, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, BellIcon } from "@heroicons/react/24/outline";
import { useEstampagemService } from "../../../src/services/estampagem/estampagemService";
import { useBlankService } from "../../../src/services/blanks/blanksService";
import { useLotesService } from "../../../src/services";
import ErrorModal from '../../../src/components/message/ErrorModal';
import SuccessModal from '../../../src/components/message/SuccessModal';


const ITEMS_PER_PAGE = 10;

export default function ReceberLote() {
  const serviceConsultaBlank = useBlankService()
  const serviceConsultaLote = useLotesService()
  const [hash, setHash] = useState<any>()
  const [serialHash, setSerialHash] = useState<any>()
  const [open, setOpen] = useState(false);
  const [mostrarTabela, setMostrarTabela] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [serial, setSerial] = useState<any>()
  const [idEstampador, setIdEstampador] = useState<any>()
  const [getLoteSaida, setGetLoteSaida] = useState<any>()
  const [lotesSaida, setLotesSaida] = useState<any[]>([]);
  const [blanksLoteSaida, setBlanksLoteSaida] = useState<any>();
  const TABLE_HEAD = ["Serial", "Autorização", "Status"];
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const [paginaAtual, setPaginaAtual] = useState(1);
  const totalPaginas = lotesSaida ? Math.ceil(lotesSaida.length / ITEMS_PER_PAGE) : 0;
  const indiceInicial = (paginaAtual - 1) * ITEMS_PER_PAGE;
  const itensVisiveis = lotesSaida.slice(
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

  type ErrorInputSerial = {
    hash?: string;
  };
  type ErrorInputLote = {
    getLoteSaida?: string;
  }
  const [errorInput, setErrorInput] = useState<ErrorInputSerial>({});
  const [errorInputLote, setErrorInputLote] = useState<ErrorInputLote>({});

  const validateFieldsLote = () => {
    const newErrorInput: ErrorInputLote = {};
    if (!getLoteSaida) {
      newErrorInput.getLoteSaida = "Digite n° do lote!"
    }
    setErrorInputLote(newErrorInput);
    // Retorna true se não houver erros, caso contrário, false
    const isValid = Object.keys(newErrorInput).length === 0;
    return isValid;
  }

  const validateFields = () => {
    const newErrorInput: ErrorInputSerial = {};
    if (!hash) {
      newErrorInput.hash = "Digite o serial!"
    }
    setErrorInput(newErrorInput);
    // Retorna true se não houver erros, caso contrário, false
    const isValid = Object.keys(newErrorInput).length === 0;
    return isValid;
  }

  const ConsultaSerialEstampador = () => {
    const isValid = validateFields();
    if (isValid === true) {
      serviceConsultaBlank.getBlanksSaida(hash)
        .then((resp: any) => {
          console.log(resp);
          setMostrarTabela(false);
          setMostrarCards(true);
          setSerial(resp);
          setIdEstampador(resp.estampador);
          setBlanksLoteSaida(resp.loteSaida);
        })
        .catch((error: any) => {
          console.error(error);
          setError("Numero de Serial não encontrado! ")
        });
    }
    else {

    }
  };

  const ConsultaLoteEstampador = () => {
    const isValid = validateFieldsLote();
    if (isValid === true) {
      serviceConsultaLote.getLoteSaida(getLoteSaida)
        .then((resp: any) => {
          console.log("Lista de objetos:", resp); // Verifique a lista completa
          if (resp && resp.length > 0) {
            const primeiroObjeto = resp[0]; // Acesse o primeiro objeto da lista
            if (primeiroObjeto.estampador !== undefined || primeiroObjeto.loteSaida !== undefined) {
              // console.log("Valor de estampador:", primeiroObjeto.estampador);
              // console.log("Numero do lote:", primeiroObjeto.loteSaida);
              setMostrarTabela(true);
              setMostrarCards(false);
              setLotesSaida(resp);
              setGetLoteSaida(primeiroObjeto.loteSaida);
              setIdEstampador(primeiroObjeto.estampador);

            } else {
              console.error(error);
              setError("Numero de Lote não encontrado! ")
            }
          } else {
            console.error("Lista vazia");
          }
        })
        .catch((error: any) => {
          console.error(error);
          setError("Numero do lote, não encontrado! ");
        });
    }
  };

  const confirmardevolucaoLote = () => {
    if (serial) {
      const confirmaDevolucaoblank = {
        idEstampador: idEstampador,
        serialBlank: hash,
      };
      console.log('mostrar essa bosta', confirmaDevolucaoblank)

      serviceConsultaLote.devolucaoBlank(confirmaDevolucaoblank)
        .then((resp) => {
          console.log(resp);
          setSuccess(" ")
        })
        .catch((error) => {
          console.log(error);
          setError(" ")
        });
    } else {
      const confirmaDevolucaolote = {
        estampador: idEstampador,
        idLote: getLoteSaida,
      }
      console.log('mostrar essa bosta', confirmaDevolucaolote)

      serviceConsultaLote.devolucao(confirmaDevolucaolote)
        .then((resp) => {
          console.log("Devolução de Lote:", resp);
          setSuccess(" ")
        })
        .catch((error) => {
          console.log("Erro na devolução de Lote:", error);
        });
    }
    setOpen(!open)
  };


  const [mostrarCards, setMostrarCards] = useState(false); // Estado para controlar a exibição dos cards
  const [nome, setNome] = useState<any>(); // Estado para armazenar o valor do nome (tipo 'any')

  return (
    <>
      <ErrorModal isOpen={!!error} onClose={() => setError('')} error={error} />
      <SuccessModal isOpen={!!success} onClose={() => setSuccess('')} success={success} />
      <div className="rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-6">
        <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">
          Devolução de Lote / Blank
        </h2>
      </div>
      <Card className="bg-white/40 border p-6 rounded-xl shadow-xl mt-4 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 mx-2 p-2">
          <div className="md:mr-0 xl:mr-12">
            <div className="flex">
              <Input 
                label="Devolver Placa Individual:" 
                className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3 sm:py-4"
                value={hash}
                onChange={(e) => setHash(e.target.value)} 
                crossOrigin={undefined} 
              />
              <div className="relative">
                <button onClick={ConsultaSerialEstampador} className="absolute right-0 h-10 px-4 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg">
                  <BsSearch size={16} />
                </button>
              </div>
            </div>
            {errorInput.hash && <span className="text-red-700 p-1 text-sm">{errorInput.hash}</span>}
          </div>
          <div>
            <div className="xl:ml-12 flex">
              <Input label="Devolver Caixa Fechada:" className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
                value={getLoteSaida}
                onChange={(e) => setGetLoteSaida(e.target.value)} 
                crossOrigin={undefined} 
              />
              <div className="relative">
                <button onClick={ConsultaLoteEstampador} className="absolute right-0 h-10 px-4 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg">
                  <BsSearch size={16} />
                </button>
              </div>
            </div>
            <div>{errorInputLote.getLoteSaida && <span className="text-red-700 p-1 text-sm xl:ml-12">{errorInputLote.getLoteSaida}</span>}</div>
          </div>
        </div>
        <div>
          {/* {errorInput.hash && <span className="text-red-700 p-1 text-sm">{errorInput.hash}</span>} */}
        </div>
        {/* <div className="xl:ml-12 lg:ml-5">
            {errorInput.getLoteSaida && <span className="text-red-700 p-1 text-sm">{errorInput.getLoteSaida}</span>}
          </div> */}

      </Card>
      {mostrarCards && (
        <Card hidden={serial} className="bg-white/40 border p-6 rounded-xl shadow-xl mt-4 overflow-hidden">
          <h1 className="text-xl font-bold text-black mb-4">Dados Blank</h1>
          <div className="flex">
            <h2 className="font-bold">Serial: </h2>
            <p className="font-bold text-black ml-2">{hash}</p>
          </div>
          <div className="flex">
            <h2 className="font-bold">Lote Saída: </h2>
            <p className="font-bold text-black ml-2">{blanksLoteSaida}</p>
          </div>
          <div className="flex">
            <h2 className="font-bold">ID Estampador: </h2>
            <p className="font-bold text-black ml-2">{serial.estampador}</p>
          </div>
          <div className="flex">
            <h2 className="font-bold">Status: </h2>
            <p className="font-bold text-black ml-2">{serial.status}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <Button className="mt-4 w-24 flex items-center justify-center" onClick={handleOpen}>devolver</Button>
            <div className="topo">
            </div>
          </div>
        </Card>
      )}
      {mostrarTabela && (
        <>
          <Card className="bg-white/40 overflow-x-auto rounded-xl mt-4 shadow-xl px-2 pb-4">

            <div className='flex justify-between mt-2 mb-4'>
              <h4 className='ml-6 font-bold leading-6 text-gray-900 flex items-center uppercase'>
                {nome}
              </h4>
            </div>
            <table className='w-full bg-white/80'>
              <thead className='bg-blue-gray-100'>
                <tr className='border-gray-400 border'>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="w-26 p-4 text-lg font-semibold tracking-wide text-center">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="leading-none opacity-70 font-bold"
                      >
                        <strong>{head}</strong>
                      </Typography>
                    </th>
                  ))}
                </tr>

              </thead>
              <tbody>
                {itensVisiveis.map((item, index) => (
                  <tr key={index} className="border-b even:bg-blue-gray-50/50">
                    <td className="p-4 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.serial}
                      </Typography>
                    </td>
                    <td className="p-4 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.autorizacao}
                      </Typography>
                    </td>
                    <td className="p-4 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.status}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex grid-cols-2 mt-4 mx-4 mb-2">
              <Button onClick={() => setOpen(!open)}>Devolver</Button>
              <div className="mx-auto flex items-center justify-center">
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
            </div>
          </Card>
        </>
      )}
      <Fragment>
        <Dialog open={open} handler={handleOpen} size={'sm'} className="w-80 absolute top-0 transform -translate-x-1/2 p-4 bg-white rounded-lg shadow-md">

          <DialogHeader>
          </DialogHeader>
          <DialogBody divider className="grid place-items-center gap-4">
            <BellIcon className="h-16 w-16 text-red-500" />
            <Typography color="red" variant="h4">
              ATENÇÃO!
            </Typography>
            <Typography className="text-center font-normal">
              Tem Certeza que Deseja confirmar a devolução do lote/Blank?
            </Typography>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="blue-gray" onClick={handleOpen}>
              Fechar
            </Button>
            <Button variant="gradient" onClick={confirmardevolucaoLote}>
              Confirmar
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </>
  );
}