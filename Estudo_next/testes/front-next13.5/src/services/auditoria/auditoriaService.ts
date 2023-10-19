import React from "react";

import { AxiosResponse } from "axios";
import { httpClientDJango } from "../../config_api/axios";
import IAuditoria from "../../interfaces/auditoria/auditoria";

export const useAuditoriaService = () => {

	const enviaAuditoriaModal = async (): Promise<IAuditoria> => {
		const url:string = `/iniciaAuditoria`;
		const response:AxiosResponse<IAuditoria> = await httpClientDJango.get(url);
		return response.data;
	}

	const recebeAuditoriaModal = async (): Promise<IAuditoria> => {		
		const url:string = `/auditorias`;
		const response:AxiosResponse<IAuditoria> = await httpClientDJango.get(url);
		return response.data;


	}

	const receberDadosAuditoria = async (id:number): Promise<IAuditoria> => {
		const url:string = `/auditoria/${id}`;
		const response:AxiosResponse<IAuditoria> = await httpClientDJango.get(url);
		return response.data;

	}

	const atualizarAuditoria = async (id:number): Promise<void> => {
		const url:string = `/updateAuditoria/${id}`;
		const response:AxiosResponse<void> = await httpClientDJango.put(url);
		return response.data;

	}

	const finalizaAuditoria = async (form:any): Promise<IAuditoria> => {
		const url:string = `/finalizaAuditoria`;
		const response:AxiosResponse<IAuditoria> = await httpClientDJango.post(url, form.id);
		return response.data;
	}
	
	return{
		enviaAuditoriaModal,
		recebeAuditoriaModal,
		receberDadosAuditoria,
		atualizarAuditoria,
		finalizaAuditoria
	}
}
