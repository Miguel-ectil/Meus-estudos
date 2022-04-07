"use strict";
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
let numero = 1;
while (numero <= 20) {
    if (numero % 5 == 0) {
        console.log('O primeiro número múltiplo de 5 entre 1 a 20 é...: ', numero);
        break;
    }
    numero++;
}
let contadorUsuario = 0;
const usuario = ['Glaucia', 'Jurema', 'Prince'];
while (usuario[contadorUsuario]) {
    console.log('Usuários...: ', usuario[contadorUsuario]);
    contadorUsuario++;
}
let contador_01 = 0;
do {
    console.log(contador_01);
    contador_01++;
} while (contador_01 < 5);
