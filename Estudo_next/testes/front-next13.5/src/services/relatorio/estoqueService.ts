import { AxiosResponse } from "axios";
import { httpClientDJango } from "../../config_api/axios";

const resourceUrl = 'ratel'

export const useEstoqueService = () => {
    const getQuantidPlacas = async (cnpj:any): Promise<any> => {
        const url: string = `/estoquePlacas/${cnpj}`
        const response: AxiosResponse<any> = await httpClientDJango.get(url);
        return response
    }

    return {
        getQuantidPlacas
    }
}
