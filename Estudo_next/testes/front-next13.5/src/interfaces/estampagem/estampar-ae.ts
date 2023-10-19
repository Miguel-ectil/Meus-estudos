export interface EstamparAe {

    cancelamento: string;
    chassis: string;
    dataHoraInclusao: string;
    disableDianteira: boolean;
    disableTraseira: boolean;
    estadoAutorizacao: string;
    motivoEstampagem: string;
    municipioAutorizado: {id: string; nome: string; uf: string}
    numeroAutorizacao: string
    serialBlankDianteira: number
    serialBlankTraseira: number
    tipoVeiculoOficial: null
    tiposPlacas: {dianteira: boolean; traseira: boolean; segundaTraseira: boolean};
    ufOrigemAutorizacao: string;
    veiculo: {placa: string; tipo: string; especie: string; categoria: string};
    _links: {strind: {}};
}