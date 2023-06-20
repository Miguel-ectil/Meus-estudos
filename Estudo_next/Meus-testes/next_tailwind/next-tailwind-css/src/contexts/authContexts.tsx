import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router'
import { getCookie, setCookie } from '../util/cookie';
import { httpClientDJango } from '../config_api/axios';
import { parseCookies } from 'nookies'
import { useLoginService } from '../services/login/loginService'; 

interface IAuthContextData {
  isAuthenticated: boolean;
  login: (form:{username: string, password: string}) => Promise<string | void>;
}

const AuthContext = createContext({} as IAuthContextData);

const ACCESS_TOKEN_KEY = 'token';
interface IAuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const User = useLoginService()
  const [token, setAccessToken] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const { 'token': token} = parseCookies()

    if (token) {
      setAccessToken(token);
    } else {
      setAccessToken(undefined);
    }
  }, []);

  const handleLogin = useCallback(async (form: object) => {
    const result = await User.login(form);

    if (result instanceof Error) {
      return result.message;
    } else {
      setCookie(ACCESS_TOKEN_KEY, result.token);
      httpClientDJango.defaults.headers['Authorization'] = `Bearer ${result.token}`;
      setAccessToken(result.token);
      router.push('/Dashboard')
    }
  }, []);

  const isAuthenticated = useMemo(() => !!token, [token]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login: handleLogin}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
