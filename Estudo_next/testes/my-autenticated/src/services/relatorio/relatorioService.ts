import { AxiosResponse } from 'axios';
import { PreProcessedFileInfo } from 'typescript';
import { httpClientDJango } from '../../config_api/axios';

const resourceUrl = 'ratel';

export const useRelatorioService = () => {

	const relatorioEstoque = async (): Promise<any> => {
		const url:string = `${resourceUrl}/relatorio`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const relatorioBlankEstoque = async (): Promise<any> => {
		const url:string = `${resourceUrl}/blank-estoque`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const relatorioBlankDisponivel = async (): Promise<any> => {
		const url:string = `${resourceUrl}/blank-disponivel`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;

	}

	const relatorioInativo = async (): Promise<any> => {
		const url:string = `${resourceUrl}/blank-disponiovel`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;

	}

	
	const exportSeriaisQr = async (id:number): Promise<any> => {
		const url:string = `${resourceUrl}/blank-lote/${id}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;

	}


	// está sendo usado
	const relatorioBlankInativo = async (): Promise<any> => {
		const url:string = `${resourceUrl}/blank-inativo`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}
	
	// está sendo usado
	const relatorioEstampagemCsv = async (periodo:any, config:any): Promise<any> => {
		const url:string = `/relatorio-estampagem-csv`;
		const response:AxiosResponse<void> = await httpClientDJango.post(url, periodo, config);
		return response.data;
	}

	// está sendo usado
	const relatorioEstampagemCsvPorSolicitante = async (periodo:any, config:any): Promise<any> => {
		const url:string = `/relatorio-estampagem-csv-solicitante`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, periodo, config);
		return response.data;
	}

	// está sendo usado
	const solicitarRelatorioCsvPorSolicitanteIndividual = async (solicitante:any, config:any): Promise<any> => {	
		const url:string = `/relatorio-estampagem-csv-solicitante-individual`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, solicitante,config);
		return response.data;
	}

	const solicitarRelatorioCsvPorSolicitanteAnterior = async (data:any,config:any): Promise<any> => {	
		const url:string = `${resourceUrl}relatorio-estampagemcsv-solicitante-anterior`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data, config);
		return response.data;
	}

	// está sendo usado
	const relatorioEstampagem = async (periodo:any, config:any): Promise<any> => {
		const url:string = `/relatorio-estampagem-pdf`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, periodo, config);
		return response.data
	}

	// está sendo usado
	const relatorioEstampagemPorSolicitante = async (periodo:any,config:any): Promise<any> => {	
		const url:string = `/relatorio-estampagem-pdf-solicitante`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, periodo,config);
		return response.data;
	}

	// está sendo usado
	const solicitarRelatorioPorSolicitanteIndividual = async (data:any, config:any): Promise<any> => {
		const url:string = `/relatorio-estampagem-pdf-solicitante-individual`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data,config);
		return response.data;
	}

	const solicitarRelatorioPorSolicitanteAnterior = async (data:any,config:any): Promise<any> => {
		const url:string = `${resourceUrl}relatorio-estampagempdf-solicitante-anterior`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data, config);
		return response.data;
	}

	// está sendo usado
	const solicitarRelatorioPorTipoPlaca = async (data:any,config:any): Promise<any> => {
		const url:string = `relatorio-estampagem-pdf-placa`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data, config);
		return response.data;
	}

    // está sendo usado
	const solicitarRelatorioPorTipoPlacaDadosSolicitante = async (data:any,config:any): Promise<any> => {
		const url:string = `/relatorio-estampagem-pdf-placa-solicitante`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data, config);
		return response.data;
	}

    // está sendo usado
	const relatorioOS = async (numeroAe: any, config: any): Promise<any> => {
		const url: string = '/comprovanteOs';
		const response: AxiosResponse<Blob> = await httpClientDJango.post(url, { numeroAe }, config)
		return response.data;
	};
  // está sendo usado
    // está sendo usado
	const relatorioComprovante = async (numeroAe: any, config: any): Promise<any> => {
		const url: string = '/comprovanteOs';
		const response: AxiosResponse<Blob> = await httpClientDJango.post(url, { numeroAe }, config)
		return response.data;
	};

	const relatorioTermo = async (numeroAe: any, config: any): Promise<any> => {
		const url:string = `/comprovanteOs`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, { numeroAe }, config)
		return response.data
	}


	return {
		relatorioEstoque,
		relatorioBlankEstoque,
		relatorioBlankDisponivel,
		relatorioInativo,
		exportSeriaisQr,
		relatorioBlankInativo,
		relatorioEstampagemCsv,
		relatorioEstampagemCsvPorSolicitante,
		solicitarRelatorioCsvPorSolicitanteIndividual,
		solicitarRelatorioCsvPorSolicitanteAnterior,
    	relatorioEstampagem,
		relatorioEstampagemPorSolicitante,
		solicitarRelatorioPorSolicitanteIndividual,
		solicitarRelatorioPorSolicitanteAnterior,
		solicitarRelatorioPorTipoPlaca,
		solicitarRelatorioPorTipoPlacaDadosSolicitante,
		relatorioOS,
		relatorioComprovante,
		relatorioTermo
		
	}
}