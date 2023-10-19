"use client"
import { useEffect, useState } from 'react'
import { Input, Card, Dialog, Typography, DialogHeader, Tabs, TabsBody, TabPanel, TabsHeader, Tab } from '@material-tailwind/react'
import { MdDeleteForever } from 'react-icons/md'
import React from 'react'
import Image from 'next/image'
import { useEstampadorService } from '../../../src/services/estampadores/estampadoresService'
// import { useEstampadorService } from '@/services/estampadores/estampadoresService'


export default function CertificadoEstampador() {
  // service
  const service = useEstampadorService()
  
  const [senha, setSenha] = useState<any>()
  const [file, setFile] = useState<File | null>(null);
  const [selectedFileName, setSelectedFileName] = useState(""); // Estado para armazenar o nome do arquivo selecionado

  const [certificate, setCertificate] = useState<any>();
  const [open, setOpen] = useState(false);
  const [type, setType] = React.useState("anexarArquivo");
  const [selectedFile, setSelectedFile] = useState<File[]>([]);
  const handleOpenUpload = () => setOpen(!open);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile);
    const files = event.target.files
    if (files && files.length > 0) {
      setSelectedFileName(files[0].name);
    }
  };
  const deleteFile = (index: any) => {
    const updatedFiles = [...selectedFile];
    updatedFiles.splice(index, 1);
    setSelectedFile(updatedFiles);
  };
  useEffect(() => {
    getCertificado()
  }, [])

  const getCertificado = () => {
    service.getCertificate()
      .then((res) => {
        setCertificate(res.certificado);
        console.log(res.certificado)
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }

  const cadastrarCertificate = () => {
    if (file && senha) {
      const certificado = new FormData();
      certificado.append("file", file);
      certificado.append("senha", senha);

      service.sendCertificado(certificado)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error, 'error');
        });
    }
  }

  return (
    <>
      <Card className="border flex shadow-xl py-3 px-6 rounded-lg overflow-hidden">
        <div className='flex justify-initial grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 py-8 pl-4'>
          <p className="mr-6 font-bold text-2xl text-gray-800 items-center mt-1.5">Certificado: </p> {/* sm:text-2xl */}
          <div className='w-96'>
            <Input
              className="h-20 text-xl font-semibold items-center !border !border-gray-600 text-gray-900 shadow-xl shadow-gray-900/5 focus:!border-indigo-900 focus:!border-t-indigo-900 focus:ring-indigo-900/10"
              value={certificate}
              labelProps={{
                className: "hidden",
              }}
              size="lg"
              disabled crossOrigin={undefined}            />
          </div>
          <button
            className="px-6 ml-10 py-2 w-52 rounded-lg bg-[#0284c7] hover:bg-[#38bdf8] font-bold text-white shadow-xl transition ease-in-out duration-200 translate-10"
            onClick={handleOpenUpload}
          >
            Enviar Certificado
          </button>
        </div>
      </Card>

      <Dialog open={open} handler={handleOpenUpload} className='absolute top-0' size={'sm'}>
        <Tabs value={type} className="overflow-auto px-1">
          <TabsHeader className="relative mb-2">
            <Tab value="anexarArquivo" onClick={() => setType("anexarArquivo")}>
              Escolher arquivos
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-hidden"
            animate={{
              initial: {
                x: type === "anexarArquivo" ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === "anexarArquivo" ? 400 : -400,
              },
            }}
          >
            <TabPanel value="anexarArquivo" className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center gap-x-4">
                <div className="md:mt-2 xl:mr-0 ">
                  <label
                    htmlFor="large_size"
                    className="block w-full bg-gray-200 rounded-lg px-1 py-1  cursor-pointer text-center border-2 border-dashed border-gray-400"
                  >
                    {selectedFileName || "Adicionar Anexo"}

                    <div>
                      <input
                        className="hidden"
                        id="large_size"
                        type="file"
                        onChange={handleFileChange}
                      />
                    </div>
                  </label>
                </div>
                <div className="mt-2">
                  <Input
                    label="Senha:"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)} 
                    crossOrigin={undefined}                  >

                  </Input>
                </div>
                <button
                  className="px-2 py-2 mt-3 rounded-lg bg-[#0284c7] hover:bg-[#0284c7] font-bold text-white"
                  onClick={cadastrarCertificate}
                >
                  Enviar Certificado
                </button>
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </Dialog>
    </>
  )
}