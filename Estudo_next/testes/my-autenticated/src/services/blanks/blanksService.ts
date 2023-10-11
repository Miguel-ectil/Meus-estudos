// import { Api,Dvr } from "../../config_api/axios";
// import { LotesRecebidosEstampador} from "../../interfaces/Estampador/LotesRecebidosEstampador";
// import { ConsultarBlanks } from "../../interfaces/Estampador/ConsultarBlanks";


// const getBlanks = () => Api.get<LotesRecebidosEstampador[]>('confirmar-recebimento-caixas');
// // const inserirBlankLote = () => Api.get<[]>();


// let getConsultarBlanks = () => Dvr.get<ConsultarBlanks[]>('v1/blanks/${hash}');

// const getById = async (): Promise<any> =>{};
// const create = async (): Promise<any> =>{};
// const updateById = async (): Promise<any> =>{};
// const deleteById  = async (): Promise<any> =>{};



// export const BlanksService =  {
// 	getBlanks,
// 	getConsultarBlanks,
//     getById,
//     create,
// 	updateById,
//     deleteById,
// };

import { httpClientDJango } from "../../config_api/axios";
import { AxiosResponse } from "axios";

// const resourceUrl = 'v1/blank';
const resourceUrl = 'ratel'
export const useBlankService = () => {

	// está sendo usado
	const getBlanksSaida = async (hash:any): Promise<any> => {
		const url: string = `/consulta-blank/${hash}`
		const response = await httpClientDJango.get(url, hash);
		return response.data
	}

	// está sendo usado
   	const getBlanks = async (params:string): Promise<any> => {
		const url: string = `/find-by-lote-entrada/${params}`
		const response: AxiosResponse<any> = await httpClientDJango.get(url);
		return response
  	}

   const  getBlankLoteSaida = async (id: any): Promise<any> => {
		const url: string = `/consulta_recebimento/${id}`
		const response: AxiosResponse<any> = await httpClientDJango.get(url, id);
		return response
  	}

    const  inserirBlankLote = async (blanks_lotes: number[]): Promise<any> => {
	  const url: string = `${resourceUrl}/insert-blank-lote-saida`;
	  const response: AxiosResponse<any> = await httpClientDJango.put<any>(url, blanks_lotes);
    	return response.data;	
  	}

	const inativarBlankFabricante = async (params: any): Promise<void> => {
		const url: string = `${resourceUrl}/inativar/${params}`
		const response: AxiosResponse<void> = await httpClientDJango.post(url, params);
		return response.data
	}  

	const checaBlankLote = async (params: any): Promise<any> => {
		const url: string = `${resourceUrl}/checa-blank-lote-saida` 
		const response: AxiosResponse<any> = await httpClientDJango.post(url, params);
		return response
	}

	// está sendo usado
	const inativarBlankEstampador = async (params:any): Promise<any> => {
		const url: string = `/estampador/inativar-blank`
		const response: AxiosResponse<any> = await httpClientDJango.post(url, params);
		return response.data
	}

	const removeBlankLoteSaida = async (serial:any): Promise<any> => {
		const url: string = `${resourceUrl}/blank/lote-saida/remove/${serial}`
		const response: AxiosResponse<any> = await httpClientDJango.post(url, serial);
		return response.data
	}

	return {
		getBlanksSaida,
		getBlanks,
		getBlankLoteSaida,
		inserirBlankLote,
		inativarBlankFabricante,
		checaBlankLote,
		inativarBlankEstampador,
		removeBlankLoteSaida
	}
}

