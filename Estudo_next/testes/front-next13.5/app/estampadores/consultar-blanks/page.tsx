"use client"

import React, { useState } from "react";
import { Card, Input, Typography } from "@material-tailwind/react";
import { BsSearch } from "react-icons/bs";

const TABLE_ROWS = [
  {
    Placa: "GEI0C58",
    TipoPlaca: "TRASEIRA",
    Status: "CONCLUIDA",
    Categoria: "PARTICULAR",
    Especie: "PASSAGEIRO",
    Tipo: "AUTOMOVEL",
    SerialPlaca: "221123063927568",
    
  },
  {
    Placa: "2023070404",
    TipoPlaca: "TRASEIRA",
    Status: "CONCLUIDA",
    Categoria: "PARTICULAR",
    Especie: "PASSAGEIRO",
    Tipo: "AUTOMOVEL",
    SerialPlaca: "221123063927568",
    
  },
];

const TABLE_HEAD = ["Placa", "TipoPlaca", "Status", "Categoria", "Especie", "Tipo", "SerialPlaca"];

export default function ConsultarBlank() {  
  return (
    <>
      <div>
        <div className="rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-6">
          <h2 className="p-10 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">
            Consultar Blanks
          </h2>
        </div>
        <Card className="border p-6 rounded-xl shadow-xl mt-4 overflow-hidden px-10">
          <div className="grid gap-4 grid-cols-2">
            <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 flex items-center">
              <Input
                label="Consultar AE:"
                className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3 rounded-r-none"
              />
              <button className="h-10 px-4 pt-1 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg shadow-blue-300">
                <BsSearch size={16} />
              </button>
            </div>
            <div className="flex flex-wrap items-center">
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 flex items-center">
                <Input
                  label="Consultar Placa:"
                  className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3 rounded-r-none"
                />
                <button className="h-10 px-4 pt-1 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg shadow-blue-300">
                  <BsSearch size={16} />
                </button>
              </div>
            </div>
          </div>
          <hr />
            <div className="grid gap-4 grid-cols-2">
            <div className="mt-10 w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Input label="Numero AE:"></Input>
              </div>
              <div className="mt-10 flex flex-wrap">
                  <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                      <Input label="Placa do AE:" className="rounded" />
                  </div>
            </div>
            <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Input label="Status do AE:"></Input>
              </div>
              <div className="flex flex-wrap">
                  <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                      <Input label="Documento Cliente:" className="rounded" />
                  </div>
            </div>
            <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Input label="Telefone Cliente:"></Input>
              </div>
              <div className="flex flex-wrap">
                  <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                      <Input label="Nome Cliente:" className="rounded" />
                  </div>
            </div>
             <div className="flex flex-wrap">
                  <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                      <Input label="Endereço Cliente:" className="rounded" />
                  </div>
            </div>
            </div>
          </Card>
        <Card className="border p-6 rounded-xl shadow-xl mt-4 overflow-hidden">
          <h1 className="font-bold mt-4">Dados Estampagem</h1>
          <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead className="bg-gray-100 border-b-2 border-gray-300">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="p-4 text-sm font-semibold tracking-wide text-left">
                    <Typography variant="small" color="blue-gray" className="leading-none opacity-70 font-bold">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {TABLE_ROWS.map((item, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50 items-center justify-center">
                  <td className="p-4 text-sm text-gray-700">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.Placa}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.TipoPlaca}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.Status}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.Categoria}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.Especie}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.Tipo}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.SerialPlaca}
                    </Typography>
                  </td>                  
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}