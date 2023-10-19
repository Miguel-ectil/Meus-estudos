"use client"

import { Button, Card, Input, Dialog, DialogHeader, DialogBody, DialogFooter, } from "@material-tailwind/react"
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";
import { useBlankService } from '../../../src/services/blanks/blanksService';
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import ErrorModal from '../../../src/components/message/ErrorModal';
import SuccessModal from '../../../src/components/message/SuccessModal';

export default function ReceberLote() {
  const serviceBlanks = useBlankService()
  const [mostrarCards, setMostrarCards] = useState(false); // Estado para controlar a exibição dos cards
	const [hash, setHash] = useState<any>("")
  const [todosDados, setTodosDados] = useState<any>(null)
  const [observacoes, setObservacoes] = useState<any>(null)
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [textInfo, setTextInfo] = React.useState<string>("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [numeroSerial, setnumeroSerial] = useState<any>();

  const [form,setForm] = useState<{observacoes: any, serial: any}>({
    observacoes: null,
    serial: null,
  });
 
  const ValidationSchema = zod.object({
    observacoes: zod.string().nonempty('Campo obrigatório.'),
  })
  type CreateUserFormData = zod.infer<typeof ValidationSchema> // para meu formulario entender a tipagem dos meus campos
  const { register, handleSubmit, formState: {errors} } = useForm<CreateUserFormData>({
    resolver : zodResolver(ValidationSchema),
  })

  const handleOpen = () => setOpen(!open);
  const handleOpen2 = () => setOpen2(!open2);

  type ErrorInput = {
    numeroSerial?: string;
  };

  const [errorInput, setErrorInput] = useState<ErrorInput>({});

  const validateFields = () => {
    const newErrorInput: ErrorInput = {};
    if (!numeroSerial) {
      newErrorInput.numeroSerial = "Digite o número do Serial !"
    }
    setErrorInput(newErrorInput);
    // Retorna true se não houver erros, caso contrário, false
    const isValid = Object.keys(newErrorInput).length === 0;
    return isValid;
  }

  const ConsultaSerialEstampador = () => {
    const isValid = validateFields();
    if (isValid === true) {
      serviceBlanks.getBlanksSaida(numeroSerial)
        .then((resp: any) => {
          setMostrarCards(true)
          setTodosDados(resp)
        })
        .catch((error: any) => {
          console.log(error)
          setError("Numero de Serial não encontrado! ")
        })
    }
  }

  const inativarBlank = () => {
    const isValid = validateFields();
    if (isValid === true) {
      const enviadados = {
        observacoes,
        numeroSerial
      }
      serviceBlanks.inativarBlankEstampador(enviadados)
        .then((resp: any) => {
          console.log(resp)
          setOpen(false)
          setTextInfo(resp.message)
          handleOpen2()
        })
        .catch((error: any) => {
          console.log(error)
          setOpen(false)
          setError("Erro ao inativar o serial")
        })
    }
  }

  return (
    <>
      <ErrorModal isOpen={!!error} onClose={() => setError('')} error={error} />
      <SuccessModal isOpen={!!success} onClose={() => setSuccess('')} success={success} />
      <div className="rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-6">
        <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">
          Inativar Blanks
        </h2>
      </div>
      <Card className="bg-white/40 border p-6 rounded-xl shadow-xl mt-4 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          <div className="flex w-80">
            <Input 
              label="Digite o serial:"
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
              value={numeroSerial}
              onChange={(e) => setnumeroSerial(e.target.value)} 
              crossOrigin={undefined}            
            />
            <div className="relative">
              <button
                onClick={ConsultaSerialEstampador} 
                className="items-center absolute right-0 h-10 px-4 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg"
              >
                <BsSearch size={16} />
              </button>
            </div>
          </div>
        </div>
        {errorInput.numeroSerial && <span className="text-red-700 p-1 text-sm">{errorInput.numeroSerial}</span>}
      </Card>
      {mostrarCards && (
        <>
          <Card hidden={todosDados} className="bg-white/40 border p-6 rounded-xl shadow-xl mt-4 overflow-hidden">
            <h1 className="mb-4 text-xl font-bold text-black">Dados do Blank</h1>
            <div className="flex">
              <h2 className="font-bold">Serial: </h2>
              <p className="font-bold text-black ml-2">{todosDados?.serial}</p>
            </div>
            <div className="flex">
              <h2 className="font-bold">Lote Saída: </h2>
              <p className="font-bold text-black ml-2">{todosDados?.loteSaida}</p>
            </div>
            <div className="flex">
              <h2 className="font-bold">ID Estampador: </h2>
              <p className="font-bold text-black ml-2">{todosDados?.estampador}</p>
            </div>
            <div className="flex">
              <h2 className="font-bold">Status: </h2>
              <p className="font-bold text-black ml-2">{todosDados?.status}</p>
            </div>
          </Card>
        </>
      )}
      {mostrarCards && (
        <>
          <Card className="bg-white/40 border p-6 rounded-xl shadow-xl mt-4 overflow-hidden">
            <h1 className="text-xl font-bold text-black">Observação *</h1>
            <div className="grid grid-cols-2">
              <form onSubmit={handleSubmit(handleOpen)}>
                <div className="flex mt-2 mb-1 w-auto">
                  <Input
                    crossOrigin={undefined} {...register('observacoes')}
                    label="Preenchimento obrigatório :"
                    className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
                    value={observacoes}
                    onChange={(e) => setObservacoes(e.target.value)}                  
                  />
                  <button
                    type="submit"
                    className="ml-4 h-10 px-6 py-2 rounded-lg  bg-[#0284c7] hover:bg-[#0ea5e9] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10"
                  >
                    Confirmar
                  </button>
                </div>
                {errors.observacoes && <span className="text-red-700 p-1 text-md">{errors.observacoes.message}</span>}
              </form>
            </div>
          </Card>
        </>
      )}
      <Dialog open={open} handler={handleOpen} size={"xs"} className="w-80 absolute p-2 bg-white rounded-lg shadow-md">
        <DialogBody  className="text-gray-800 font-bold text-xl justify-center flex items-center" divider>
          Tem certeza que gostaria de inutilizar este serial?
        </DialogBody>
        <DialogFooter className="justify-end flex items-center">
          <Button
            variant="text"
            className="mr-2 h-10 px-6 py-2 rounded-lg  bg-[#c01907] hover:bg-[#e92009] font-bold text-white transition ease-in-out duration-200 translate-10"
            onClick={() => setOpen(false)}
          >
            <span>Cancelar</span>
          </Button>
          <Button 
            className="h-10 px-6 py-2 rounded-lg  bg-[#057119] hover:bg-[#06891e] font-bold text-white transition ease-in-out duration-200 translate-10"
            variant="text" 
            onClick={inativarBlank}
          >
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <Dialog className="px-4 py-4 text-gray-800 font-bold text-xl items-center justify-center" open={open2} handler={handleOpen2} size={"xs"}>
        {/* <DialogBody  
          className="text-gray-800 font-bold text-xl "
        > */}
        {textInfo}
        <div className="flex mt-4 justify-between">
          <div></div>
            <Button
              className="h-10 px-6 py-2 rounded-lg bg-[#0284c7] hover:bg-[#0ea5e9] font-bold text-white transition ease-in-out duration-200 translate-10"
              variant="text"
              onClick={() => setOpen2(false)}
            >
              <span>OK</span>
            </Button>
          </div>
        {/* </DialogBody> */}
        {/* <DialogFooter className="justify-center flex items-center"> */}
          
        {/* </DialogFooter> */}
      </Dialog>
    </>
  );
}