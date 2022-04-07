"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numeroMax = 100;
let contador = 100;
if (contador < numeroMax) {
    contador++;
}
console.log(contador);
const permissaoIdadeDirigir = 16;
if (permissaoIdadeDirigir >= 18) {
    console.log('Você está habilitado para dirigir!');
}
const permissaoIdadeDirigir01 = 18;
if (permissaoIdadeDirigir01 <= 17) {
    console.log('Você está habilitado para dirigir!');
}
else {
    console.log('Você não está habilitado para dirigir!');
}
let desconto;
let valorCompra = 14;
if (valorCompra > 0 && valorCompra <= 5) {
    desconto = 5;
}
else if (valorCompra > 5 && valorCompra <= 10) {
    desconto = 10;
}
else {
    desconto = 15;
}
console.log(`Você teve um desconto de...: ${desconto}% desconto`);
const idadeVotacao = 16;
const podeVotar = (idadeVotacao >= 18) ? 'Você é elegível para votar.' : 'Você não é elegível para votar.';
console.log(podeVotar);
