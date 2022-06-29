// parâmetros de função

//               //2       //2
// function soma(numero1, numero2) {
//     return numero1 + numero2;
// }

// console.log(soma(2, 2))
// console.log(soma(244, 20))
// console.log(soma(-400, 60))

// parâmetro x argumento

// oredem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade( "Miguel", 16))

function soma(numero1, numero2) {
    return numero1 + numero2;
}
function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}
                            //9       
console.log(multiplica(soma(4, 5)))

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
console.log(operacaoMatematica(15, 30, 45)) // 90

//    function cumprimentaPessoa(pessoa){
//     console.log(`oi, ${pessoa}!`)
//    }
   
//    cumprimentaPessoa('Helena')

   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

 /*   console.clear('Deu erro!') */

 function comParametro(param) {
    console.log(param)
}
comParametro() // undefined