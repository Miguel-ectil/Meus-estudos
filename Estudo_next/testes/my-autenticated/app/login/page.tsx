'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Input } from '@material-tailwind/react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useAuthContext } from '@/contexts';

const USER_NOT_REGISTERED_ERROR = 'usuário não cadastrado';

interface LoginFormProps {
  username: string;
  setLogin: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  authenticate: (e: FormEvent) => void;
}

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface InputPropsWithErrors extends InputProps {
  showErrors: boolean;
}

export default function Login() {
  const { isAuthenticated, login } = useAuthContext();
  const [password, setPassword] = useState<string>('');
  const [username, setLogin] = useState<string>('');
  const [showErrors, setShowErrors] = useState<any>(false);

  const authenticate = (e: FormEvent) => {
    e.preventDefault();

    const loginData = { username, password };

    login(loginData)
      .then((resp: any) => {
        // handle response
        Cookies.set('token', resp.token);
      })
      .catch((error: any) => {
        console.error(error, USER_NOT_REGISTERED_ERROR);
        setShowErrors(true);
      });
  };

  // Remove o `use client` para garantir que o código seja executado no lado do cliente
  // mesmo se o usuário estiver autenticado
  if (isAuthenticated) return <div>Conteúdo autenticado</div>;

  return (
    <div className="flex min-h-screen bg-white flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <Image className="mx-auto h-16 w-16 bg-white" src="/logo.png" alt="DVR" width={64} height={64} /> */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
          Entre em sua conta
        </h2>
      </div>
      <LoginForm username={username} setLogin={setLogin} password={password} setPassword={setPassword} authenticate={authenticate} showErrors={showErrors} />
    </div>
  );
}

const LoginForm: React.FC<LoginFormProps & { showErrors: boolean }> = ({ username, setLogin, password, setPassword, authenticate, showErrors }) => (
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={authenticate}>
      <UserInput value={username} onChange={(e) => setLogin(e.target.value)} showErrors={showErrors} />

      <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} showErrors={showErrors} />
      {showErrors && (
        <div className="text-red-500 text-sm">Usuário ou senha incorretos</div>
      )}
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo
-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Entrar
          </button>
        </div>
      </form>
    </div>
  );  

  const UserInput: React.FC<InputPropsWithErrors> = ({ value, onChange, showErrors }) => (
    <div>
    <label htmlFor="usuario" className="block text-sm font-medium leading-6 text-gray-600">Usuário</label>
    <div className="mt-2">
      <Input
        value={value}
        name="usuario"
        id="usuario"
        autoComplete="user"
        className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${showErrors ? 'border-red-500' : ''}`}
        onChange={onChange} crossOrigin={undefined}    
      />
    </div>
  </div>
);

const PasswordInput: React.FC<InputPropsWithErrors> = ({ value, onChange, showErrors }) => (
  <div>
    <div className="flex items-center justify-between">
      <label 
        htmlFor="password" 
        className="block text-sm font-medium leading-6 text-gray-600"
      >
        Senha
      </label>
    </div>
    <div className="mt-2">
      <Input
        value={value}
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${showErrors ? 'border-red-500' : ''}`}
        onChange={onChange} crossOrigin={undefined}      
      />
    </div>
  </div>
);
