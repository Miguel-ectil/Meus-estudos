import { useCallback, useState } from "react"
import { LotesRecebidosEstampador } from "../interfaces/Estampador/LotesRecebidosEstampador";
import { BlanksService} from "../services/blanks/[BlanksService]"


export const useLotesRecebidosEstampador = ( )=> {
	const[lotes , setlotesrecebidos] = useState<LotesRecebidosEstampador[]>();

	const getBlanks =useCallback(async () => {
		const {status, data} = await BlanksService.getBlanks()
	if(status!== 200)throw new Error();
	setlotesrecebidos(data)
	

},[])
return {
	lotes,
	getBlanks,
}
}