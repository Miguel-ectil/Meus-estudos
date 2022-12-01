import { useCallback, useState } from "react"
import { ConsultarLotesRecebidos } from "../interfaces/Estampador/ConsultarLotesRecebidos"; 
import { ConsultarLotesRecebidosService } from "../services/lotes/ConsultarLotesRecebidosService";


export const useConsultarLotesRecebidos = ( )=> {
	const[consultalotesrecebidos , setConsultarLotesRecebidos] = useState<ConsultarLotesRecebidos[]>();

	const getConsultarLotesRecebidos =useCallback(async () => {
		const {status, data} = await ConsultarLotesRecebidosService.getConsultarLotesRecebidos()
	if(status!== 200)throw new Error();
	setConsultarLotesRecebidos(data)
	


},[])
return {
	getConsultarLotesRecebidos,
	consultalotesrecebidos,
};
};