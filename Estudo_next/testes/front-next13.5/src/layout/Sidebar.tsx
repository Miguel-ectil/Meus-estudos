"use client"
import Image from 'next/image';
import React, { useState, useRef, useEffect, forwardRef } from 'react';
import {
  MdOutlineLogout,
} from 'react-icons/md'
import { LiaIndustrySolid } from "react-icons/lia"
import { BsCart3, BsBoxSeam } from "react-icons/bs"
import { AiOutlineDown,AiOutlineUp, AiOutlineUserAdd, AiOutlineHome } from "react-icons/ai"
import { LiaCertificateSolid } from "react-icons/lia"
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import {Tab, TabPanel, Tabs, TabsBody, TabsHeader} from "@material-tailwind/react";

const fabricante = 'role_fabricate' //   role_datestamp / role_fabricate

const Sidebar = forwardRef((showNav: any , ref: any)  => {
  const [open, setOpen] = useState(false)
  const [subTopico, setSubTopico] = useState(false)
  const [type, setType] = React.useState("fabricante");


  const abreSubTopicos = () => {
    setSubTopico(!subTopico)
  }
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

  const modalRef = useRef<any>()

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
  }, [])

  return(
    <>
        <div
          ref={ref}
          className={`sidebar flex flex-grow flex-col h-screen fixed overflow-y-auto bg-gradient-to-b from-[#530000] via-[#A80606] to-[#530000] w-1/5 top-0 -left-96 lg:w-0 lg:left-0
   peer-focus:left-0 peer-transition ease-out delay-150 duration-200 z-20 `}
          style={{ 
            width: '254px',
          }}
        >

          <div className='relative flex justify-center items-center mb-8'>
            <div className="absolute inset-0 bg-gradient-to-t from-[#530000] to-transparent z-10"/>
            <Image className="w-auto h-38 object-cover -z-40" src="/sidebar.png" width={'420'} height={'280'} alt='Imagem placas sidebar' loading="lazy"/>
            <Image  src="/logo1.png" className="absolute items-center mt-32 justify-center flex z-10 md:p-1 2xl:p-0" width={'66'} height={'66'} alt='Logo dvr' loading="lazy"/>
          </div>
          
          <h1 className='text-center 2xl:text-lg md:text-md font-semibold text-white items-center justify-center flex mt-10 2xl:px-1 sm:px-2.5'>Sistema de Rastreabilidade</h1>

        <div className='2xl:mt-8 md:mt-2 md:px-6 2xl:px-3 capitalize'>
          <div onClick={() => handleButtonClick('/')} className={`flex md:my-2.5 2xl:my-6 p-2 justify-start items-center gap-4 hover:bg-red-900 bg-[#C80202]/30 border-2 border-red-900 rounded-xl group cursor-pointer hover:shadow-lg m-auto`}>
            <AiOutlineHome size={32} className='text-white' />
            <h3 className='md:text-md 2xl:text-lg text-white font-semibold '>Tela Inicial</h3>
          </div>
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
              >  */}

               {/* <TabPanel value='fabricante'>  */}
               {fabricante !== 'role_fabricate' && (
                  <>
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
                    )}
                  </>
                )}
               {/* </TabPanel> */}

                {/* <TabPanel value='estampador'> */}
                {fabricante === 'role_fabricate' && (
                  <>
                    <div 
                      onClick={() => handleButtonClick('/cadastros')} 
                      className={`${activeButton === '/cadastros' ? 'text-white' : ''} bg-none py-2 flex justify-start md:mb-4 2xl:mb-6 items-center gap-4  hover:bg-red-900 bg-[#C80202]/30 border-2 border-red-900 rounded-xl group cursor-pointer hover:shadow-lg m-auto px-2`}
                    >
                      <AiOutlineUserAdd size={34} className='text-white'/>
                      <h3 className='md:text-md 2xl:text-md text-white font-semibold'>Cadastrar Contatos</h3>
                    </div>

                    <hr className='md:mb-4 2xl:mb-6 bg-gray-300 h-0.5 border-t-0'/>

                    <div onClick={topicoAnalytics} className='p-2 flex justify-start items-center gap-4 hover:bg-red-900 bg-[#C80202]/30 border-2 border-red-900 rounded-xl group cursor-pointer hover:shadow-lg m-auto'>
                      <LiaIndustrySolid size={34} className='text-white'/>
                      <h3 className='md:text-md 2xl:text-lg text-white font-semibold'>Produção</h3>
                      <button className="absolute right-6 2xl:p-2 md:p-5 flex items-center text-white"> {open3 ? <AiOutlineUp /> : <AiOutlineDown />} </button>
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
                            <Link prefetch={false} href='/relatorios/estampagem'>  
                              <li className='inline-block w-full p-4 rounded-lg hover:bg-[#550000]'>
                                Relatorio de Estampagem
                              </li>
                            </Link>  
                          </ul>
                        </div>
                    )}

                    <div onClick={topicoMessage} className='md:mt-2.5 2xl:mt-6 flex justify-start items-center gap-4 hover:bg-red-900 bg-[#C80202]/30 border-2 border-red-900 p-2.5 rounded-xl group cursor-pointer hover:shadow-lg m-auto'>
                      <BsBoxSeam size={26} className='text-white mx-1'/>
                      <h3 className='md:text-md 2xl:text-lg text-white font-semibold'>Estoque</h3>
                      <button className="absolute right-6 2xl:p-2 md:p-5 flex items-center text-white"> {open4 ? <AiOutlineUp /> : <AiOutlineDown />} </button>
                    </div>
                    {open4 && (
                        <div className='py-2 md:mb-2.5 2xl:mb-6 justify-center items-center w-full flex bg-[#7C0000]'>
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
                    <Link prefetch={false} href='/estampadores/certificado'>
                      <div onClick={topicoProfile} className='md:mt-2.5 2xl:mt-6 2xl:mb-0 md:mb-12 flex justify-start items-center gap-4 hover:bg-red-900 bg-[#C80202]/30 border-2 border-red-900 p-2 rounded-xl group cursor-pointer hover:shadow-lg m-auto'>
                        <LiaCertificateSolid size={28} className='text-white ml-1'/>
                        <h3 className='md:text-md 2xl:text-lg text-white font-semibold'>Certificado</h3>
                      </div>
                    </Link>
                  </>
                )}
                {/* </TabPanel>  */}
              {/* </TabsBody>  */}
             {/* </Tabs> */}
          </div>

          <div className='flex hover:bg-red-900 items-center gap-4 px-12 p-2 group cursor-pointer hover:shadow-lg mt-auto'>
            <MdOutlineLogout size={32} className='text-white'/>
            <h3 className='text-xl text-white font-semibold'>Logout</h3>
          </div>
        </div>
    </>
  )
})

Sidebar.displayName = "Sidebar";
export default Sidebar;
