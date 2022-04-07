"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function somarNumeros(num1, num2) {
    return num1 + num2;
}
const resultado = somarNumeros(2, 2);
console.log(resultado);
const saudar = function (mensagem) {
    return mensagem;
};
console.log(saudar('Olá, Developers!'));
const saudar_03 = (mensagem) => {
    return mensagem;
};
console.log(saudar_03('Fala, Pessoal!'));
const saudar_04 = new Function('mensagem', 'return "Fala " + mensagem');
console.log(saudar_04('Galera!'));
