"use strict";
function error(message) {
    throw new Error(message);
}
console.log(error('Erro de Mensagem - 01'));
function rejectMessage() {
    return error('Error de Mensagem - 02');
}
console.log(rejectMessage());
const loopInfinito = function loop() {
    while (true) {
        console.log('Oi, Developers!');
    }
};
const algumaCoisaVoid = null;
