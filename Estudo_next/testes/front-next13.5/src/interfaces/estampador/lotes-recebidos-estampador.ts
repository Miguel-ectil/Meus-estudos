export interface  LotesRecebidosEstampador {
	id: string;
	status: string;
	inutilizacao: string;
	loteEntrada: number;
	loteSaida: string ;
	tipoPlaca: string;
	serial: number
	estampador: string;
	creatat: number

};

export interface ConfirmarLotesRecebidosEstampador {
	id: any;
	obs: any;
	idEstampador: any;
}