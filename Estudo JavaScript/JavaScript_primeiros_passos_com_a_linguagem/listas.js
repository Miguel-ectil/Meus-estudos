console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saopaulo = `SãoPaulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDestino = new Array(
    `Salvador`, 
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDestino.push(`Curitiba`) //Adicionando
console.log("Destinos possiveis: ");
// console.log(salvador, saopaulo, rioDeJaneiro)
console.log(listaDestino);

listaDestino.splice(1,1);
console.log(listaDestino);

console.log(listaDestino[1], listaDestino[2]); // array Javacript site estudar lista