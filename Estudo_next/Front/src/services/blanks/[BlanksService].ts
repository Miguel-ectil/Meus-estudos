import { Api,Dvr } from "../../config_api/axios";
import { LotesRecebidosEstampador} from "../../interfaces/Estampador/LotesRecebidosEstampador";
import { ConsultarBlanks } from "../../interfaces/Estampador/ConsultarBlanks";


const getBlanks = () => Api.get<LotesRecebidosEstampador[]>('confirmar-recebimento-caixas');
// const inserirBlankLote = () => Api.get<[]>();


let getConsultarBlanks = () => Dvr.get<ConsultarBlanks[]>('v1/blanks/${hash}');

const getById = async (): Promise<any> =>{};
const create = async (): Promise<any> =>{};
const updateById = async (): Promise<any> =>{};
const deleteById  = async (): Promise<any> =>{};



export const BlanksService =  {
	getBlanks,
	getConsultarBlanks,
    getById,
    create,
	updateById,
    deleteById,
};