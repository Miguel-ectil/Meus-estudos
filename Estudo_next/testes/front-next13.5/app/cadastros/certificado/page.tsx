"use client"
import { BsSearch } from 'react-icons/bs'
import { Input, Card, Button } from '@material-tailwind/react'
import { useState, useEffect } from 'react';

export default function Certificado() {
  const [desabilitar, setDesabilitar] = useState(false);
  const [desabilitarInput, setDesabilitarInput] = useState(false);

  useEffect(() => {
  }, []);

  const dadosCnpj = () => {
    const dados = "Todos os dados do cliente"
      if (dados === null) {
        setDesabilitarInput(false)
      }
      else {
        setDesabilitarInput(true)
      }
  }

  const habilitaInput = () => {
    setDesabilitarInput(false)
  }

  return (
    <>
      <div className='rounded-md bg-white/40  ring-white/60 shadow-xl mb-4'>
        <h2 className='p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased'>Cadastro de Certificado</h2>
      </div>
      <Card className="bg-white/40 border p-4 rounded-xl shadow-xl h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="flex flex-col">
            {/*<h1 className="mt-2 font-bold tracking-tight text-gray-800 sm:text-2xl">Certificado:</h1>*/}
            <div className="flex w-80 ml-6">
              <Input label="CNPJ : " className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"/>
              <div className='relative'>
                <button
                  onClick={dadosCnpj}
                  className="absolute right-0 h-10 px-4 pt-1 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg"
                >
                  <BsSearch size={16}/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='px-6 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3'>
          <div className="xl:mr-12 md:mr-0">
            <Input
              label='Certificado:'
              disabled={desabilitarInput} className=" shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
            />
          </div>
          <div className="xl:ml-12 ">
            <Input disabled={desabilitarInput}
              label="Data Criação:"
              className="shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
            />
          </div>
          <div className="xl:mr-12 md:mr-0">
            <Input disabled={desabilitarInput}
              label="Vencimento:"
              className="shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
            />
          </div>
          <div className="xl:ml-12 md:mt-0">
            <Input disabled={desabilitarInput}
              label='CNPJ: '
              className="shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
            />
          </div>
          <div className='md:mr-0 xl:mr-12'>
            <Input disabled={desabilitarInput}
              label='Email:'
              className="shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
            />
          </div>
          {desabilitar &&  (
            <div className="xl:ml-12 md:mt-0">
              <button
                className="h-10 px-6 py-2 rounded-lg  bg-[#0284c7] hover:bg-[#0ea5e9] font-bold text-white shadow-xl shadow-[#bae6fd] transition ease-in-out duration-200 translate-10">
                Cadastrar Certificado
              </button>
            </div>
          )}
          {!desabilitar && (
            <div className="xl:ml-12 md:mt-0">
              <button onClick={habilitaInput} className="h-10 px-6 rounded-lg bg-[#059669] hover:bg-[#34d399] font-bold text-white shadow-xl ">
                Editar Certificado
              </button>
            </div>
          )}
        </div>
      </Card>
    </>
  )
}