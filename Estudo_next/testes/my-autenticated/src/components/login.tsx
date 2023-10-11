'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Input } from '@material-tailwind/react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useAuthContext } from '../../src/contexts';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required('a senha deve ter pelo menos 6 caracteres').min(6),
});

interface ILoginProps {
  children: React.ReactNode;
}
export const Login: React.FC<ILoginProps> = ({ children }) => {
  // const service = useLoginService()
  const { isAuthenticated, login } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [password, setPassword] = useState<any>();
  const [username, setUsername] = useState<any>();


  const handleSubmit = () => {
    setIsLoading(true);

    loginSchema
      .validate({ username, password }, { abortEarly: false })
      .then(dadosValidados => {
        login(dadosValidados.username, dadosValidados.password)
          .then(() => {
            setIsLoading(false);
          });
      })
      .catch((errors: yup.ValidationError) => {
        setIsLoading(false);

        errors.inner.forEach(error => {
          if (error.path === 'username') {
            setUsernameError(error.message);
          } else if (error.path === 'password') {
            setPasswordError(error.message);
          }
        });
      });
  };


  if (isAuthenticated) return (
    <>{children}</>
  )

  return (
    <div className="flex min-h-screen bg-white flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image className="mx-auto h-16 w-16 bg-white" src="/logo.png" alt="DVR" width={64} height={64} />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
          Entre em sua conta
        </h2>
      </div>
      <div>
    <label htmlFor="usuario" className="block text-sm font-medium leading-6 text-gray-600">Usuário</label>
    <div className="mt-2">
      <Input
          // value={value}
          name="usuario"
          id="usuario"
          autoComplete="user"
          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'border-red-500' : ''}`} crossOrigin={undefined}        // onChange={onChange} crossOrigin={undefined}    
      />
    </div>
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
          // value={value}
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 'border-red-500' : ''}`} crossOrigin={undefined}        // onChange={onChange} crossOrigin={undefined}      
      />
    </div>
  </div>
  </div>
    </div>
  );
}


