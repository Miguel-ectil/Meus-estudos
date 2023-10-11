import { httpClientDJango } from "../../config_api/axios";
import { Axios, AxiosRequestConfig, AxiosResponse } from "axios";

const resourceUrl = 'ratel';

export const useCupomFiscalService = () =>{

	// está sendo usado
	const getNfcsEmitidas = async (): Promise<any> => {
		const url:string = `/nfce-geradas`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	//está sendo usado
	const getDetalheCf = async (idCf:any): Promise<any> => {
		const url:string = `/cf/detalhe/${idCf}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url, idCf);
		return response.data;

	}

	//está sendo usado 
	const getCFPdf = async (data:any , config:any): Promise<any> => {
		const url:string = `/cf/pdf/${data}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url, config);
		return response.data;

	}

	const getXml = async (data:any): Promise<any> => {
		const url:string = `${resourceUrl}/xml/${data}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;

	}

	//está sendo usado
	const cancelarCf = async (data:string): Promise<any> => {
		const url:string = `/cancel-cf/`
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response;
	}

	//está sendo usado
	const solicitarZipPeriodo = async (data:any, config:any): Promise<any> => {
	  const url: string = `/nfce/consulta/periodo`;
	  const response: AxiosResponse<any> = await httpClientDJango.post(url, data, config);
	  return response.data;
	};

	//está sendo usado
	const CupomFiscal = async (ae:any): Promise<any> => {
	  const url: string = `/estampagem/estampagem-numero-concluida/${ae}`;
	  const response: AxiosResponse<any> = await httpClientDJango.get(url, ae);
	  return response.data;
	};

  return {

	getNfcsEmitidas,
	getDetalheCf,
	getCFPdf,
	getXml,
	cancelarCf,
	solicitarZipPeriodo,
	CupomFiscal
  }


}

