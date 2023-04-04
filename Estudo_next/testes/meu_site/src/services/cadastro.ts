import { AxiosResponse } from "axios";
import { httpClientDJango } from "../config/axios";

const resourceUrl = '';

export const  useCadastroservices = () => {

  const getCadastro = async(id: any): Promise<any> => {
    const url: string = `${resourceUrl}${id}`;
    const response: AxiosResponse<any> = await httpClientDJango.delete(url, id);
    return response;
  }

  return {
    getCadastro
  }
}