import { httpClientDJango } from "../../config_api/axios";
import { Axios, AxiosRequestConfig, AxiosResponse } from "axios";
import { Icupomfiscal } from "../../interfaces/cupomfiscal/cupom-fiscal";

const resourceUrl = 'ratel';

export const useCupomFiscalService = () =>{

	const getLotes = async (): Promise<Icupomfiscal> => {
		const url:string = `/v1/lote-entrada`;
		const response:AxiosResponse<Icupomfiscal> = await httpClientDJango.get(`/v1/lote-entrada`);
		return response.data;

	}

	const findByCnpj = async (cnpj:string): Promise<Icupomfiscal> => {
		const url:string = `${resourceUrl}find-by-cnpj/${cnpj}`;
		const response:AxiosResponse<Icupomfiscal>= await httpClientDJango.get(url);
		return response.data;
	}

	const emitirCf = async (data:any): Promise<Icupomfiscal> => {
		const url:string = `${resourceUrl}/issue-cf`;
		const response:AxiosResponse<Icupomfiscal> = await httpClientDJango.post(url, data);
		return response.data;

	}

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

	const consultaCep = async (data:any): Promise<Icupomfiscal> => {
		const url:string = `${resourceUrl}/consulta-cep/`;
		const response:AxiosResponse<Icupomfiscal>= await httpClientDJango.post(url, data);
		return response.data;


	}

	const retornaClienteAntigo = async (dadosCliente: any): Promise<Icupomfiscal> => {
		const url:string = `${resourceUrl}/cliente-antigo/`;
		const response:AxiosResponse<Icupomfiscal> = await httpClientDJango.post(url, dadosCliente);
		return response.data;

	}

	//está sendo usado
	const CupomFiscal = async (ae:any): Promise<any> => {
	  const url: string = `/estampagem/estampagem-numero-concluida/${ae}`;
	  const response: AxiosResponse<any> = await httpClientDJango.get(url, ae);
	  return response.data;
	};

	//está sendo usado
	const EmitirCupomFiscal = async (data:any): Promise<Icupomfiscal> => {
		const url:string = `/emitirCupom/`;
		const response:AxiosResponse<Icupomfiscal>= await httpClientDJango.post(url, data);
		return response.data;

	}


  return {
	getLotes,
	findByCnpj,
	emitirCf,
	getNfcsEmitidas,
	getDetalheCf,
	getCFPdf,
	getXml,
	cancelarCf,
	solicitarZipPeriodo,
	consultaCep,
	retornaClienteAntigo,
	CupomFiscal,
	EmitirCupomFiscal

  }


}

