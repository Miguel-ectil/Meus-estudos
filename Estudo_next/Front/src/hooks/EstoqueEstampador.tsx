import { useCallback, useState } from "react"
import { LotesRecebidosEstampador } from "../interfaces/Estampador/LotesRecebidosEstampador"
import { EstoqueEstampador } from "../interfaces/Estampador/EstoqueEstampador";
import { DashboardServiceEstoque } from "../services/dashboard/DashBoardServiceEstoque";
import { BlanksService } from "../services/blanks/[BlanksService]"


// export const useLotesRecebidosEstampador = ( )=> {
// 	const[lotes , setLotes] = useState<LotesRecebidosEstampador[]>();

// 	const getBlanks =useCallback(async () => {
// 		const {status, data} = await BlanksService.getBlanks()
// 	if(status!== 200)throw new Error();
// 			setLotes(data)
	


// },[])
// return {
// 	lotes,
// 	getBlanks,
// };
// };

export const useDashboardeEstoque = ( )=> {
	const[estoque , setEstoque] = useState<EstoqueEstampador[]>();

	const getEstoque =useCallback(async () => {
		const {status, data} = await DashboardServiceEstoque.getEstoque()
	if(status!== 200)throw new Error();
			setEstoque(data)
	


},[])
return {
	estoque,
	getEstoque,
};
};