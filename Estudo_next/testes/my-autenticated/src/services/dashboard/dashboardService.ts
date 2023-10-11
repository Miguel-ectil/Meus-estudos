import { AxiosResponse } from "axios";
import { httpClientDJango } from "@/config_api/axios";
import { IEstoqueEstampador } from "../../interfaces/dashboard/dashboard";


const resourceUrl = '/dashboard';

export const  useDashboardEstoqueService = () => {

	const getCarro = async(): Promise<any> =>{

		const url: string = `${resourceUrl}/carro`;
		const response: AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const getCarroPreta = async (): Promise<any> => {
		const url:string = `${resourceUrl}/carroPreta`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}
	const getMini11 = async (): Promise<any> => {
		const url:string = `${resourceUrl}/mini11`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}
	const getMini11Preta = async (): Promise<any> => {
		const url:string = `${resourceUrl}/$mini11Preta`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}
	const getMini13 = async (): Promise<any> => {
		const url:string = `${resourceUrl}/mini13`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}
	const getMini13Preta = async (): Promise<any> => {
		const url:string = `${resourceUrl}/mini13Preta`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const getMoto = async (): Promise<any> => {
		const url:string = `${resourceUrl}/moto`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const getMotoPreta = async (): Promise<any> => {
		const url:string = `${resourceUrl}/motoPreta`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const getCertificate = async (): Promise<any> => {
		const url:string = `/certificates`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	return {
		getCarro,
		getCarroPreta,
		getMini11,
		getMini11Preta,
		getMini13,
		getMini13Preta,
		getMoto,
		getMotoPreta,
		getCertificate
	}
}
