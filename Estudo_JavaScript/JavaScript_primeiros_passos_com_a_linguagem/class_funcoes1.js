const Livro = function(nome, editora, paginas){
    gnome = nome,
    geditora = editora,
    gpaginas = paginas

    this.getnome = function(){
        return gnome
    }
    this.geteditora = function(){
        return this.geditora
    }
    this.getpaginas = function(){
        return gpaginas
    }
}

const graphql = new Livro("graphql", "casa do código", 143)
console.log(graphql.getnome())
console.log(graphql.geteditora())
console.log(graphql.getpaginas())

const nome = "Alura"

const temp = new String(nome) //
console.log(temp.toString())

///////////////////////////////

class Livro {
    constructor(nome, editora, paginas)
}