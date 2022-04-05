
const idadeMinima = 18;
const idadeCliente = 19;

// if (idadeCliente >= idadeMinima){
//     console.log("Cerveja")
// } else {
//     console.log("Suco")
// }
            //condição                    //saida     //saida  
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco")


const nome = "Miguel" 
const idade = 16;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)