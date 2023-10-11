'use client'
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Collapse, Tabs, Tab, TabsHeader, TabsBody, TabPanel,
} from "@material-tailwind/react";
// import { Bars3CenterLeftIcon } from "@heroicons/react/20/solid";
import Image from 'next/image';
import React, { useState, useRef, useEffect, forwardRef } from 'react';
import {
    MdOutlineLogout,
} from 'react-icons/md'
import { LiaIndustrySolid } from "react-icons/lia"
import { BsCart3, BsBoxSeam } from "react-icons/bs"
import { AiOutlineDown,AiOutlineUp, AiOutlineUserAdd, AiOutlineHome } from "react-icons/ai"
import { IoSettingsOutline } from "react-icons/io5"
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { LiaCertificateSolid } from "react-icons/lia"

const fabricante = 'role_fabricate' //   role_datestamp / role_fabricate

export function Menu({ showNav, setShowNav }: { showNav: any, setShowNav: any }) {
    const [open, setOpen] = useState(false)
    const [subTopico, setSubTopico] = useState(false)
    const [type, setType] = React.useState("fabricante");

    const router = useRouter();
    const [open1, setOpen1] = useState(false)
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (route:any) => {
        router.push(route);
        setActiveButton(route);
    };
    const topicoContatos = () => {
        setOpen1(!open1)
    }
    const [open2, setOpen2] = useState(false)
    const topicoProfile = () => {
        setOpen2(!open2)
    }
    const [open3, setOpen3] = useState(false)
    const topicoAnalytics = () => {
        setOpen3(!open3)
    }
    const [open4, setOpen4] = useState(false)
    const topicoMessage = () => {
        setOpen4(!open4)
    }

    const modalRef = useRef<any>();

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const ativaTipoPessoaJuridica = () => {
    }

    const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 1000;


    const navList = (
      <ul className="flex flex-col mb-4 lg:items-center h-2 lg:gap-4">
        <Typography color="white" className="font-normal">
            Boa tarde Usuário
        </Typography>
      </ul>
    );

    return (
        <>
            <div
                className={`flex items-center h-10 px-2 justify-between transition-all duration-[400ms] text-blue-gray-900  bg-gradient-to-r from-gray-800 via-red-800 to-black ${
                    showNav ? "pl-52" : ""
                }`}
                // style={{height: 40}}
            >
                {/* <div className="pl-2 md:pl-20">
                    <Bars3CenterLeftIcon
                        className="h-6 w-6 cursor-pointer text-white"
                        onClick={() => setShowNav(!showNav)}
                    />
                </div> */}
                <div className="flex items-center gap-4">
                    <div className="sm:block">{navList}</div>
                    <Button variant="gradient" size="sm" className="sm:inline-block">
                        <span>Sair</span>
                    </Button>
                </div>
            </div>
            {isSmallScreen && showNav && (
                <div>
                    <div className="bg-gradient-to-b from-[#530000] via-[#A80606] to-[#530000] transition-all sidebar fixed flex flex-grow top-0 left-0 h-full w-72 z-50 flex-col overflow-y-auto lg:w-80 lg:left-0 peer-focus:left-0 peer-transition ease-out delay-150 duration-200">

                    <div className='relative flex justify-center items-center mb-8'>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#530000] to-transparent z-10"/>
                        <Image className="w-auto h-38 object-cover -z-40" src="/sidebar.png" width={'420'} height={'280'} alt='Imagem placas sidebar' />
                        <Image  src="/logo1.png" className="absolute items-center mt-36 justify-center flex z-10" width={'66'} height={'66'} alt='Logo dvr'/>
                    </div>
                    
                    <h1 className='text-center text-lg font-semibold text-white items-center justify-center flex mt-10 px-1'>Sistema de Rastreabilidade</h1>

                    <div className='mt-8 px-3 capitalize'>
                        {/* <Tabs value={type} className="rounded-lg overflow-auto ">
                        <TabsHeader className="relative bg-blue-400">
                            <Tab value="fabricante" onClick={() => setType("fabricante")}>
                            Fabricante
                            </Tab>
                            <Tab value="estampador" onClick={() => setType("estampador")}>
                            Estampador
                            </Tab>
                        </TabsHeader>
                        <TabsBody
                            className="!overflow-hidden "
                            animate={{
                                initial: {
                                x: type === "fabricante" ? 400 : -400,
                                },
                                mount: {
                                x: 0,
                                },
                                unmount: {
                                x: type === "fabricante" ? 400 : -400,
                                },
                            }}
                        > */}

                            {/* <TabPanel value='fabricante'> */}
            {/*                   
                            <hr className='mb-6 bg-gray-300 h-0.5 border-t-0'/>

                            <div onClick={topicoContatos} className='flex justify-start items-center gap-4 hover:bg-red-900 bg-[#C80202]/30 border-2 border-red-900 p-2 rounded-xl group cursor-pointer hover:shadow-lg m-auto'>
                                <AiOutlineUserAdd size={34} className='text-white'/>
                                <h3 className='text-lg text-white font-semibold'>Contatos</h3>
                                <button className="absolute right-6 p-2 flex items-center text-white">
                                {open1 ? <AiOutlineUp /> : <AiOutlineDown />}
                                </button>
                            </div>
                            {open1 && (
                                <div className='py-2 mb-6 justify-center items-center w-full flex bg-[#7C0000]'>
                                    <ul className='flex-col text-white text-base w-full'>
                                    <Link prefetch={false} href='/cadastros/usuario'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>Usuários</li>
                                    </Link>
                                    <Link prefetch={false} href='/cadastros/estampadores'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>Estampadores</li>
                                    </Link>
                                    <Link prefetch={false} href='/cadastros/empresa-nf'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>Empresa - NFe</li>
                                    </Link>
                                    <Link prefetch={false} href='/cadastros/certificado'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>Certificado</li>
                                    </Link>
                                    </ul>
                                </div>
                            )}
                            <div onClick={topicoProfile} className='mt-6 flex justify-start items-center gap-4 hover:bg-red-900 bg-[#C80202]/30 border-2 border-red-900 p-2 rounded-xl group cursor-pointer hover:shadow-lg m-auto'>
                                <BsCart3 size={30} className=' text-white'/>
                                <h3 className='text-lg  text-white font-semibold'>Compras</h3>
                                <button className="absolute right-6 p-2 flex items-center text-white">
                                {open2 ? <AiOutlineUp /> : <AiOutlineDown />}
                                </button>
                            </div>
                            {open2 && (
                                <div className='py-2 mb-6 justify-center items-center w-full flex bg-[#7C0000]'>
                                    <ul className='flex flex-col text-white text-base w-full text-center'>
                                    <Link prefetch={false} href='/compras/lotes'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>Comprar Lotes Serpro</li>
                                    </Link>
                                    <Link prefetch={false} href='/compras/consulta-lotes'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>Consulta Blanks por Lote</li>
                                    </Link>
                                    </ul>
                                </div>
                            )}
                            <div onClick={topicoAnalytics} className='mt-6 flex justify-start items-center gap-4 hover:bg-red-900 bg-[#C80202]/30 border-2 border-red-900 p-2 rounded-xl group cursor-pointer hover:shadow-lg m-auto'>
                                <LiaIndustrySolid size={36} className='text-white'/>
                                <h3 className='text-lg text-white font-semibold'>Produção</h3>
                                <button className="absolute right-6 p-2 flex items-center text-white"> {open3 ? <AiOutlineUp /> : <AiOutlineDown />} </button>
                            </div>
                            {open3 && (
                                <div className='py-2 mb-6 justify-center items-center w-full flex bg-[#7C0000]'>
                                    <ul className='flex flex-col text-white text-base w-full'>
                                    <Link prefetch={false} href='/producao/consultar'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>Consultar Caixa Estoque</li>
                                    </Link>
                                    <Link prefetch={false} href='/producao/criar'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>Criar Caixa</li>
                                    </Link>
                                    <Link prefetch={false} href='/producao/ordem-producao'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>Ordem de Produção</li>
                                    </Link>
                                    <Link prefetch={false} href='/producao/pedido-producao'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>Pedido de Produção</li>
                                    </Link>
                                    </ul>
                                </div>
                            )}
                            <div onClick={topicoMessage} className='mt-6 flex justify-start items-center gap-4 hover:bg-red-900 bg-[#C80202]/30 border-2 border-red-900 p-2 rounded-xl group cursor-pointer hover:shadow-lg m-auto'>
                                <BsBoxSeam size={28} className='text-white mx-2'/>
                                <h3 className='text-lg text-white font-semibold'>Estoque</h3>
                                <button className="absolute right-6 p-2 flex items-center text-white"> {open4 ? <AiOutlineUp /> : <AiOutlineDown />} </button>
                            </div>
                            {open4 && (
                                <div className='py-2 mb-6 justify-center items-center w-full flex bg-[#7C0000]'>
                                    <ul className='flex flex-col text-white text-base w-full'>
                                    <Link prefetch={false} href='/estoque/consulta-estoque-estampador'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>Consulta Estoque</li>
                                    </Link>
                                    </ul>
                                </div>
                            )} */}
                            {/* </TabPanel> */}

                            {/* <TabPanel value='estampador'> */}
                            <div onClick={() => handleButtonClick('/')} className={`flex my-6 p-2 justify-start items-center gap-4 hover:bg-red-900 bg-[#C80202]/30 border-2 border-red-900 rounded-xl group cursor-pointer hover:shadow-lg m-auto`}>
                                <AiOutlineHome size={32} className='text-white'/>
                                <h3 className='text-lg text-white font-semibold '>Tela Inicial</h3>
                            </div>
                            <div 
                                onClick={() => handleButtonClick('/cadastros')} 
                                className={`${activeButton === '/cadastros' ? 'text-white' : ''} bg-none flex justify-start mb-6 items-center gap-4  hover:bg-red-900 bg-[#C80202]/30 border-2 border-red-900 rounded-xl group cursor-pointer hover:shadow-lg m-auto px-3`}
                            >
                                <AiOutlineUserAdd size={34} className='text-white'/>
                                <h3 className='text-lg text-white font-semibold'>Cadastrar Contatos</h3>
                            </div>

                            <hr className='mb-6 bg-gray-300 h-0.5 border-t-0'/>

                            <div onClick={topicoAnalytics} className='flex justify-start items-center gap-4 hover:bg-red-900 bg-[#C80202]/30 border-2 border-red-900 p-2 rounded-xl group cursor-pointer hover:shadow-lg m-auto'>
                                <LiaIndustrySolid size={34} className='text-white'/>
                                <h3 className='text-lg text-white font-semibold'>Produção</h3>
                                <button className="absolute right-6 p-2 flex items-center text-white"> {open3 ? <AiOutlineUp /> : <AiOutlineDown />} </button>
                            </div>
                            {open3 && (
                                <div className='py-2 mb-6 justify-center items-center w-full flex bg-[#7C0000]'>
                                    <ul className='flex flex-col text-white text-base w-full'>
                                    <Link prefetch={false} href='/producao/cadastrar-ae'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>
                                        Estampar Placa
                                        </li>
                                    </Link>  
                                    <Link prefetch={false} href='/producao/lista-aes'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>
                                            Lista de Aes                           
                                        </li>
                                    </Link>
                                    <Link prefetch={false} href='/relatorios/notas-fiscais'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>
                                            Relatorio de Notas Fiscais
                                        </li>
                                    </Link>
                                    <Link prefetch={false} href='/relatorios/cupons-fiscais'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>
                                        Relatorio de Cupons Fiscais
                                        </li>
                                    </Link>
                                    <Link href='/relatorios/estampagem'>  
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>
                                        Relatorio de Estampagem
                                        </li>
                                    </Link>  
                                    </ul>
                                </div>
                            )}

                            <div onClick={topicoMessage} className='mt-6 flex justify-start items-center gap-4 hover:bg-red-900 bg-[#C80202]/30 border-2 border-red-900 p-2 rounded-xl group cursor-pointer hover:shadow-lg m-auto'>
                                <BsBoxSeam size={26} className='text-white mx-2'/>
                                <h3 className='text-lg text-white font-semibold'>Estoque</h3>
                                <button className="absolute right-6 p-2 flex items-center text-white"> {open4 ? <AiOutlineUp /> : <AiOutlineDown />} </button>
                            </div>
                            {open4 && (
                                <div className='py-2 mb-6 justify-center items-center w-full flex bg-[#7C0000]'>
                                    <ul className='flex flex-col text-white text-base w-full'>
                                    <Link prefetch={false} href='/estoque/confirmar-recebimento-caixa'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>
                                        Confirmar recebimento caixa
                                        </li>
                                    </Link>
                                    <Link prefetch={false} href='/estoque/consulta-lotes-recebidos'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>
                                        Consultar lotes recebidos
                                        </li>
                                    </Link>
                                    <Link prefetch={false} href='/estoque/consulta-blank'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>
                                        Consultar Blanks
                                        </li>
                                    </Link>
                                    {/* <Link prefetch={false} href='/estoque/consulta-estoque-estampador'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>
                                        Consulta estoque do estampador
                                        </li>
                                    </Link> */}
                                    <Link prefetch={false} href='/estoque/inativar-serial-estampador'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>
                                        Inativar Blanks Estampador
                                        </li>
                                    </Link>
                                    <Link prefetch={false} href='/estoque/devolver-placa-fabricante'>
                                        <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>
                                        Devolver Blanks ao fabricante
                                        </li>
                                    </Link>
                                    </ul>
                                </div>
                            )}
                            <Link href='/estampadores/certificado'>
                                <div onClick={topicoProfile} className='mt-6 flex justify-start items-center gap-4 hover:bg-red-900 bg-[#C80202]/30 border-2 border-red-900 p-2 rounded-xl group cursor-pointer hover:shadow-lg m-auto'>
                                <LiaCertificateSolid size={28} className='text-white ml-1'/>
                                <h3 className='text-lg text-white font-semibold'>Certificado</h3>
                                </div>
                            </Link>
                            {/* </TabPanel> */}
                        {/* </TabsBody> */}
                        {/* </Tabs> */}
                    </div>

                    <div className='flex hover:bg-red-900 items-center gap-4 px-12 p-2 group cursor-pointer hover:shadow-lg mt-auto'>
                        <MdOutlineLogout size={32} className='text-white'/>
                        <h3 className='text-xl text-white font-semibold'>Logout</h3>
                    </div>
                    </div>
                    <div className={`ml-60 ${showNav ? "pl-60" : ""}`}>
                        {/* Main content */}
                    </div>
                </div>
            )}

        </>
    );
}