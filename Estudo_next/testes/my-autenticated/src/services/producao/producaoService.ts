import React from "react";

import { AxiosResponse } from "axios";
import { httpClientDJango } from "../../config_api/axios";
import { estampador_os } from "../../interfaces/producao/estampador-os";
import { useRouter } from "next/router";

const Url = '/ratel'

export const UserProducaoService = () => {

	const getEstampadorOs = async (): Promise<any> => {
		const url:string = `/ratel/os-estampador`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response;
	}

	const getIdestampador  = async (id:any): Promise<any> => {
		const url:string = `/ratel/gerar-os/${id}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response;
	}

	const gerarOs = async (data:any): Promise<any> => {
		const url:string = `/ratel/producao/envia-qr`; 
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response;
	}

	const gerarQrs = async (id_op: any, qtde_a_produzir_qr: any): Promise<any> => {
		const url: string = `/ratel/producao/gerar-qr/${id_op}?qtde_a_produzir_qr=${qtde_a_produzir_qr}`;
		const response: AxiosResponse<any> = await httpClientDJango.get(url);
	};

	const qrDisponivel = async ():Promise<any> =>{
		const url: string = `/ratel/producao/busca-qr`
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data
	}

	const atualizarOp = async (id_op: any, form: any): Promise<any> => {
		const url: string = `${Url}/producao/atualizar-op/${id_op}`;
		const response: AxiosResponse<any> = await httpClientDJango.patch(url, form)
		return response.data
	}

	const gerarEtiquetas =  async (id_lote_saida:any): Promise<any> => {
		const url: string = `${Url}/producao/gerar-etiquetas/${id_lote_saida}`;
		const response: AxiosResponse<any> = await httpClientDJango.get(url)
		return response.data
	}
	
	const consultaRecebimentoLote  = async (numeroLote:any): Promise<any> => {
		const url:string = `${Url}/${numeroLote}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}
	
	const confirmarRecebimento = async (loteSaida: any): Promise<any> => {
		const url: string = `${Url}/confirmarRecebimento/${loteSaida}`; 
		const response: AxiosResponse<any> = await httpClientDJango.post(url);
    	return response.data;
  	};
	
	return {
		getEstampadorOs,
		getIdestampador,
		gerarOs,
		gerarQrs,
		qrDisponivel,
		atualizarOp,
		gerarEtiquetas,
		consultaRecebimentoLote,
		confirmarRecebimento,
	}
}