import { Dvr } from "../../config_api/axios";
import { ConsultarLotesRecebidos } from "../../interfaces/Estampador/ConsultarLotesRecebidos";


// const getConsultarLotesRecebidos = () => Api.get<ConsultarLotesRecebidos[]>('consultar-lotes-recebidos');
const getConsultarLotesRecebidos = () => Dvr.get<ConsultarLotesRecebidos[]>('v1/blank/find-by-lote-entrada');
console.log(getConsultarLotesRecebidos)




export const ConsultarLotesRecebidosService =  {
	getConsultarLotesRecebidos,

};