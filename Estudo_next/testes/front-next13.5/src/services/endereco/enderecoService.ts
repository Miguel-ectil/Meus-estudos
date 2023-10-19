 import axios, { Axios, AxiosResponse } from "axios";

export const useEnderecoService = () => {

  const getEndereco = async (cep:string): Promise<any> => {
	const url:string = `https://viacep.com.br/ws/${cep}/json/`;
	const response:AxiosResponse<any> = await axios.get(url, { withCredentials: false });
	return response.data;
  }

  return {
    getEndereco
  }
}