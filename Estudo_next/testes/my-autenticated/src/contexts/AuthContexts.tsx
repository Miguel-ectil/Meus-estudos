'use client'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie, setCookie } from '@/util/cookies';
import { httpClientDJango } from '@/config_api/axios';
import { parseCookies } from 'nookies';
import { useLoginService } from '@/services/user/userService';

interface IAuthContextData {
  isAuthenticated: boolean;
  login: (form: { username: string; password: string }) => Promise<string | void>;
}
const AuthContext = createContext<IAuthContextData | undefined>(undefined);

const ACCESS_TOKEN_KEY = 'token';

interface IAuthProviderProps {
  children: React.ReactNode;
}
  
export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const User = useLoginService();
  const [token, setAccessToken] = useState<string | undefined>();
  const router = useRouter();

  useEffect(() => {
    const { 'token': cookieToken } = parseCookies();

    if (cookieToken) {
      setAccessToken(cookieToken);
    } else {
      setAccessToken(undefined);
      router.push('/login'); // Redireciona para a tela de login se não estiver autenticado
    }
  }, []);

  const handleLogin = useCallback(async (form: { username: string; password: string }) => {
    try {
      const result = await User.login(form);
      setCookie(ACCESS_TOKEN_KEY, result.token);
      httpClientDJango.defaults.headers['Authorization'] = `Bearer ${result.token}`;
      setAccessToken(result.token);
      router.push('/'); // Redireciona para a dashboard após o login bem-sucedido
    } catch (error) {
      return 
    }
  }, []);

  const isAuthenticated = useMemo(() => !!token, [token]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login: handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};