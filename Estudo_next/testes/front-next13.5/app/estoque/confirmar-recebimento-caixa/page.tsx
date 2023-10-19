"use client"

import React, { useState } from "react";
import {
  Button, Card, Input, Typography, Dialog, DialogHeader,
  DialogBody, DialogFooter, IconButton,
} from "@material-tailwind/react";
import { BsSearch } from "react-icons/bs";
import { UserProducaoService } from "../../../src/services/producao/producaoService";
import { useBlankService } from "../../../src/services/blanks/blanksService";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ConfirmarLotesRecebidosEstampador } from "../../../src/interfaces/Estoque/confirmar-recebimento"
import { useLotesService } from '../../../src/services/lotes/lotesService';
import ErrorModal from '../../../src/components/message/ErrorModal';
import SuccessModal from '../../../src/components/message/SuccessModal';

const ITEMS_PER_PAGE = 10;

export default function ReceberLote() {
  const service = UserProducaoService()
  const loteService = useLotesService()
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // const [loader, setLoader] = useState(false)
  // const [lote, setlote] = useState<any>([])
  const [loteSaida, setLoteSaida] = useState<any>('2022070405');
  const [numeroLote, setNumeroLote] = useState("");
  const [visible, setVisible] = useState(false);
  const service2 = useBlankService()
  const [inputValue, setInputValue] = useState();
  const [visible2, setVisible2] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [open, setOpen] = useState(false);
  const [todosDados, setTodosDados] = useState<any[]>([]);

  // Cabeçalho da tabela
  const TABLE_HEAD = ["N° Lote", "Status", "Estampador"];


  // // Função para atualizar o estado do inputValue
  // const handleInputChange = (event: any) => {
  //   setInputValue(event.target.value);
  // };

  // // Função para manipular o clique no botão
  // const handleButtonClick = () => {
  //   if (inputValue.length === 10) {
  //     setVisible2(!visible2);
  //   }
  // };

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

  type ErrorInput = {
    numeroLote?: string;
  };

  const [errorInput, setErrorInput] = useState<ErrorInput>({});

  const validateFields = () => {
    const newErrorInput: ErrorInput = {};
    if (!numeroLote) {
      newErrorInput.numeroLote = "Digite o número do lote !"
    }
    setErrorInput(newErrorInput);
    // Retorna true se não houver erros, caso contrário, false
    const isValid = Object.keys(newErrorInput).length === 0;
    return isValid;
  }
  
  const consultaRecebimento = () => {
    const isValid = validateFields();
    if (isValid === true) {
      service2.getBlankLoteSaida(numeroLote)
        .then((response: any) => {
          console.log(response.data);
          if (response.data.length > 0) {
            setTodosDados(response.data);
            setVisible(true);
          } else {
            setVisible(false);
          }
        })
        .catch((error: any) => {
          console.log(error);
          setError("Numero de lote não encontrado! ")
        });
    }
  };

    // Cálculos para paginação da tabela
    const totalPaginas = Math.ceil(todosDados.length / ITEMS_PER_PAGE);
    const indiceInicial = (paginaAtual - 1) * ITEMS_PER_PAGE;
    const itensVisiveis = todosDados.slice(
      indiceInicial,
      indiceInicial + ITEMS_PER_PAGE
    );

    const form: ConfirmarLotesRecebidosEstampador = {
      idLote: loteSaida,
      idEstampador: null
    }
    const confirmarRecebimentoLote = () => {
      if (form.idLote != null && form.idLote.length > 9) {
        loteService.confirmarRecebimento(form)
          .then((response: any) => {
            console.log(response)
            setSuccess(" ")
          })
          .catch((error: any) => {
            console.log(error);
            setError(" ")
          })
      }
    }

    const numerosPaginas = Array.from({ length: totalPaginas }, (_, idx) => idx + 1);

    return (
      <>
        <ErrorModal isOpen={!!error} onClose={() => setError('')} error={error} />
        <SuccessModal isOpen={!!success} onClose={() => setSuccess('')} success={success} />
        <div className="rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-3">
          <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">Confirmar Recebimento Lote</h2>
        </div>
        <Card className="border bg-white/40 p-3 rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 p-1 pl-3">
            <div className="flex w-80">
              <Input
                label="Numero Lote:"
                className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
                value={numeroLote}
                onChange={(e) => setNumeroLote(e.target.value)} 
                crossOrigin={undefined}              
              />
              <div className="relative">
                <button
                  className="absolute right-0 h-10 px-4 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg"
                  onClick={consultaRecebimento}
                >
                  <BsSearch size={16} />
                </button>
              </div>
            </div>
          </div>
          {errorInput.numeroLote && <span className="text-red-700 p-1 text-sm ml-3">{errorInput.numeroLote}</span>}
        </Card>
        {visible && (
          <Card className="pt-2 pb-4 px-2 block bg-white/40 overflow-x-auto w-full rounded-lg shadow-xl my-4">
            <table className="my-4 w-full bg-white/80">
              <thead className="bg-blue-gray-100">
                <tr className='border-gray-400 border'>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="p-4 text-sm font-semibold tracking-wide text-center"
                    >
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
              <>
                <tbody>
                  {itensVisiveis.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b even:bg-blue-gray-50/50 items-center justify-center"
                    >
                      <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                        <div
                          // variant="body2"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.IdLote}
                        </div>
                      </td>
                      <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                        <div
                          // variant="body2"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.Status}
                        </div>
                      </td>
                      <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                        <div
                          // variant="body2"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.Estampador}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </>
            </table>
            <div className="pl-2 flex items-center">
              <div className="items-center flex xl:mr-40 lg:mr-20 sm:mr-10">
                <Button onClick={() => setOpen(!open)}>Confirmar</Button>
              </div>

              <div className="items-center flex xl:ml-40 lg:ml-20 sm:ml-10">
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
            </div>
          </Card>
        )}
        <Dialog className="absolute top-0 " open={open} handler={() => setOpen(!open)} size={"xs"}>
          <DialogHeader>
          </DialogHeader>
          <DialogBody divider className="grid place-items-center gap-4">
            <div className="text-3xl">
              Atenção!
            </div>
            <div className="text-center font-normal">
              Clicando em <strong>Confirmar</strong> será confirmado o recebimento do lote!
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="red" onClick={() => setOpen(!open)}>
              Fechar
            </Button>
            <Button variant="gradient" onClick={() => { confirmarRecebimentoLote(); setOpen(!open); }}>
              Confirmar
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  }
