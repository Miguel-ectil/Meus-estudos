export interface BlankEstampador {
    createAt: string;
    estampador: number;
    inutilizacao: string;
    loteEntrada: number;
    loteSaida: number;
    serial: number;
    serialHash: string;
    status: string;
    tipoPlaca: string;
	hash: any;
} 

export interface InativarSerialEstampador {
	observacoes?: any;
	serial?: any;
}