import { useEffect, ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies';

type PrivateRoutProps = {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRoutProps) => {
  const { push } = useRouter();

  const checkUserAuthenticated = () => {
    const cookies = parseCookies();
    const token = cookies.token;
    return !!token; // Retorna true se o token estiver presente, caso contrário, retorna false
  };

  const isUserAuthenticated = checkUserAuthenticated();
   
  useEffect(() => {
    if (!isUserAuthenticated) {
      push('/');
    }
  }, [isUserAuthenticated, push]);

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  )
}

export default PrivateRoute;