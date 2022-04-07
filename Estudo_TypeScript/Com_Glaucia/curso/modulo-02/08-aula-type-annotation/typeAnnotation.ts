
// ==> Variáveis [Type Annotations]
let nome: string = 'Miguel Ectil';
console.log(nome);

console.log('==========================================================')

// ==> Array [Type Annotations]
let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);

console.log('==========================================================')

// ==> objetos [Type Annotations]
let carro: {
    nome: string;
    ano: number;
    preco: number;
};

carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000}
console.log(carro);

console.log('==========================================================')

// ==> Functions [Type Annotations]
function multiplicarNumero(num1: number, num2: number) {
    return num1 * num2;
}
console.log(multiplicarNumero(2,5));