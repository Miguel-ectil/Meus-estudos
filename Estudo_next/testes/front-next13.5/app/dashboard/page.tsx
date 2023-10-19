"use client"
import { Button, Card, Typography, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useState } from "react";
// import BarChart from "@/components/Charts/BarChart";
// import VerticalBarChart from "@/components/Charts/VerticalBarChart"
// import React from 'react';
// import GradientChart from "@/components/Charts/ChartGradient";
// import DoughnutChart from "@/components/Charts/DoughnutChart";
import { AiFillCar } from "react-icons/ai";
import { FaMotorcycle } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import {AiOutlineCheckCircle} from "react-icons/ai"
import {PiWarningCircleBold} from "react-icons/pi"
import { useRouter } from "next/navigation";

export default function Dashboard() {   
  const router = useRouter();
  const [estoqueCarro, setEstoqueCarro] = useState("112")
  const [estoqueDias, setEstoqueDias] = useState("10")
  const [diasCertVencimento, setDiasCertVencimento] = useState("105")
  const [autorizacoesAbertas, setAutorizacoesAbertas] = useState("0")
  const [autorizacoesFinalHoje, setAutorizacoesFinalHoje] = useState("55")
  const [autorizacoesFinal15dias, setAutorizacoesFinal15dias] = useState("125")
  const [autorizacoesFinalMes, setAutorizacoesFinalMes] = useState("250")

  // const [type, setType] = React.useState("HOJE");

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {/* <a href="../estoque/confirmar-recebimento-caixa"> */}
        <button
          className="flex justify-center px-2 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-1 gap-2 overflow-hidden" onClick={() => router.push('../estoque/confirmar-recebimento-caixa')}
        >
        Receber Placas - Fabricante
        </button>
      {/* </a> */}
      <button
        className="flex justify-center px-2 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-1 overflow-hidden" onClick={() => router.push('/producao/cadastrar-ae')}
      >
        {/* <a href="../producao/cadastrar-ae"> */}
        Estampar Placas 
        {/* </a> */}
      </button>
      <button
        className="flex justify-center px-2 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-1 overflow-hidden" onClick={() => router.push('/producao/lista-aes')}
      >
        {/* <a href="producao/lista-aes"> */}
        Listagem de AE
        {/* </a> */}
      </button>
      {/* <a href="../cadastros"> */}
        <button
          className="flex justify-center px-2 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 font-bold text-white shadow-xl transition ease-in-out duration-200 translate-1 overflow-hidden" onClick={() => router.push('/cadastros')}
        >
          Proprietários & Solicitantes
        </button>
      {/* </a> */}
    </div>
        // <>
        // <div className="sm:grid xl:flex flex-col md:flex-row justify-between gap-4 xl:grid-cols-2 2xl-grid-cols-2 sm:grid-cols-1 mb-4">
        //     <Card className="2xl:w-4/5 xl:w-3/5 xl:px-3 bg-white/40">
        //         <Typography variant="h6" className="mt-4 ml-6">
        //                 ESTOQUE & PROJEÇÃO de Estoque
        //         </Typography>
        //         <div className="flex justify-around my-4 h-full sm:grid-cols-3 sm:px-8 xl:px-0">
        //              <Card className="2xl:px-0 xl:px-4 w-60 mr-4 bg-white/40 py-4 items-center overflow-hidden">
        //                 <div className="flex-shrink-0 rounded-full p-4 h-14 w-14 justify-center flex items-center bg-blue-800">
        //                     <AiFillCar className="text-white" size={44}/>
        //                 </div>
        //                 <Typography className="text-center justify-center my-2" variant="h5">CARRO</Typography>
        //                 <Typography className="text-center justify-center" variant="h3">{estoqueCarro}</Typography>
        //                 <Typography className="text-center justify-center" variant="h6">EM ESTOQUE para</Typography>
        //                 <Typography className="text-center justify-center 2xl:mt-4 xl:mt-2" variant="h3">{estoqueDias}</Typography>
        //                 <Typography className="text-center justify-center" variant="h6">Dias Aproximadamente</Typography>
        //             </Card>
        //             <Card className="2xl:px-0 xl:px-4 w-60 mx-2 bg-white/40 py-4 items-center overflow-hidden">
        //                 <div className="flex-shrink-0 rounded-full p-4 h-14 w-14 justify-center flex items-center bg-blue-800">
        //                     <FaMotorcycle className="text-white" size={44}/>
        //                 </div>
        //                 <Typography className="text-center justify-center my-2" variant="h5">MOTO</Typography>
        //                 <Typography className="text-center justify-center" variant="h3">{estoqueCarro}</Typography>
        //                 <Typography className="text-center justify-center" variant="h6">EM ESTOQUE para</Typography>
        //                 <Typography className="text-center justify-center 2xl:mt-4 xl:mt-2" variant="h3">{estoqueDias}</Typography>
        //                 <Typography className="text-center justify-center" variant="h6">Dias Aproximadamente</Typography>
        //             </Card>
        //             <Card className="2xl:px-0 xl:px-4 w-60 ml-4 bg-white/40 py-4 overflow-hidden items-center">
        //                 <div className="flex-shrink-0 rounded-full p-4 h-14 w-14 items-center flex justify-center bg-blue-800">
        //                     <IoCarSport className="text-white" size={44}/>
        //                 </div>
        //                 <Typography className="text-center justify-center my-2" variant="h5">MINI</Typography>
        //                 <Typography className="text-center justify-center" variant="h3">{estoqueCarro}</Typography>
        //                 <Typography className="text-center justify-center" variant="h6">EM ESTOQUE para</Typography>
        //                 <Typography className="text-center justify-center 2xl:mt-4 xl:mt-2" variant="h3">{estoqueDias}</Typography>
        //                 <Typography className="text-center justify-center" variant="h6">Dias Aproximadamente</Typography>
        //             </Card>
        //         </div>
        //     </Card>

        //     <div className="h-auto 2xl:w-1/3 xl:w-1/2 grid xl:grid-cols-1 sm:grid-cols-2">
        //         <Card className="mb-2 sm:mr-2 xl:mr-0 pt-2 h-22 px-4 bg-white/40">
        //             <Typography variant="h6" className="justify-center uppercase flex">Autorizações Finalizadas</Typography>
        //             <Tabs value={type} className="rounded-lg overflow-auto px-4">
        //                 <TabsHeader className="mt-1 relative bg-blue-400">
        //                     <Tab value="HOJE" onClick={() => setType("fabricante")}>
        //                         Hoje
        //                     </Tab>
        //                     <Tab value="15 DIAS" onClick={() => setType("estampador")}>
        //                         15 Dias
        //                     </Tab>
        //                     <Tab value="MÊS" onClick={() => setType("estampador")}>
        //                         Mês
        //                     </Tab>
        //                 </TabsHeader>
        //                 <TabsBody
        //                     className="!overflow-hidden "
        //                     animate={{
        //                         initial: {
        //                         x: type === "fabricante" ? 400 : -400,
        //                         },
        //                         mount: {
        //                         x: 0,
        //                         },
        //                         unmount: {
        //                         x: type === "fabricante" ? 400 : -400,
        //                         },
        //                     }}
        //                 >
        //                         <TabPanel value='HOJE'>
        //                             <div className="flex xl:grid-cols-2 justify-between">
        //                                 <div className="border items-center rounded-xl w-20 bg-green-600 text-white justify-center flex font-bold text-xl">
        //                                     {autorizacoesFinalHoje}
        //                                 </div>
        //                                 <div>
        //                                     <AiOutlineCheckCircle size={40} className="text-green-600 items-center flex"/>
        //                                 </div>
        //                             </div>
        //                         </TabPanel>
        //                         <TabPanel value='15 DIAS'>
        //                             <div className="flex xl:grid-cols-2 justify-between">
        //                                 <div className="border items-center rounded-xl w-20 bg-green-600  text-white justify-center flex font-bold text-xl">
        //                                     {autorizacoesFinal15dias}
        //                                 </div>
        //                                 <div>
        //                                     <AiOutlineCheckCircle size={40} className="text-green-600 items-center flex mr-6"/>
        //                                 </div>
        //                             </div>
        //                         </TabPanel>
        //                         <TabPanel value='MÊS'>
        //                             <div className="flex xl:grid-cols-2 justify-between">
        //                                 <div className="border items-center rounded-xl w-20 bg-green-600  text-white justify-center flex font-bold text-xl">
        //                                     {autorizacoesFinalMes}
        //                                 </div>
        //                                 <div>
        //                                     <AiOutlineCheckCircle size={40} className="text-green-600 items-center flex"/>
        //                                 </div>
        //                             </div>
        //                         </TabPanel>
        //                 </TabsBody>
        //             </Tabs>
        //         </Card>
        //         <Card className="sm:ml-2 xl:ml-0 mb-2 py-2 bg-white/40">
        //             <Typography variant="h6" className="justify-center uppercase flex">Autorizações em Aberto</Typography>
        //             <div className="mx-10 flex sm:py-6 sm:px-6 xl:py-0 xl:px-0 xl:grid-cols-2 justify-between">
        //                 <div className="flex rounded-xl items-center w-20 bg-yellow-600  text-white justify-center font-bold text-xl">
        //                     {autorizacoesAbertas}
        //                 </div>
        //                 <div>
        //                     <PiWarningCircleBold size={40} className="text-yellow-600 items-center flex"/>
        //                 </div>
        //             </div>
        //         </Card>
        //         <Card className="py-2 bg-white/40">
        //             <Typography variant="h6" className="justify-center uppercase flex">Certificado</Typography>
        //             <Typography variant="h6" className="justify-center flex items-center">Dias Restantes para o Vencimento</Typography>
        //             <div className="justify-between items-center flex mx-4">
        //                 <div className="ml-6 justify-center flex border items-center rounded-xl h-12 w-24 bg-blue-800">
        //                     <p className="text-white font-bold text-xl">{diasCertVencimento}</p>
        //                 </div>
        //                 <div className="my-1 w-24 h-20 flex-shrink-0 items-center"><DoughnutChart/></div>
        //             </div>
        //         </Card>
        //     </div>
        // </div>

        // <div className="sm:grid xl:flex flex-col md:flex-row justify-between gap-4 xl:grid-cols-2 2xl-grid-cols-2 sm:grid-cols-1 mb-4">
        //     <Card className="w-full bg-white/40 p-4">
        //         <h1 className="font-bold uppercase ml-4">Placas Estampadas</h1>
        //         <BarChart/>
        //     </Card>
        // </div>

        // <div className='sm:grid 2xl:flex flex-col md:flex-row justify-between gap-4 xl:grid-cols-2 2xl-grid-cols-2 sm:grid-cols-1 mb-4'>
        //     <Card className="sm:w-full bg-white/40 xl:mr-4 sm:mb-3 xl:mb-0 sm:mr-0 p-4">
        //         <h1 className="font-bold uppercase ml-4">Tipo Placas Vendidas</h1>            
        //         <VerticalBarChart/>
        //     </Card>
        //     <Card className="sm:w-full bg-white/40 xl:ml-4 sm:ml-0 sm:mt-3 xl:mt-0 p-4">
        //         <h1 className="font-bold uppercase ml-4">Volume das Vendas Mensais</h1>            
        //         <GradientChart/>
        //     </Card>
        // </div>
        // </>
    )
}