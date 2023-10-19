import { AxiosResponse } from "axios";
import { httpClientDJango } from "@/config_api/axios";

const Url = ''

export const useLoginService = () => {

	// está sendo usado
  const register = async (data:any): Promise<any> => {
    const url:string = `/cadastrar/usuario`;
    const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
    return response.data;
  }

  const  login = async (data:any): Promise<any> => {
    const url: string = `/login`;
    const response: AxiosResponse<any> = await httpClientDJango.post(url, data);
    return response.data;
  }

  const logout = async (): Promise<any> => {
    const url: string = `${Url}/logout`;
    const response: AxiosResponse<any> = await httpClientDJango.post(url);
    return response.data;
  }
  
	// está sendo usado
  const getUsers = async (): Promise<any> => {
	  const url:string = `/contatos/usuarios`;
	  const response:AxiosResponse<any> = await httpClientDJango.get(url);
	  return response.data;
  }

  const findallById = async (id:any): Promise<any> => {
    const url:string = `${Url}/contatos/${id}`;
    const response:AxiosResponse<any> = await httpClientDJango.get(url);
    return response.data;  
  }

  // está sendo usado
  const updateUser = async (id:any, form:any): Promise<any> => {
    const url:string = `/contatos/${id}`;
    const response:AxiosResponse<any> = await httpClientDJango.put(url, form);
    return response.data;  
  }

  // está sendo usado
  const deleteUser = async (id:any): Promise<any> => {
    const url:string = `/contatos/delete-user/${id}`;
    const response:AxiosResponse<any> = await httpClientDJango.delete(url);
    return response.data;  
  }

  const getNome = async (): Promise<any> => {
	  const url:string = `${Url}/cliente-logado`;
	  const response:AxiosResponse<any> = await httpClientDJango.get(url);
	  return response.data;
  }

  const roleUser = async (id:any, form:any): Promise<any> => {
    const url:string = `${Url}/contatos/roles/${id}`;
	  const response:AxiosResponse<any> = await httpClientDJango.post(url, form);
	  return response.data;
  }

  const getRoleUser = async (id:any): Promise<any> => {
    const url:string = `${Url}/contatos/roles/${id}`;
	  const response:AxiosResponse<any> = await httpClientDJango.get(url);
	  return response.data;
  }

  return {
    register,
    login,
    logout,
    getUsers,
    getNome,
    findallById,
    updateUser,
    deleteUser,
    roleUser,
    getRoleUser
  }
}