import { getCookie as getCookieUtil } from '../util/cookie';

export const checkUserAuthenticated = () => {
  const token = getCookieUtil('token');
  return !!token;
};