"use client"
import { Button, Card, Input } from "@material-tailwind/react"
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";
import { useBlankService } from '../../../src/services/blanks/blanksService'
import ErrorModal from '../../../src/components/message/ErrorModal';
import SuccessModal from '../../../src/components/message/SuccessModal';

export default function ConsultaSerial() {
  const serviceConsultaBlank = useBlankService()
  const [hash, setHash] = useState<any>()
  const [mostrarCards, setMostrarCards] = useState(false); // Estado para controlar a exibição dos cards
  const [serial, setSerial] = useState<any>()
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  type ErrorInput = {
    hash?: string;
  };

  const [errorInput, setErrorInput] = useState<ErrorInput>({});

  const validateFields = () => {
    const newErrorInput: ErrorInput = {};
    if (!hash) {
      newErrorInput.hash = "Digite o número do Serial !"
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
          setMostrarCards(true)
          setSerial(resp)
        })
        .catch((error: any) => {
          console.error(error)
          setError("Numero de Serial não Encontrado, tente novamente")
        })
    }
  }

  return (
    <>
      <ErrorModal isOpen={!!error} onClose={() => setError('')} error={error} />
      <SuccessModal isOpen={!!success} onClose={() => setSuccess('')} success={success} />
      <div className="rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-6">
        <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">
          Consultar Serial
        </h2>
      </div>
      <Card className="border p-4 rounded-xl shadow-xl mt-4 overflow-hidden bg-white/40">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex w-80">
            <Input
              label="Digite o serial:"
              className="py-4 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
              value={hash}
              onChange={(e) => setHash(e.target.value)} crossOrigin={undefined}            />
            <div className="relative">
              <button onClick={ConsultaSerialEstampador} className="absolute items-center right-0 h-10 px-4 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg">
                <BsSearch size={16} />
              </button>
            </div>
          </div>
        </div>
        {errorInput.hash && <span className="text-red-700 p-1 text-sm">{errorInput.hash}</span>}
      </Card>
      {mostrarCards && (
        <>
          <Card hidden={serial} className="bg-white/40 border p-6 rounded-xl shadow-xl mt-4 overflow-hidden">
            <h1 className="text-xl font-bold text-black mb-4">Dados Blank</h1>
            <div className="flex">
              <h2 className="font-bold">Serial: </h2>
              <p className="font-bold text-black ml-2">{serial?.serial}</p>
            </div>
            <div className="flex">
              <h2 className="font-bold">Lote Saída: </h2>
              <p className="font-bold text-black ml-2">{serial?.loteSaida}</p>
            </div>
            <div className="flex">
              <h2 className="font-bold">ID Estampador: </h2>
              <p className="font-bold text-black ml-2">{serial?.estampador}</p>
            </div>
            <div className="flex">
              <h2 className="font-bold">Status: </h2>
              <p className="font-bold text-black ml-2">{serial?.status}</p>
            </div>
          </Card>
        </>
      )}
    </>
  );
}