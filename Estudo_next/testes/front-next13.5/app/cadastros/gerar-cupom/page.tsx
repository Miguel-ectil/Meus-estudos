"use client"

import React, { useEffect, useState } from "react";
import { Button, Card, Checkbox, Input, Typography } from "@material-tailwind/react";
import { BsSearch } from "react-icons/bs";
import Cookies from "js-cookie";
import { useCupomFiscalService } from "../../../src/services/cupomFiscal/cupomFiscalService";
import Cupom_Fiscal from "@/app/relatorios/cupons-fiscais/page";
import { error } from "console";


const TABLE_HEAD = ["Placa", "TipoPlaca", "Serial", "Categoria", "Especie", "Tipo", "SerialPlaca"];

export default function Emitir_CupomFiscal() {
  const numAe = Cookies.get("ae")
  Cookies.remove("ae");
  const [TABLE_ROWS, setTableRows] = useState<any[]>([]);
  const [autorizacaoEstampagem, setAutorizacaoEstampagem] = useState<any>(numAe)
  const [Tabelaestampagem, SetTabelaestampagem] = useState([])
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [CNPJInput, setCNPJInput] = useState(false);

  const [cpfCnpj, setCpfCnpj] = useState<string>('')
  const [descricao, setDescricao] = useState('')
  const [ncm, setNcm] = useState('')
  const [cfop, setCfop] = useState('')
  const [tributos, setTributos] = useState('') 
  const [valorUnitario, setvalorUnitario] = useState('')
  const [meio, setMeio] = useState('')
  const [valor, setValor] = useState('')
  const [razaoSocial, SetRazaoSocial] = useState('')
  const cupomservice = useCupomFiscalService()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    getNumAe()
  }, [])

  const getNumAe = () => {
    cupomservice.CupomFiscal(autorizacaoEstampagem)
      .then((res) => {
        console.log(res)
        SetTabelaestampagem(res.estampagens)
        
        setTableRows(res.estampagens);
      })
      .catch((error) => {
        console.error("Erro ao obter dados do cupom fiscal:", error);
      });
  };


  const visibleinput = () => {
   setVisible(!visible)  
  }

  const EmitirCupom = () => {
    const emissaocf =  {
      cpfCnpj,
      itens: {
        descricao: descricao, ncm:ncm,
        cfop: cfop, tributos: tributos, valorUnitario,
      pagamentos: {
        meio, valor, razaoSocial,
      }
    }
    }
    cupomservice.EmitirCupomFiscal(emissaocf)
      .then((res) => {
      console.log("Sucesso")
      })
      .catch((error) => {
        console.log("Erro")
      })
  }

  return (
    <>
      <div>
        <div className="rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-6">
          <h2 className="p-10 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">
            Emissão de Cupom Fiscal
          </h2>
        </div>
        <Card className="border p-6 rounded-xl shadow-xl mt-4 overflow-hidden">
          <h1 className="font-bold">Número de Autorização de estampagem</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="flex mt-2 w-80">
              <Input
                label="EX: 2022070430"
                value={autorizacaoEstampagem}
                onChange={(e) => setAutorizacaoEstampagem(e.target.value)}
                className="py-2 shadow-sm sm:text-sm sm:leading-6" 
                crossOrigin={undefined}              
              />
              <div className='relative'>
                <button
                  className="absolute right-0 h-10 px-4 pt-1 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg"
                >
                  <BsSearch size={16} onClick={getNumAe}/>
                </button>
              </div>
            </div>
          </div>
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
                      {item.placa}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.tipoPlaca}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.status}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.categoriaVeiculo}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.especieVeiculo}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.tipoVeiculo}
                    </Typography>
                  </td>
                  <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item.serialBlank}
                    </Typography>
                  </td>                  
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card className="border px-8 py-2 rounded-xl shadow-xl mt-4 overflow-hidden">
          <h1 className="text-center justify-center font-bold flex my-1">Dados do Cupom Fiscal</h1>
          <h2 className="font-bold">Obrigatório</h2>
          <div className="w-28">
          <Input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            label="Valor da Nota R$: * "
            className="rounded border font-bold" 
            crossOrigin={undefined}            
          />
            </div>
          <div className="mt-4">
            <h1 className="font-bold">Opcionais</h1>
            <label className="flex items-center mt-2">
              <Checkbox
                color="blue"
                onClick={visibleinput}
                className="form-checkbox " 
                crossOrigin={undefined}              
              />
              <span>Inserir Dados</span>
            </label>

            {visible && (
              <div className="mt-4 flex grid-cols-2 w-96 gap-6">
                <Input
                  value={cpfCnpj}
                  onChange={(e) => setCpfCnpj(e.target.value)}
                  type="text"
                  label="CNPJ:"
                  className="border rounded" 
                  crossOrigin={undefined}                  
                />
                <Input
                  value={razaoSocial}
                  type="text"
                  onChange={(e) => SetRazaoSocial(e.target.value)}
                  label="Nome/Razão Social:"
                  className="border rounded" 
                  crossOrigin={undefined}                  
                />
              </div>
            )}
          </div>
          <Button className="w-48 mt-6" onClick={EmitirCupom}>Emitir Cupom Fiscal</Button>
        </Card>
      </div>
    </>
  );
}
