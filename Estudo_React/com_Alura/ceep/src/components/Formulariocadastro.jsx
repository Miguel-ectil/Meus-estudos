import React, { Component } from "react";

class Formulariocadastro extends Component{
  render() {
      return (
        <form>
          <input type="text" placeholder="Titulo" />
          <textarea placeholder="Escreva a sua nota..." />
          <button>Criar Nota</button>
        </form>
      );
  }  
}
export default Formulariocadastro;