import { AxiosError } from "axios";

export const erroInterceptor =(error: AxiosError) => {
	if (error.message === 'Network error') {
		return Promise.reject(new Error('Erro de Conexão'));
}

if (error.response?.status ===401){
	return Promise.reject(new Error('Usuario não autenticado'))
	// interceptor faz uma trataiva nos erros visndo do servidor
}

return Promise.reject(error);
}