import axios from "axios";
import {LotesEstampador} from "../../interfaces/estampador/lotes-estampador";
import { AxiosResponse } from "axios";
import { httpClientDJango } from "../../config_api/axios";

const resourceUrl = 'ratel';

export const useEstampadorService = () => {
   
	const getEmpresa = async (cnpj: any): Promise<any> => {
		const url:string = `${resourceUrl}/consultarEmpresa/${cnpj}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	// está sendo usado na tela cadastrar contatos
	const show = async (cnpj: any 
    ): Promise<any> => {
		const url:string = `/contatos/estampadores/${cnpj}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const create = async (data:any): Promise<any> => {
		const url:string = `${resourceUrl}/`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data;
	}

	const getListaEstampadores = async (): Promise<any> => {
		const url:string = `${resourceUrl}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const getEstampadoresCadastrado = async (): Promise<any> => {
		const url:string = `${resourceUrl}/contatos/estampadores`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}	

	const getCertificate = async (): Promise<any> => {
		const url:string = `/getCertificateEstampador`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data
	}

	const sendCertificado = async (certificado:any): Promise<any> => {
		const url:string = `/cadastrarCertificado`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, certificado);
		return response.data({"Content-Type": "multipart/form-data"})
	}

  	const updateEstampador = async (id:any, form:any): Promise<any> => {
		const url:string = `${resourceUrl}/atualizar-estampador/${id}`;
		const response:AxiosResponse<any> = await httpClientDJango.put(url, form);
		return response.data
	}

	return {
		show,
		create,
		getListaEstampadores,
		getCertificate,
		sendCertificado,
		getEstampadoresCadastrado,
		getEmpresa,
		updateEstampador
	}
}
