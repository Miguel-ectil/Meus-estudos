"use client";
import React, { useState, useEffect } from "react";
import {Typography, Button, Radio, input, Select, Option} from "@material-tailwind/react";
import { AiFillFileExcel } from 'react-icons/ai';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import {useEstampagemService} from "../../../src/services/estampagem/estampagemService";
import {useRelatorioService} from '../../../src/services/relatorio/relatorioService'
import {Simulate} from "react-dom/test-utils";

export default function Relatorio_Estampagem() {
  const estampagemService = useEstampagemService()
  const serviceRelatorio = useRelatorioService()
  
  const [solicitantes, setSolicitantes] = useState<any>([])
  const [selected, setSelected] = useState<any>("")
  const [nome, setNome] = useState<any>("")
  const [form,setForm] = useState<{ dataInicial: any, dataFinal: any, format_relatory: boolean }>({
    dataInicial: null,
    dataFinal: null,
    format_relatory: false
  });
  
  useEffect(() => {
    getSolicitante()
  },[])

  const handleRetrato = () => {
    setForm({ ...form, format_relatory: false });
  }

  const handlePaisagem = () => {
    setForm({ ...form, format_relatory: true });
  }
  
  const getSolicitante = () => {
    estampagemService.buscarSolicitantes()
      .then(( response : any) => {
        setSolicitantes(response)
      })
      .catch((error) => {
        console.log(error, 'Solicitante não encontrada')
    })
  }

  const solicitarRelatorioPdf =  () => {
    serviceRelatorio.relatorioEstampagem(form,
      {
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/pdf",
        },
      },
    )
    .then(( response : any) => {
      console.log(response)
      const url = URL.createObjectURL(
        new Blob([response], { type: "application/pdf" })
      )
      window.open(url)
    }) 
    .catch((error:any) => {
      console.log(error)
    }) 
  }

  const solicitarRelatorioPorSolicitantePdf = () => {
    serviceRelatorio.relatorioEstampagemPorSolicitante(
      form,
      {
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/pdf",
        },
      }
    )
    .then(( response : any) => {
      const url = URL.createObjectURL(
        new Blob([response], { type: "application/pdf" })
      )
      window.open(url)
    }) 
    .catch((error:any) => {
      console.log(error)
    })
  }

  const solicitarRelatorioPorSolicitanteIndividualPdf = () => {
    const data = {
      nome: nome,
      dataInicial: form.dataInicial,
      dataFinal: form.dataFinal,
      format_relatory:form.format_relatory,
    }
    serviceRelatorio.solicitarRelatorioPorSolicitanteIndividual(
      data,
      {
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/pdf",
        },
      }
    )
    .then(( response : any) => {
      const url = window.URL.createObjectURL(
        new Blob([response], { type: "application/pdf" })
      )
      window.open(url)
    }) 
    .catch((error:any) => {
      console.log(error)
    })
  }

  const solicitarRelatorioPorTipoPlacaPdf = () => {
      serviceRelatorio.solicitarRelatorioPorTipoPlaca(form, {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/pdf",
      },
    })
    .then(( response : any) => {
      const url = URL.createObjectURL(
        new Blob([response], { type: "application/pdf" })
      )
      window.open(url)
    }) 
    .catch((error:any) => {
      console.log(error)
    })
  }

  const solicitarRelatorioPorTipoPlacaDadosSolicitantePdf = () => {
    serviceRelatorio.solicitarRelatorioPorTipoPlacaDadosSolicitante(form, {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/pdf",
      },
    })
    .then(( response : any) => {
      const url = URL.createObjectURL(
        new Blob([response], { type: "application/pdf" })
      )
      window.open(url)
    })
    .catch((error:any) => {
      console.log(error)
    })
  }

  const solicitarRelatorioCsv = () => {
    serviceRelatorio.relatorioEstampagemCsv(form, {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    })
    .then((res:any) => {
      console.log(res)
      const url = new Blob([res], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })
      const link = document.createElement("a")
      link.href = window.URL.createObjectURL(url)
      link.setAttribute("download", "Relatorio" + ".csv")
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }) 
    .catch((error:any) => {
      console.error("Ocorreu um erro:", error.message);
    })
  }

  const solicitarRelatorioPorSolicitanteCsv = () => {
    serviceRelatorio.relatorioEstampagemCsvPorSolicitante(form, {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    })
    .then((res:any) => {
      const url = new Blob([res], { type: res })
      const link = document.createElement("a")
      link.href = window.URL.createObjectURL(url)
      link.setAttribute("download", "Relatorio" + ".csv")
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }) 
    .catch((error:any) => {
      console.error("Ocorreu um erro:", error.message);
    })
  }

  const solicitarRelatorioPorSolicitanteIndividualCsv = () => {
    const data = {
      nome: nome,
      dataInicial: form.dataInicial,
      dataFinal: form.dataFinal,
      format_relatory:form.format_relatory,
    }
    serviceRelatorio.solicitarRelatorioCsvPorSolicitanteIndividual(data, {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    })
    .then((res:any) => {
      console.log(res)
      const url = new Blob([res], { type: res })
      const link = document.createElement("a")
      link.href = window.URL.createObjectURL(url)
      link.setAttribute("download", "RelatorioIndividual" + ".csv")
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }) 
    .catch((error:any) =>  {
      console.error("Ocorreu um erro:", error.message);
    })
  }

  const selecionaRelatorioCsv = () => {
    if (selected === "A") {
      solicitarRelatorioCsv()
    }
    if (selected === "B") {
      solicitarRelatorioPorSolicitanteCsv()
    }
    if (selected === "C") {
      solicitarRelatorioPorSolicitanteIndividualCsv()
    }
  }

  const selecionaRelatorioPdf = () => {
    if (selected === "A") {
      solicitarRelatorioPdf()
    }
    if (selected === "B") {
      solicitarRelatorioPorSolicitantePdf()
    }
    if (selected === "C") {
      solicitarRelatorioPorSolicitanteIndividualPdf()
    }
    if (selected === "D") {
      solicitarRelatorioPorTipoPlacaPdf()
    }
    if (selected === "E") {
      solicitarRelatorioPorTipoPlacaDadosSolicitantePdf()
    }
    console.log(solicitarRelatorioPdf)
  }

  return (
    <>
      <div>
        <div className="rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-2">
          <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">
            Relatório de Estampagem
          </h2>
        </div>
        <div className="overflow-hidden bg-white/40 border border-gray-300 p-4 rounded-xl shadow-xl">
          <div className="xs:flex xs:grid-cols-2 zs:grid-cols-1 zs:grid p-2">
            <div className="xs:mr-3 zs:mb-4">
              <p className="font-bold">Data Inicial:</p>
              <input
              onChange={(e) => setForm({...form, dataInicial: e.target?.value} )}
              type="date"
              className="block h-11 rounded-md border-gray-400 p-4 border w-[13.5rem]"
              />
            </div>
            <div className="xs:ml-3">
              <p className="font-bold">Data Final</p>
              <input
                onChange={(e) => setForm({...form, dataFinal: e.target?.value} )}
                type="date"
                id="date"
                className="block h-11 rounded-md border-gray-400 p-4 border w-[13.5rem]"
              />
            </div>
          </div>
          <div className="mt-2 xs:flex xs:grid-cols-2 zs:grid-cols-1 zs:grid p-2">
            <div className="flex flex-col xs:mr-10 zs:mr-0">
              <h1 className="font-bold mt-2">Escolha o Tipo de Relatorio</h1>
              <Radio
                name="formato2"
                id="option1"
                label="Todas as Estampagens"
                onClick={() => setSelected("A")}
                crossOrigin={undefined}              
              />
              <Radio
                name="formato2"
                id="option2"
                label="Por Solicitantes Despachantes"
                onClick={() => setSelected("B")} 
                crossOrigin={undefined}              
              />
              <Radio
                name="formato2"
                id="option3"
                label="Por Solicitante individual"
                onClick={() => setSelected("C")} 
                crossOrigin={undefined}                
              />
              {selected === "C" && (
                <div className="px-4 md:my-2 w-80 ">
                  <Select 
                    value={nome}
                    onChange={(e) => setNome(e)}                    
                    label="Digite um solicitante valido da lista:" 
                    className=" rounded-md border text-gray-400"
                  >
                    {solicitantes.map((resp: any) => (
                      <Option 
                        key={resp} 
                        value={resp}
                        className="md:block">
                          {resp}
                      </Option>
                    ))}
                  </Select>
                  <svg
                      className="pointer-events-none absolute text-gray-400"
                      fill="currentColor"
                      aria-hidden="true"
                  >
                  </svg>
                </div>
              )}
          
              <Radio
                name="formato2"
                id="option4"
                label="Por Tipo de Placa"
                onClick={() => setSelected("D")} 
                crossOrigin={undefined}              
              />
              <Radio
                name="formato2"
                id="option5"
                label="Por Tipo de Placa com Dados Solicitante"
                onClick={() => setSelected("E")} 
                crossOrigin={undefined}              
              />
            </div>
            <div className="zs:ml-0 xs:ml-10 flex flex-col">
              <h1 className="font-bold mt-2">Formato de Impressão</h1>
                <Radio
                  name="formato1"
                  id="option6"
                  label="Retrato"
                  onClick={handleRetrato} 
                  crossOrigin={undefined}                
                />
                <Radio
                  name="formato1"
                  id="option7"
                  label="Paisagem"
                  onClick={handlePaisagem} 
                  crossOrigin={undefined}                
                />
            </div>
          </div>
          <div className="mt-2 ml-3 flex space-x-4">
            <Button
              className="bg-green-700 hover:bg-green-600 flex items-center"
              disabled={selected === 'D' || selected === 'E'}   onClick={selecionaRelatorioCsv}
            >
              <AiFillFileExcel size={20}/>
              <h1 className="ml-2 font-semibold">EXCEL</h1>
            </Button>
            <Button onClick={selecionaRelatorioPdf} className="bg-red-700 hover:bg-red-600 flex items-center">
              <BsFillFileEarmarkPdfFill size={18}/>
              <h1 className="ml-2">PDF</h1>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
