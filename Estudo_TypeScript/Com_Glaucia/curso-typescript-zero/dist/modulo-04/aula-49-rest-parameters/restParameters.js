"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function somarNumeros(...numeros) {
    let total = 0;
    numeros.forEach((numero) => (total += numero));
    return total;
}
console.log(somarNumeros(30, 20));
console.log(somarNumeros(40, 50, 50, 40, 20));
function listarFrutas(frase, ...frutas) {
    return frase + ' ' + frutas.join(', ');
}
console.log(listarFrutas('Glaucia, você precisa ir na feira para comprar...:', '🥥', '🍓', '🍌', '🍍'));
class Produtos {
    exibirProdutos(...produtos) {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}
const departamentoInformatica = new Produtos();
console.log('Todos os produtos do departamento de Informatica disponíveis no estoque...: ');
departamentoInformatica.exibirProdutos('Mouse', 'Notebook', 'USB', 'Monitor', 'Teclado', 'WebCam');
