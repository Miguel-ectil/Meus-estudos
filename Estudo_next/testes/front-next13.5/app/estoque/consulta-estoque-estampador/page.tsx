"use client"
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import { Typography, Card, Input } from '@material-tailwind/react';
import { useEstoqueService } from '../../../src/services/relatorio/estoqueService';

export default function Consulta_Estoque() {
    const [nome, setNome] = useState<any>()
    const [cnpj, setCnpj] = useState<any>();
    const [visible, setVisible] = useState(false);
    
    const ConsultaEstoque = useEstoqueService();
    const [consultaEstoque, setConsultaEstoque] = useState<any[]>([]);

    const consultaEstoqueEstampador = () => {
        ConsultaEstoque.getQuantidPlacas(cnpj)
        .then((resp: any) => {
            console.log(resp.data)
            setNome(resp.data.Estampador)
            setConsultaEstoque(resp.data.placas);
            setVisible(true);
        })
        .catch((error: any) => {
            console.error("CNPJ não Encontrado")
        })
    };

    const TABLE_HEAD = ["Tipo Placa", "Disponiveis", "Transportes", "Inativas"];

    return (
        <>
            <div className='rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-3'>
                <h2 className='p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased'>Consultar Estoque</h2>
            </div>
            <div className="bg-white/40 border p-4 rounded-xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <div className="flex flex-col">
                        <div className="flex w-80">
                            <Input
                                label="CNPJ do Estampador:"
                                className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
                                value={cnpj}
                                onChange={(e) => setCnpj(e.target.value)} 
                                crossOrigin={undefined}                            
                            />
                            <div className='relative'>
                                <button
                                    onClick={consultaEstoqueEstampador}
                                    className="absolute right-0 h-10 px-4 pt-1 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg">
                                    <BsSearch size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {visible && (
                <>
                    <Card className="bg-white/40 overflow-x-auto rounded-xl mt-4 shadow-xl px-2 pb-4">

                        <div  className='flex justify-between mt-2 mb-4'>
                            <span className="bg-blue-gray-50/50 text-gray-700 text-lg font-semibold px-4 py-2 rounded dark:bg-blue-200 dark:text-white-800 items-center flex ml-2 overflow-hidden">
                                Quantidade de placas
                            </span>
                            <div className='flex items-center mt-1.5 mr-20'>
                                <h1 className='text-lg font-semibold leading-6 text-gray-700 flex items-center'>
                                    Estampador:
                                </h1>
                                <h4 className='ml-3 mr-10 font-semibold leading-6 text-lg text-gray-900 capitalize items-center '>
                                    {nome}
                                </h4>
                            </div>
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
                                {consultaEstoque.map((item, index) => (
                                    <tr key={index} className="border-b even:bg-blue-gray-50/50">
                                        <td className="p-4 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {item.TipoPlaca}
                                            </Typography>
                                        </td>
                                        <td className="p-4 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {item.Disponiveis}
                                            </Typography>
                                        </td>
                                        <td className="p-4 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {item.Transportes}
                                            </Typography>
                                        </td>
                                        <td className="p-4 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {item.Inativas}
                                            </Typography>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                </>
            )}
        </>
    )
}