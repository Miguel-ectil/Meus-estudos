import {LotesEstampador} from "../../interfaces/estampador/lotes-estampador";
import axios, { AxiosResponse } from "axios";
import { httpClientDJango } from "../../config_api/axios";

// const resourceUrl = 'v1/estampagem';
const Url = 'ratel/estampagem'
const Url1 = 'ratel'

export const useEstampagemService = () => {
	const salvarCliente = async (data:any): Promise<any> => {
		const url:string = `/v1/cliente`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data;
	}

	const estampar = async (data:any): Promise<any> => {
		const url:string = `${Url}/iniciar`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data;
	}

	const registrar = async (data:any): Promise<any> => {
		const url:string = `${Url}/registrar`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data;
	}

	const cancelar = async (data:any): Promise<any> => {
		const url:string = `${Url}/cancelar`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data;
	}

    // Está  sendo usado
	const getAutorizacaoEstampagem = async (numAe:any): Promise<any> => {
	  const url:string = `/autorizacao-estampagem/${numAe}`;
	  const response:AxiosResponse<any> = await httpClientDJango.get(url);
	  return response.data;
	}

	// Está  sendo usado
	const postFile = async (uploadFiles: any): Promise<any> => {
	  const url: string = `/uploadDocs`;
	  const config = { headers: { "Content-Type": "multipart/form-data" } }; // Configurar headers
	  const response: AxiosResponse<any> = await httpClientDJango.post(url, uploadFiles, config);
	  return response.data; // Retornar apenas response.data
	};

	// Está  sendo usado
	const getArquivos = async (autorizacaoEstampagem: any): Promise<any> => {
	  const url: string = `/docsAe/${autorizacaoEstampagem}`
	  const response: AxiosResponse<any> = await httpClientDJango.get(url, autorizacaoEstampagem );
	  return response.data
	};

	// Está  sendo usado
	const DeleteFile = async (idToDelete: any): Promise<any> => {
	  const url: string = `/docsAe/${idToDelete}`
	  const response: AxiosResponse<any> = await httpClientDJango.delete(url);
	  return response.data
	};

	// Está  sendo usado
	const iniciarEstampagem = async (form: any): Promise<any> => {
	  const url: string = `/inicioEstampagem`
	  const response: AxiosResponse<any> = await httpClientDJango.post(url,form );
	  return response.data
	};

	// Está  sendo usado
	const postPdf = async (formPdfPost: any): Promise<any> => {
	  const url: string = `/pdfNotaFiscal`
	  const response: AxiosResponse<any> = await httpClientDJango.post(url, formPdfPost)
	  return response.data
	};

	// Está  sendo usado
	const postXml = async (formXmlPost: any): Promise<any> => {
	  const url: string = `/xmlNotaFiscal`
	  const response: AxiosResponse<any> = await httpClientDJango.post(url, formXmlPost)
	  return response.data
	};

	const getAe = async (autorizacaoEstampagem:any): Promise<any> => {
	  const url:string = `${Url}/ae/${autorizacaoEstampagem}`;
	  const response:AxiosResponse<any> = await httpClientDJango.get(url);
	  return response;
	}

	const findAes = async (): Promise<any> => {
	  const url:string = `${Url}/find-ae`;
	  const response:AxiosResponse<any> = await httpClientDJango.get(url);
	  return response.data;
	}

	const getBlankCancelados = async (data:any): Promise<any> => {
		const url:string = `${Url}/blanks-cancelados`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url, data);
		return response.data;
	}

	const getCnpjEstampador = async (): Promise<any> => {
		const url:string = `${Url}/cnpj-estampador/cnpj-by-token`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const cancelarBlankEstampagem = async (data:any): Promise<any> => {
		const url:string = `${Url}/blank/estampador/inactivate`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data;
	}

	const getBlankBySerialHash = async (serialHash:any): Promise<any> => {
		const url:string = `${Url}/blank/${serialHash}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response;
	}

	const getNumerosAes = async (): Promise<any> => {
		const url:string = `${Url}/last-aes`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	// Está  sendo usado
	const getListaAePorPagina = async (page: any): Promise<any> => {
		const url:string = `/listar_ae?page=${page}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url, page);
		return response.data
	}
    // Está  sendo usado
	const getBuscaAe = async (filtre:any, page: any): Promise<any> => {
		const url:string = `/busca_ae/?busca=${filtre}&page=${page}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url, page);
		return response.data
	}

	// está sendo usado
	const getListaAePorPaginaNotConcluido = async (numero:any): Promise<any> => {
		const url:string = `/lista-aes-nao-concluida/${numero}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const getAeByNumero = async (numero:any): Promise<any> => {
		const url:string = `${Url}/estampagem-numero/${numero}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const getAeByNumeroConcluida = async (numero:any): Promise<any> => {
		const url:string = `/estampagem-numero-concluida/${numero}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}
	
{/*--------------------------------------------*/}
	const getListaBuscaData = async (dataI:any, dataF:any,numero:any): Promise<any> => {
		const url:string = `/busca_ae/${dataI}/${dataF}/${numero}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response
	}

	const getAeByPlaca = async (placa:any): Promise<any> => {
		const url:string = `${Url}/estampagem-placa/${placa}`;	
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const getContagem = async (): Promise<any> => {
		const url:string = `${Url}/retorna-contagem`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const getContagemNotConcluido = async (): Promise<any> => {
		const url:string = `${Url}/retorna-contagem-nao-concluida`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const salvarAe = async (data:any): Promise<any> => {
		const url:string = `${Url}/create-ae`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data
	}

	const cancelAe = async (data:any): Promise<any> => {
		const url:string = `${Url}/cancelar-estampagem`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data;
	}

	const registerAe = async (data:any): Promise<any> => {
		const url:string = `${Url}/register-estampagem`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data;
	}

	const removerEstampagem = async (data:any): Promise<any> => {
		const url:string = `${Url}/remover-estampagem`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response.data;
	}

	// Esta sendo usado pela tela relatorio de estampagem
	const buscarSolicitantes = async (): Promise<any> => {
		const url:string = `/solicitantes`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const buscarClientes = async (): Promise<any> => {
		const url:string = `${Url}/clientes`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url);
		return response.data;
	}

	const checaAeBanco = async (data:any): Promise<any> => {
		const url:string = `${Url}/checa-ae-banco`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response;
	}

	const checaAeBancoEstampador = async (data:any): Promise<any> => {
		const url:string = `${Url}/checa-ae-banco-estampador`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response;
	}

	const salvarSolicitante = async (solicitante:any): Promise<any> => {
		const url:string = `${Url}/registro-solicitante`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, solicitante);
		return response.data;
	}

	const salvarClienteNovo = async (proprietario:any): Promise<any> => {
		const url:string = `${Url}/registro-cliente`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, proprietario);
		return response.data;
	}

	const salvaAlteracaoSolicitante = async (dataSolicitante:any): Promise<any> => {
		const url:string = `${Url}/alterar-solicitante`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, dataSolicitante);
		return response.data;
	}

	const salvaAlteracaoCliente = async (dataCliente:any): Promise<any> => {
		const url:string = `${Url}/alterar-cliente`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, dataCliente);
		return response.data;
	}

	const priCliente = async (nomeCliente:any): Promise<any> => {
		const url:string = `${Url}/retorna-cliente`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, nomeCliente);
		return response.data;
	}

	const retornaSolicitante = async (nomeSolicitante:any): Promise<any> => {
		const url:string = `/retorna-solicitante`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, nomeSolicitante);
		return response.data;
	}

	const retornaSolicitanteSemDados = async (nomeSolicitante:any): Promise<any> => {
		const url:string = `${Url}/retorna-solicitantesemdados`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, nomeSolicitante);
		return response.data
	}

	const retornaCliente = async (cliente:any): Promise<any> => {
		const url:string = `/retorna-cliente`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, cliente);
		return response.data;
	}

	const retornaClienteSemDados = async (nomeCliente:any): Promise<any> => {
		const url:string = `${Url}/retorna-clientesemdados`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, nomeCliente);
		return response.data;
	}

	const enviaImagem = async (formImagemData:any): Promise<any> => {
		const url:string = `${Url}/upload`;
		const headers = { 'Content-Type': 'multipart/form-data' };
		const response:AxiosResponse<any> = await httpClientDJango.post(url, formImagemData, { headers });
		return response;
	}

	const updateDocment = async (formImagemData:any): Promise<any> => {
		const url:string = `${Url}/updateDocsAe/`;
		const headers = { 'Content-Type': 'multipart/form-data' };
		const response:AxiosResponse<any> = await httpClientDJango.put(url, formImagemData, { headers });	
		return response.data;
	}

	const enviaUpload = async (formImagemData:any): Promise<any> => {
		const url:string = `${Url}/uploadDocs`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, formImagemData);
		return response.data;
	}

	const getimagem = async (form:any): Promise<any> => {
		const url:string = `${Url}/docsAe/${form.numeroAutorizacaoEstampagem}`;
		const response:AxiosResponse<any> = await httpClientDJango.get(url, form);
		return response;
	}

	const recebeFotos = async (mapNumAE:any): Promise<any> => {
		const url:string = `${Url}/retorna-fotos`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, mapNumAE);
		return response;
	}

	const downloadFoto = async (mapNumAE:any,config:any): Promise<any> => {
		const url:string = `${Url}/download`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, mapNumAE, config);
		return response.data;
	}

	const  removeFoto = async (mapCaminho:any): Promise<any> => {
		const url:string = `${Url}/delete`;
		const response:AxiosResponse<any> = await httpClientDJango.post(url, mapCaminho);
		return response.data;
	}

	const excluirDoc = async (id: any): Promise<any> => {
		const url: string = `${Url}/deleteDocsAe/${id}`;
		const response: AxiosResponse<any> = await httpClientDJango.delete(url);
		return response.data;
	}

	const getListaPorBusca = async (data: any,  numero:any): Promise<any> => {
		const url: string = `${Url}/busca_ae/?busca=${data}&page=${numero}`;
		const response: AxiosResponse<any> = await httpClientDJango.get(url, data);
		return response.data;
	}

  	const getBlankIniciada = async (data: any): Promise<any> => {
		const url: string = `${Url}/checa-serial-iniciada`;
		const response: AxiosResponse<any> = await httpClientDJango.post(url, data);
		return response;
	}


	return {
		salvarCliente,
		estampar,
		iniciarEstampagem,
		registrar,
		cancelar,
		getAutorizacaoEstampagem,
		getAe,
		findAes,
		getBlankCancelados,
		getCnpjEstampador,
		cancelarBlankEstampagem,
		getBlankBySerialHash,
		getNumerosAes,
		getListaAePorPagina,
		getListaAePorPaginaNotConcluido,
		getAeByNumero,
		getAeByNumeroConcluida,
		getAeByPlaca,
		getContagem,
		getContagemNotConcluido,
		salvarAe,
		cancelAe,
		registerAe,
		removerEstampagem,
		buscarSolicitantes,
		buscarClientes,
		checaAeBanco,
		checaAeBancoEstampador,
		salvarSolicitante,
		salvarClienteNovo,
		salvaAlteracaoSolicitante,
		salvaAlteracaoCliente,
		priCliente,
		retornaSolicitante,
		retornaSolicitanteSemDados,
		retornaCliente,
		retornaClienteSemDados,
		enviaImagem,
		updateDocment,
		enviaUpload,
		getimagem,
		recebeFotos,
		downloadFoto,
		removeFoto,
		excluirDoc,
		getListaPorBusca,
		getBlankIniciada,
		getListaBuscaData,
		getBuscaAe,
		postFile,
		getArquivos,
		DeleteFile,
		postPdf,
		postXml,
	};
}