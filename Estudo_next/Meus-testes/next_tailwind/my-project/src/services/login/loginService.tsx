import axios, { AxiosResponse } from "axios";
import { httpClientDJango } from "../../config_api/axios";


const Url = 'ratel/estampagem'
export const useLoginService = () => {
  const login = async (data:any): Promise<any> => {
    const url:string = `${Url}/login`;
    const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
    return response.data;
  }
  return {
    login
  }
}