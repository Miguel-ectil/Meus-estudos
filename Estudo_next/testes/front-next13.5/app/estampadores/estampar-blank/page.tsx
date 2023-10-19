"use client"
import React, { useState } from 'react'
import { Input, Card, Typography } from '@material-tailwind/react'
import Image from 'next/image';

export default function EstamparBlank() {
  const [numeroAutorização, setNumeroAutorização] = useState<any>()
  const [statusAe, setStatusAe] = useState<any>()
  const [chassis, setChassis] = useState<any>()
  const [categoriaVeiculo, setCategoriaVeiculo] = useState<any>()
  const [especieVeículo, setEspecieVeículo] = useState<any>()
  const [tipoVeículo, setTipoVeículo] = useState<any>()
  
  return (
    <>
      <Card className='bg-[#f8fafc] overflow-x-auto rounded-xl shadow-xl sm:px-6 px-2 justify-center items-center'>
        <Image src="/placa-c.png" alt="" width={'800'} />
      </Card>
      <Card className='bg-[#f1f5f9]  overflow-x-auto rounded-xl shadow-xl sm:px-56 px-2 py-2 mt-4 '>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
          <div className="md:mr-0 md:mt-5 mt-3 xl:mr-12">
            <Typography
              variant="small"
              color="blue-gray"
              className="leading-none opacity-70 font-bold"
            >
              Numero Autorização :
            </Typography>
          </div>
          <div className="md:mt-2 mt-1 xl:ml-2">
            <Input 
              label="Numero Autorização :"
              value={numeroAutorização}
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
            />
          </div>
          <div className="md:mr-0 md:mt-5 mt-3 xl:mr-12">
            <Typography
              variant="small"
              color="blue-gray"
              className="leading-none opacity-70 font-bold"
            >
              Status AE :
            </Typography>
          </div>
          <div className="md:mt-2 mt-1 xl:ml-2">
            <Input 
              label="Status AE :"
              value={statusAe}
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
            />
          </div>
          <div className="md:mr-0 md:mt-5 mt-3 xl:mr-12">
            <Typography
              variant="small"
              color="blue-gray"
              className="leading-none opacity-70 font-bold"
            >
              Chassis :
            </Typography>
          </div>
          <div className="md:mt-2 mt-1 xl:ml-2">
            <Input 
              label="Chassis :"
              value={chassis}
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
            />
          </div>
          <div className="md:mr-0 md:mt-5 mt-3 xl:mr-12">
            <Typography
              variant="small"
              color="blue-gray"
              className="leading-none opacity-70 font-bold"
            >
              Categoria Veiculo :
            </Typography>
          </div>
          <div className="md:mt-2 mt-1 xl:ml-2">
            <Input 
              label="Categoria Veiculo :"
              value={categoriaVeiculo}
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
            />
          </div>
          <div className="md:mr-0 md:mt-5 mt-3 xl:mr-12">
            <Typography
              variant="small"
              color="blue-gray"
              className="leading-none opacity-70 font-bold"
            >
              Espécie Veículo :
            </Typography>
          </div>
          <div className="md:mt-2 mt-1 xl:ml-2">
            <Input 
              label="Espécie Veículo :"
              value={especieVeículo}
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
            />
          </div>
          <div className="md:mr-0 md:mt-5 mt-3 xl:mr-12">
            <Typography
              variant="small"
              color="blue-gray"
              className="leading-none opacity-70 font-bold"
            >
              Tipo de Veículo :
            </Typography>
          </div>
          <div className="md:mt-2 mt-1 xl:ml-2">
            <Input 
              label="Tipo de Veículo :"
              value={tipoVeículo}
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
            />
          </div>
          <div className="md:mr-0 md:mt-5 mt-3 xl:mr-12">
            <Typography
              variant="small"
              color="blue-gray"
              className="leading-none opacity-70 font-bold"
            >
              Placa :
            </Typography>
          </div>
          <div className="md:mt-2 mt-1 xl:ml-2">
            <Input 
              label="Placa :"
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
            />
          </div>
          <div className="md:mr-0 md:mt-5 mt-3 xl:mr-8">
            <Typography
              variant="small"
              color="blue-gray"
              className="leading-none opacity-70 font-bold"
            >
              Serial Dianteira :
            </Typography>
          </div>
          <div className="md:mt-2 mt-1 xl:ml-2">
            <Input 
              label="Serial Dianteira :"
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
            />
            <button 
              className="mt-2 px-2 py-2 rounded-lg bg-[#0284c7] hover:bg-[#0ea5e9] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10  w-full" 
            >
              Estampagem Concluida
            </button>
          </div>
          <div className="md:mr-0 md:mt-5 mt-3 xl:mr-2">
            <Typography
              variant="small"
              color="blue-gray"
              className="leading-none opacity-70 font-bold"
            >
              Serial Traseira :
            </Typography>
          </div>
          <div className="md:mt-2 mt-1 xl:ml-2">
            <Input 
              label="Serial Traseira :"
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
            />
            <button 
              className="mt-2 px-2 py-2 rounded-lg bg-[#0284c7] hover:bg-[#0ea5e9] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10  w-full" 
            >
              Estampagem Concluida
            </button>
          </div>
        </div>
      </Card>
    </>
  )
}