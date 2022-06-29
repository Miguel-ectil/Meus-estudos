const Livro = {
    nome: "React Native",
    editora: "Casa do código",
    paginas: 185,
    anunciar: function(){
        console.log("A alura indica o livro" + this.nome + "!")
    }
}
Livro.anunciar()
