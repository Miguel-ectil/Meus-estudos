
// tipo de dado
// booleanos

// conversão implicita
const numero = 456;
const numeroString = Number("456a");

// console.log(numero === numeroString)
// console.log(numero == numeroString)

//Number()
//String()
// console.log(numero +  numeroString)

// // conversão explicita


// let telefone = 12341234;
// console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

// let usuarioConectado = false;
// console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.

// usuarioConectado = true;
// console.log(String(usuarioConectado));


// let varInicial = 0;
// let ifFalse = 0;
// let constDeTexto = "Alura";

// console.log(varInicial + constDeTexto)

// var respostaDeTudo = 42
// let idade = 29
// const pi = 3.14

// {
//     var respostaDeTudo = 3.14
//     let idade = 42
//     const pi = 29
//     console.log(respostaDeTudo, idade, pi)

// }
// console.log(respostaDeTudo, idade, pi)

let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100