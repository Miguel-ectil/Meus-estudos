import axios, { AxiosResponse } from "axios";
// import { string } from "yup";
import { httpClientDJango } from "../../config_api/axios";
import { ILogin } from "../../interfaces/login/login";
// import { tokenService } from "../api/auth/tokenService";

const resourceUrl = 'login';

export const Auth = () => {

  const register = async (data: string): Promise<void> => {
	const url:string = `${resourceUrl}/register`;
	const response:AxiosResponse<void> = await httpClientDJango.post(url, data);
	return response.data;
  }

  async function login(data:any): Promise<void> {
	const url: string = `${resourceUrl}/authenticate`;
	const response: AxiosResponse<void> = await axios.post(url, data);
	return response.data;
  }

  const findall = async (): Promise<void> => {
	const url:string = `${resourceUrl}/find-all`;
	const response:AxiosResponse<void> = await httpClientDJango.get(url);
	return response.data;

  }

  const checkToken = async (): Promise<any> => {
	const url:string = `/login/userping`;
	const response:AxiosResponse<any> = await httpClientDJango.get(url);
	return response;
  }

  return {
	register,
	login,
	findall,
	checkToken,
  }
}