'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Input, Card, Button } from '@material-tailwind/react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useAuthContext } from '../../src/contexts';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required('A senha deve ter pelo menos 6 caracteres').min(6),
});

interface ILoginProps {
  children: React.ReactNode;
}

export const Login: React.FC<ILoginProps> = ({ children }) => {
  const { isAuthenticated, login } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const handleSubmit = () => {
    setIsLoading(true);

    loginSchema
      .validate({ username, password }, { abortEarly: false })
      .then((dadosValidados) => {
        login(dadosValidados.username, dadosValidados.password)
          .then(() => {
            setIsLoading(false);
          });
      })
      .catch((errors: yup.ValidationError) => {
        setIsLoading(false);

        errors.inner.forEach((error) => {
          if (error.path === 'username') {
            setUsernameError(error.message);
          } else if (error.path === 'password') {
            setPasswordError(error.message);
          }
        });
      });
  };

  if (isAuthenticated) return <>{children}</>;

  return (
    <div className="flex px-2 min-h-screen justify-center items-center" style={{ background: 'linear-gradient(to bottom, rgba(36, 38, 40, 0.95), rgba(136, 30, 30, 0.70)), url(your-background-image.jpg) no-repeat center center fixed' }}>
      <Card className="px-4 py-3 max-w-md w-full bg-opacity-80 bg-[#ffff] rounded-lg">
        <div>
          {/* <Image className="mx-auto h-16 w-16 bg-white" src="/logo.png" alt="DVR" width={64} height={64} /> */}
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
            Entre em sua conta
          </h2>
        </div>
        <div>
          <label htmlFor="usuario" className="block text-sm font-medium leading-6 text-gray-600">Usuário</label>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="usuario"
            id="usuario"
            autoComplete="user"
            className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${usernameError ? 'border-red-500' : ''}`} crossOrigin={undefined} />
          {usernameError && <p className="text-red-500 text-sm">{usernameError}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-600">Senha</label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${passwordError ? 'border-red-500' : ''}`} crossOrigin={undefined} />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
        </div>
        <div className="mt-4">
          <Button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 text-white py-2.5 rounded-md text-sm font-medium"
          >
            Entrar
          </Button>
        </div>
      </Card>
    </div>
  );
};
