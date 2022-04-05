import React, { Component } from "react";
import Formulariocadastro from "./components/Formulariocadastro";
import ListadeNotas from "./components/ListadeNotas";

class App extends Component {
  render() {
    return (
      <section>
        <Formulariocadastro />
        <ListadeNotas />
      </section>
    );
  }
}

export default App;
