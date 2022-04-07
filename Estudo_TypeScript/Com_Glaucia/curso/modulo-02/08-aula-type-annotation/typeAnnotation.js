"use strict";
// ==> Variáveis [Type Annotations]
let nome = 'Miguel Ectil';
console.log(nome);
console.log('==========================================================');
// ==> Array [Type Annotations]
let animais = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);
console.log('==========================================================');
// ==> objetos [Type Annotations]
let carro;
carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000 };
console.log(carro);
console.log('==========================================================');
// ==> Functions [Type Annotations]
function multiplicarNumero(num1, num2) {
    return num1 * num2;
}
console.log(multiplicarNumero(2, 5));
