export interface IEstoqueEstampador {
	id: number;
	carro_estoque: number;
	carro_produzidos: number;
	carro_transporte: number;
	carro_inativados: number;	
	carro_estoque_preta: number;
	carro_produzidos_preta: number;
	carro_transporte_preta: number;
	carro_inativados_preta: number;	
	
	mini11_produzidos: number;
	mini11_estoque: number;
	mini11_transporte: number,
	mini11_inativados: number,

	mini11_estoque_preta: number,
	mini11_produzidos_preta: number,
	mini11_transporte_preta: number,
	mini11_inativados_preta: number,

	mini13_estoque: number,
	mini13_produzidos: number,
	mini13_transporte: number,
	mini13_inativados: number,

	mini13_estoque_preta: number,
	mini13_produzidos_preta: number,
	mini13_transporte_preta: number,
	mini13_inativados_preta: number,

	moto_estoque: number,
	moto_produzidos: number,
	moto_transporte: number,
	moto_inativados: number,

	moto_estoque_preta: number,
	moto_produzidos_preta: number,
	moto_transporte_preta: number,
	moto_inativados_preta: number
}