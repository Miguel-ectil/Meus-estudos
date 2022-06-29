console.log(`Trabalhando com condicionais`);

const listaDestino = new Array(
    `Salvador`, 
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadecomprador = 18;
const estaacompanhada = false;
const passagemcomprada = true;

// listaDestino.push(`Curitiba`) //Adicionando
console.log("Destinos possiveis: ");
console.log(listaDestino);

// if (idadecomprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDestino.splice(1,1); // removendo item
// } else if (estaacompanhada) {
//     console.log("O comprador esta sim acompanhado");
//     listaDestino.splice(1,1); // removendo item {
// } else {
//     console.log("Você não é maior de idade e não esta acompanhado, não posso te vender");
// }


if (idadecomprador >= 18 || estaacompanhada == true) {
    console.log("Boa Viagem!!");
    listaDestino.splice(2,1); // removendo item
} else {
    console.log("Você não é maior de idade e não esta acompanhado, não posso te vender");
}

console.log("Embarque: \n\n")
if (idadecomprador >= 18 && passagemcomprada) {
    console.log("Boa Viagem")
}else{
    console.log("Você não pode embarcar")
}

console.log(listaDestino);

/* console.log(idadecomprador > 18);
console.log(idadecomprador < 18);
console.log(idadecomprador >= 18);
console.log(idadecomprador <= 18);
console.log(idadecomprador == 18); */


// array Javacript site estudar lista

// || = or  && = and