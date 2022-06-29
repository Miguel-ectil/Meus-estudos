
const texto1 = "Olá, Mundo!";
const text02 = 'Olá, Mundo!';
const senha = "s1e2n3h4a5!";
const StringDeNumeros = "34567";

const citacao = 'My name is! ';
const meunome = "Miguel";

// Concatenação (+)
console.log(citacao + meunome)


// icons
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'
const flecha = '\u2193'
const coracao = '\u1F5A'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
console.log(flecha)
console.log(coracao)


// Tratando string para minisculos (toLowerCase)
// const cidade = "belo horizonte";
// const input = "Belo Horizonte";

// console.log(cidade === input);
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); 

console.log('MIGUEL'.toLowerCase());

// para sabermos quantos caracteres uma string contém (senha,nome...)
const contarsenha = "s1e2n3h4a5"
console.log(contarsenha.length)

let myString = "campainhas";
myString.length = 4;
console.log(myString);
console.log(myString.length)

// Template string ou template literal