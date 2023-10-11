import { AxiosResponse ,ResponseType} from "axios";
import { httpClientDJango } from "../../config_api/axios";

//const ratelUrl:string = `/v1/nf`;
// const ratelUrl: string = 'ratel'

export const useCadastros = () => {
  // está sendo usado
  const editarEmpresaNF = async (cnpj:number, data: any): Promise<any> => {
    const url:string = `/alterarEmpresa/${cnpj}`;
    const response:AxiosResponse<any> = await httpClientDJango.patch(url, data);	
    return response.data;
  }

  // está sendo usado
  const criarEmpresaNF = async (data:any): Promise<any> => {
    const url:string = `/cadastroEmpresa`;
    const response:AxiosResponse<any> = await httpClientDJango.post(url, data);	
    return response.data;
	}

  // está sendo usado
  const createCertificate = async (cnpj:number): Promise<any> => {
    const url:string = `/generate-certificate/${cnpj}`;
    const response:AxiosResponse<any> = await httpClientDJango.get(url);
    return response.data;
	}

  // está sendo usado
  const registerPessoaFisica = async (data:any): Promise<any> => {
    const url:string = `/cadastrar-contato`;
    const response:AxiosResponse<any> = await httpClientDJango.post(url, data)
    return response.data
  }

  // está sendo usado
  const registerPessoaJuridica = async (data:any): Promise<any> => {
    const url:string = `/cadastrar-contato`;
    const response:AxiosResponse<any> = await httpClientDJango.post(url)
    return response.data
  }

  // está sendo usado
  const getSolicitante = async (): Promise<any> => {
    const url:string = `/solicitantes`;
    const response:AxiosResponse<any> = await httpClientDJango.get(url);
    return response.data;
  }

  // está sendo usado
  const getProprietario = async (): Promise<any> => {
    const url:string = `/clientes`;
    const response:AxiosResponse<any> = await httpClientDJango.get(url);
    return response.data;
	}

  // está sendo usado
  const postRegistroSolicitante = async (solicitante: any): Promise<any> => {
    const url:string = `/registro-solicitante`;
    const response:AxiosResponse<any> = await httpClientDJango.post(url, solicitante);
    return response.data;
  }

  // está sendo usado
  const postRegistroProprietario = async (proprietario: any): Promise<any> => {
    const url:string = `/registro-cliente`;
    const response:AxiosResponse<any> = await httpClientDJango.post(url, proprietario);
    return response.data;
  }

    // está sendo usado
    const postEditSolicitante = async (solicitante: any): Promise<any> => {
      const url:string = `/retorna-solicitantesemdados`;
      const response:AxiosResponse<any> = await httpClientDJango.post(url, solicitante);
      return response.data;
    }
  
    // está sendo usado
    const postEditProprietario = async (proprietario: any): Promise<any> => {
      const url:string = `/retorna-clientesemdados`;
      const response:AxiosResponse<any> = await httpClientDJango.post(url, proprietario);
      return response.data;
    }

    const atualizaSolicitante = async (nomeSolicitante:any): Promise<any> => {
      const url:string = `/atualiza-solicitante`;
      const response:AxiosResponse<any> = await httpClientDJango.put(url, nomeSolicitante);
      return response.data;
    }

    const atualizaCliente = async (cliente:any): Promise<any> => {
      const url:string = `/atualiza-cliente`;
      const response:AxiosResponse<any> = await httpClientDJango.put(url, cliente);
      return response.data;
    }

  return {
    createCertificate,
    editarEmpresaNF,
    criarEmpresaNF,
    registerPessoaJuridica,
    registerPessoaFisica,
    getSolicitante,
    getProprietario,
    postRegistroSolicitante,
    postRegistroProprietario,
    postEditSolicitante,
    postEditProprietario,
    atualizaSolicitante,
    atualizaCliente
  }
}
