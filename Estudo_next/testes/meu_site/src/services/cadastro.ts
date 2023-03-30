import { AxiosResponse } from "axios";
import { httpClientDJango } from "../config/axios";

const resourceUrl = '';

export const  useCadastroservices = () => {

  const getCadastro = async(): Promise<any> => {
    const url: string = `${resourceUrl}`;
    const response: AxiosResponse<any> = await httpClientDJango.get(url);
    return response;
  }

  return {
    getCadastro
  }
}