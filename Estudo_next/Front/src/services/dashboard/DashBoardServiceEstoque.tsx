import { Api } from "../../config_api/axios";
import { EstoqueEstampador } from "../../interfaces/Estampador/EstoqueEstampador";


const getEstoque = () => Api.get<EstoqueEstampador[]>('estoque');
// EstoqueEstampador e  um array com os dados que vem do backend



export const DashboardServiceEstoque =  {
	getEstoque,
	
};