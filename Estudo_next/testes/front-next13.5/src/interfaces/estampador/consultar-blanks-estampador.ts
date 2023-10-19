import { Type } from "typescript";3
import React, {SetStateAction} from "react";
export interface ConsultarBlanksEstampador {
	status?: string;
	inutilizacao?: string;
	loteEntrada?: number;
	loteSaida?: string;
	tipoPlaca?: string;
	serial?: any
	estampador?: string;
	creatat?:number
	id?: number;
	hash?: number;
 
}