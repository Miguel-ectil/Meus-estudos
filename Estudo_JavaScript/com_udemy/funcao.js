// Function Forms 
function saudacao(nome) {
  return `Bo noite ${nome}!`
}
const variavel = saudacao('Miguel')
console.log(variavel)
console.log('-----------------')

// Function Forms
function soma(x = 4, y = 4) {
  const resultado = x + y
  return resultado
}
const resultado = soma()
console.log(resultado)
console.log('-----------------')

// Function Forms
const raiz = n =>  n ** 0.5
console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))
console.log('-----------------')

// Function Forms with object
function CriaPessoa(nome, sobrenome, idade) {
  return {nome, sobrenome, idade}
}
const pessoa1 = CriaPessoa('Miguel', 'Ectil', 18)
const pessoa2 = CriaPessoa('Maria', 'Oliveira', 22)
const pessoa3 = CriaPessoa('João', 'Moreira', 44)
const pessoa4 = CriaPessoa('Junior', 'Otávio', 68)

console.log(pessoa2.nome, pessoa1.sobrenome)
