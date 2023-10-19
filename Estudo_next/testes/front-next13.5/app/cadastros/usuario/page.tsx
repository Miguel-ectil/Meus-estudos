"use client"

import { Input, Card, Typography, Button, IconButton, DialogFooter, DialogHeader, Dialog, DialogBody, Select, Option } from "@material-tailwind/react";
import { BsSearch } from "react-icons/bs";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { useState, Fragment, useEffect } from 'react';
import { MdDeleteForever } from "react-icons/md";
// import { useLoginService } from '../../../services/user/userService';
// import { CadastroUser } from '../../../interfaces/cadastros/cadastros-user';
// import { useEstampadorService } from '../../../services/estampadores/estampadoresService'

export default function Cadastro_Usuario() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [filtrarValor, setFiltrarValor] = useState('');
  const TABLE_HEAD = ["ID Estampador", "Nome", "Nome de Usuário", "Email", "Edit", "Deletar Usuario"];

  const [email, setEmail] = useState<any>('')
  const [password, setPassword] = useState<any>('')
  const [nome, setNome] = useState<any>('')
  const [nomes_estampadores, setNomeEstampadores] = useState<any>('')
  const [username, setUsername] = useState<any>('')
  const [phone, setPhone] = useState<any>('')
  const [cnpj, setCnpj] = useState<any>('')
  const [id_estampadores, setIdEstampadores] = useState<any>('')
  const [bairro , setBairro] = useState<any>(null)
  const [cep , setCep] = useState<string>("")
  const [cidade , setCidade] = useState<any>(null)
  const [complemento , setComplemento] = useState<string>("")
  const [id , setId] = useState<any>(null)
  const [logradouro , setlogradouro] = useState<any>(null)
  const [nomeFantasia , setiNomeFantasia] = useState<any>(null)
  const [numero , setNumero] = useState<any>(null)
  const [uf , setUf] = useState<any>(null)
  const [visible, setVisible] = useState(false)
  const [todosDados, setTodosDados] = useState<any[]>([])
  const [getId, setGetId] = useState<any>()

  // paginação tabela
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPaginas = Math.ceil(todosDados.length / itemsPerPage)
  const indiceInicial = (paginaAtual - 1) * itemsPerPage

  // const serviceRegister = useLoginService()
  // const serviceGet = useEstampadorService()

  const [form, setForm] = useState<any>({
    nome: '',
    username: '',
    email: '',
    phone: '',
    id_estampadores: null
  })
  const atualizarUsuarioModal = async (id:any, username:any, nome:any, telefone:any, email:any ) => {
    setOpen(!open);
    setGetId(id)
    setForm({
      ...form,
      username: username,
      nome: nome,
      phone: telefone,
      email: email,
      id_estampadores: id 
    })
  }

  // const apagarUsuario = (id:any) => {
  //   serviceRegister.deleteUser(id)
  //   .then((res:any) => {
  //     setTodosDados(res[0])
  //   })
  //   .catch ((error:any) => {
  //     console.log(error)
  //   })
  // }


  // Filtro de pesquisa da tabela
  const handleFilterChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setFiltrarValor(value);
  };
  const handleClearFilter = () => {
    setFiltrarValor('');
  };
  const filteredRows = todosDados.filter((row) =>
    Object.values(row).some((value:any) =>
      value.toString().toLowerCase().includes(filtrarValor.toLowerCase())
    )
  );

  // Paginação da tabela
  const anterior = () => {
    setPaginaAtual((paginaAnterior) => paginaAnterior - 1);
  };
  const proxima = () => {
    setPaginaAtual((proximaPagina) => proximaPagina + 1);
  };
  const trocarPagina = (numeroPagina: any ) => {
    setPaginaAtual(numeroPagina);
  };
  const numerosPaginas = Array.from({ length: totalPaginas }, (_, idx) => idx + 1);

  const ordemRenderizacao = ['id', 'nome', 'username', 'email'];

    return (
      <div>
        <div className="rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl mb-3">
          <h2 className="p-5 font-mono text-1xl font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased">Cadastros de Usuarios</h2>
        </div>
      <Card className="bg-white/40 border p-4 rounded-xl shadow-xl overflow-hidden">
        <div className="lg:w-80 zs:w-72 flex">
            <Input 
              value={cnpj} 
              onChange={(e) => setCnpj(e.target.value)} 
              label="CNPJ: " 
              className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
            />
            <div className="relative">
              <button
                className="absolute right-0 h-10 px-4 pt-1 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg"
              >
                <BsSearch size={16} />
              </button>
            </div>
        </div>
        <div className="2xl:grid sm:grid gap-4 sm:grid-cols-1 2xl:grid-cols-2">
          <div className="sm:grid sm:grid-cols-2 gap-4 2xl:1/2 mt-6 mr-24">
            <div className="lg:w-full zs:mb-4">
              <Input 
                label="Nome" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div className="lg:w-full zs:mb-4">
              <Input 
                label="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="lg:w-full zs:mb-4">
              <Input 
                label="Senha" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="lg:w-full zs:mb-4">
              <Input 
                label="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="lg:w-full zs:mb-4">
              <Input 
                label="Telefone" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className="zs:mb-4">
              <Button 
                className="flex items-center gap-4" 
                color="blue" 
                size="sm"
              >
                <UserPlusIcon strokeWidth={2} className="h-6 w-6" /> Cadastrar
              </Button>
            </div>
          </div>
          {visible && (
            <div className="grid md:grid-cols-2 lg:mt-2">
              <div className="font-bold sm:mb-6 md:0">
                <h2 className="text-black text-xl">Endereço Estampador</h2>
                <p>CEP: {cep}</p>
                <p>Logradouro: {logradouro}</p>
                <p>Número: {numero}</p>
                <p>Complemento: {complemento}</p>
                <p>Bairro: {bairro}</p>
                <p>Cidade: {cidade}</p>
                <p>UF: {uf}</p>
              </div>
              <div className="font-bold">
                <h1 className="text-black text-xl">Dados Estampador</h1>
                <p>ID: {id_estampadores}</p>
                <p>Nome: {nomes_estampadores}</p>
                <p>Nome Fantasia: {nomeFantasia}</p>
              </div>
            </div>
          )}
        </div>
    </Card>
    <Card className='bg-white/40 overflow-x-auto rounded-xl shadow-xl mt-4 sm:px-2'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <Typography className="ml-2" variant="h5" color="blue-gray">
          Lista de Estampadores
        </Typography>
        <div className='mt-2 mr-1'>
          <div className="flex md:w-96">
            <Input
              label="Pesquisar..."
              className="rounded-r-lg"
              onChange={handleFilterChange}
              value={filtrarValor}
            />
            <div className="relative">
              <button className="absolute right-0 h-10 px-6 pt-1 text-xs" onClick={handleClearFilter}>
                <MdDeleteForever size={24} />
              </button>
            </div>
          </div>
          <p className="text-sm ">
            Pesquise por: Usuario, nome e id-estampador.
          </p>
        </div>
      </div>
      <table className="w-full bg-white/80 mt-4">
        <thead className="bg-blue-gray-100">
          <tr className="border-gray-400 border">
            {TABLE_HEAD.map((head) => (
              <th 
                key={head} 
                className="w-26 p-4 text lg font-semibold tracking-wide text-center">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className=" leading-none opacity-70 font-bold "
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredRows.slice(indiceInicial, indiceInicial + itemsPerPage).map((row, index) => (
            <tr key={index} className="border-b even:bg-blue-gray-50/50">
              {ordemRenderizacao.map((key) => (
                <td key={key} className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {row[key]}
                  </Typography>
                </td>
              ))}   
              <td className="p-4 text-sm text-gray-700 whitespace-nowrap text-center">
                <button onClick={() => atualizarUsuarioModal(row.id, row.username, row.nome, row.telefone, row.email)}>
                  <Typography as="a" href="#" variant="small" color="gray" className="font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  </Typography>
                </button>
              </td> 
              <td className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                  <button
                  >
                    <Typography as="a" href="#" variant="small" color="red" className="font-medium text-red-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
                    </Typography>
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center py-3">
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1"
          onClick={anterior}
          disabled={paginaAtual === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Anterior
        </Button>
        <div className="flex items-center gap-1">
          {numerosPaginas.map((numeroPagina) => (
            <IconButton
              key={numeroPagina}
              onClick={() => trocarPagina(numeroPagina)}
              className='py-1 px-1 '
            >
              {numeroPagina}
            </IconButton>
          ))}
        </div>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1"
          onClick={proxima}
          disabled={paginaAtual === totalPaginas}
        >
          Próxima
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
      <Fragment>
        <Dialog
          open={open}
          handler={handleOpen}
          size={'sm'}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader className='justify-center items-center'>Atualizar dados do Estampador</DialogHeader>
          <DialogBody divider>
            <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
              <div className="md:mr-0 md:mt-2  xl:mr-12">
                  <Input 
                  label="ID Estampador:"
                  value={form.id_estampadores}
                  onChange={(e) => setForm({...form, id_estampadores: e.target.value})} 
                  className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                  />
              </div>
              <div className="md:mt-2 xl:ml-12">
                  <Input 
                  label="Nome Usuário:"
                  value={form.username}
                  onChange={(e) => setForm({...form, username: e.target.value})}
                  className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                  />
              </div>
              <div className="md:mr-0 md:mt-2  xl:mr-12">
                  <Input 
                  label="Nome:"
                  value={form.nome} 
                  onChange={(e) => setForm({...form, nome: e.target.value})}
                  className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                  />
              </div>
              <div className="md:mt-2 xl:ml-12">
                  <Input 
                  label="Email:"
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  value={form.email}
                  className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                  />
              </div>
              <div className="md:mr-0 md:mt-2  xl:mr-12">
                  <Input 
                  label="Telefone:"
                  value={form.phone}
                  onChange={(e) => setForm({...form, phone: e.target.value})} 
                  className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3" 
                  />
              </div>
              <div className="md:mt-2 xl:ml-12">
                <Select
                  label="Permissões:"
                  className="py-2 shadow-sm sm:text-sm sm:leading-6 focus:ring-inset focus:ring-3"
                >
                  <Option className="hidden md:block">Sem Permissão</Option>
                  <Option className="hidden md:block">Fabricante Administrador</Option>
                  <Option className="hidden md:block">Fabricante Usuário</Option>
                  <Option className="hidden md:block">Somente Gerar Qrs</Option>
                  <Option className="hidden md:block">Estampador Admin</Option>
                </Select>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancelar</span>
            </Button>
            <Button variant="gradient" color="green" >
              <span>Enviar</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </Card>
  </div>
  );
}