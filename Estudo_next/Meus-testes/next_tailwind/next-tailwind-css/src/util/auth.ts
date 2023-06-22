import jwt from 'jsonwebtoken';

export function isAuthenticated(token:any) {
  if (!token) {
    return false;
  }

  const decodedToken = jwt.decode(token);

  if (!decodedToken) { 
    return null
  }
  const currentTime = Date.now() / 1000;

  return decodedToken.exp > currentTime;
}
