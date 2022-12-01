import { HttpClient } from '../../infra/HttpClient/HttpClient';
import { tokenService } from './tokenService';

export const authService = {
  async login({ username, password }) {
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
      method: 'POST',
      body: { username, password }
    })
    .then(async (respostaDoServidor) => {
      if(!respostaDoServidor.ok) throw new Error('Usuário ou senha inválidos!')
      const body = respostaDoServidor.body;
			tokenService.save(body.token);
    })
  }  
};