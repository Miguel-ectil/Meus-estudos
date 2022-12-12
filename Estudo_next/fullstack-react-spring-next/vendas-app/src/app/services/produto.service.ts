import { httpClient } from 'app/http'
import { Produto } from 'app/models/produtos'
import { AxiosResponse } from 'axios'

const resourceURL: string = "/api/produtos"

export const useProdutoService = () => {

    const salvar = async (produto: Produto) : Promise<Produto> => {
       const response: AxiosResponse<Produto> = await httpClient.post<Produto>(resourceURL, produto )
       return response.data;
    }

    const atualizar = async (produto: Produto) : Promise<void> => {
        const url: string = `${resourceURL}/${produto.id}` 
        await httpClient.put<Produto>(url, produto)
    }

    return {
        salvar,
        atualizar
    }
}