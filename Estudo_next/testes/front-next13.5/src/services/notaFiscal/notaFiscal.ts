import { AxiosResponse ,ResponseType} from "axios";
import { httpClientDJango } from "../../config_api/axios";

//const ratelUrl:string = `/v1/nf`;
const ratelUrl: string = 'ratel'

export const useNotaFiscalService = () => {
		
	const getLotes = async (): Promise<any> => {
		const url:string = `/v1/lote-entrada`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const findByCnpj = async (cnpj:number): Promise<any> => {
		const url:string = `${ratelUrl}/find-by-cnpj/${cnpj}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	// está sendo usado
	const emitirNf = async (data:any): Promise<any> => {
		const url:string = `/nfe`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data;
	}

	const emitirCf = async (data:any): Promise<any> => {
		const url:string = `/nfce`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data;
	}

	// esta sendo usado
	const getNfsEmitidas = async (): Promise<any> => {
		const url:string = `/nfs`;	
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	//está sendo usado
	const getDetalheNf = async (idNf:any): Promise<any> => {
		const url:string = `/nf/detalhe/${idNf}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url, idNf);
		return response.data;
	}

	const getPdf = async (data:any): Promise<any> => {
		const url:string = `${ratelUrl}/pdf/${data}`;
		const config:any = { responseType: 'arraybuffer' };
		const response:AxiosResponse<any> = await httpClientDJango.get(url, config);
		return response.data;
	}

	// está sendo usado
	const baixarPDF = async (data:any, config:any): Promise<any> => {
  		const url: string = `/nfe/pdf/${data}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url, config);
		return response.data;
	}

	const getXml = async (data:any): Promise<any> => {
		const url:string = `${ratelUrl}/xml/${data}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	// esta sendo usado
	const cancelarNf = async (data:any): Promise<any> => {
		const url:string = `/cancel-nf`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response;
	}

	// esta sendo usado
	const solicitarZipPeriodo = async (data:any,config:any): Promise<any> => {	
		const url:string = `/nfe/consulta/periodo`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data, config);
		return response.data;
	}

	const consultaCep = async (cep:string): Promise<any> => {
		const url:string = `${ratelUrl}/consulta-cep`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, cep);
		return response.data;
	}

	const retornaClienteAntigo = async (dadosCliente:any): Promise<any> => {
		const url:string = `${ratelUrl}/cliente-antigo/`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url, dadosCliente);
		return response.data;
	}

	const retornaChaveNota = async (numNota:any): Promise<any> => {
		const url:string = `${ratelUrl}/retorna-chave`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, numNota);
		return response.data;
	}

	return{
		getLotes,
		findByCnpj,
		emitirNf,
		emitirCf,
		getNfsEmitidas,
		getDetalheNf,
		getPdf,
		getXml,
		cancelarNf,
		solicitarZipPeriodo,
		consultaCep,
		retornaClienteAntigo,
		retornaChaveNota,
		baixarPDF,
	}
}