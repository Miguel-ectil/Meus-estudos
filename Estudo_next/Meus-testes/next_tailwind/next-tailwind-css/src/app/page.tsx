'use client'
import { useState } from 'react'
import { useLoginService } from '../services/login/loginService'

export default function Login() {
  const service = useLoginService()
  const [password, setSenha] = useState<string>('')
  const [username, setUsuario] = useState<string>('')

  const login = () => {
    const data = {username, password}
    service.login(data)
    .then((response: any) => {
      console.log(response)
    })
    .catch((error: any) => {
      console.log(error, "usuario não cadastro")
    })
  }
  return (
    <>
      <div className="flex min-h-screen bg-white flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-16 w-16 bg-white" src="logo-marca.png" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
            Faça login em sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-600">Email address</label>
              <div className="mt-2">
                <input 
                  value={username}
                  name="email" 
                  id="email" 
                  autoComplete="user" 
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                  onChange={(e) => setUsuario(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-600">Senha</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
            </div>
            <div>
                <button onClick={login} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Entrar</button>
            </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-600">
            Não tem cadastro?
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Faça o seu cadastro gratuito</a>
            </p>
        </div>
      </div>
    </>
  )
}