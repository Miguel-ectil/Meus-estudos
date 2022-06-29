// Declaração de função

function minhaFuncao(param) {
    // bloco de código
}

// minhaFuncao("param")

// experessão de fução

const soma = function(num1, num2) {return num1 + num2}
// console.log(soma(1, 1))

// Difernça principal: HOISTING
// Funções e var são "listadas" no topo do arquivo

console.log(apresentar())

function apresentar(){
    return "olá";
}

console.log(soma(1, 1))
const soma = function(num1, num2) {return num1 + num2}

// console.clear("ERRO!")