import { AxiosResponse } from "axios";
import { httpClientDJango } from "../../config_api/axios";
import { LotesRecebidosEstampador } from "../../interfaces/estampador/lotes-recebidos-estampador";

// const resourceUrl = '/v1';
const resourceUrl = 'ratel'

export const useLotesService = () => {

	const getLotes = async (): Promise<any> => {
		const url:string = `${resourceUrl}/lote-entrada`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response
	}

	const criarLotesEntradas = async (data:any): Promise<any> => {
		const url:string = `${resourceUrl}/lote-entrada`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data;


	}

	const atualizarLote = async (data:any): Promise<any> => {	
		const url:string = `${resourceUrl}/lote-entrada/find-and-update${data}`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data;

	}

	const getLotesSaidaPorPagina = async (pagina:number): Promise<any> => {	
		const url:string = `${resourceUrl}/lote-saida/page/${pagina}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response;

	}

	// const getContagem = async (): Promise<any> => {
	// 	const url:string = `${resourceUrl}/lote-saida/contagem`;
	// 	const response:AxiosResponse<any> = await httpClientDJango.get(url);
	// 	return response.data;
	// }

	const getLotesSaidaByID = async (id:number): Promise<any> => {
		const url:string = `${resourceUrl}/lote-saida/${id}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response;
	}

	//está sendo usado
	const getLotesSaidaEstampador = async (): Promise<any> => {
		const url:string = `/lote-saida/estampador`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response;

	}

	const enviarLoteEstampador = async (data:any): Promise<any> => {
		const url:string = `${resourceUrl}/envia-lote`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response;

	}

	//está sendo usado
	const confirmarRecebimento = async (data:any): Promise<any> => {
		const url:string = `lote-saida/confirma-recebimento-estampador`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data );
		return response.data;
	
	}


	const criarLoteSaida = async (data:any): Promise<any> => {
		const url:string = `${resourceUrl}/cria_lote-saida`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url, data);
		return response;

	}

	const inserirEstampador = async (data:any): Promise<any> => {
		const url:string = `${resourceUrl}/lote-saida/insert-estampador/${data.id}`;
		const response:AxiosResponse<any> = await httpClientDJango.put(url, data);
		return response;

	}

	//está sendo usado
	const devolucao = async (data:any): Promise<any> => {
		const url:string = `/blank/lote-saida`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data;

	}

	//está sendo usado
	const getLoteSaida = async (data:any): Promise<any> => {
		const url:string = `blank/lote-saida/${data}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url, data);
		return response.data;

	}
	return{

		getLotes,
		criarLotesEntradas,
		atualizarLote,
		getLoteSaida,
		getLotesSaidaPorPagina,
		// getContagem,
		getLotesSaidaByID,
		getLotesSaidaEstampador,
		enviarLoteEstampador,
		confirmarRecebimento,
		criarLoteSaida,
		inserirEstampador,
		devolucao,

	}
}