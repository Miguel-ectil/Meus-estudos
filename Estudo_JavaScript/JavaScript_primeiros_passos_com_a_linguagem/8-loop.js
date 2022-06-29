console.log(`\n Trabalhando com condicionais`);

const listaDestino = new Array(
    `Salvador`, 
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadecomprador = 18;
const estaacompanhada = false;
let passagemcomprada = false;
const destino = "Salvador";

// listaDestino.push(`Curitiba`) //Adicionando
console.log("\n Destinos possiveis: ");
console.log(listaDestino);

const podecomprar = idadecomprador >= 18 || estaacompanhada == true

let contador = 0;
let destinoexiste = false;

console.log("Destino existe: ", destinoexiste);

if (podecomprar && destinoexiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for (let cont = 0 ; cont < 3 ; cont++) {
    if(listaDestino[contador] == destino){
        destinoexiste = true;
    }

}
