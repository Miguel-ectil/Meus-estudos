"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function descontoCompra(preco, desconto = 0.08) {
    return preco * (1 - desconto);
}
console.log(descontoCompra(100));
function exibirMensagem(mensagem, saudar = 'Fala, pessoal!') {
    return saudar + ' ' + mensagem + '!';
}
console.log(exibirMensagem('JavaScript Developers'));
function exibirNome(nome, sobrenome = 'Lemos') {
    return nome + ' ' + sobrenome;
}
const resultado_1 = exibirNome('Glaucia');
const resultado_2 = exibirNome('Glaucia', undefined);
const resultado_4 = exibirNome('Glaucia', 'de Souza');
console.log(resultado_1);
console.log(resultado_2);
console.log(resultado_4);
