import axios, { AxiosResponse } from "axios";
import { httpClientDJango } from "../config/axios";

const resourceUrl = '';

export const  useCadastroservices = () => {

  const getCadastro = async(id: any): Promise<any> => {
    const url: string = `${resourceUrl}${id}`;
    const response: AxiosResponse<any> = await httpClientDJango.post(url, id);
    return response;
  }

  const postCadastro = async(data: any): Promise<any> => {
    const url: string = `${resourceUrl}api/user`;
    const response: AxiosResponse<any> = await httpClientDJango.post(url, data);
    return response;
  }

  return {
    getCadastro,
    postCadastro
  }
}