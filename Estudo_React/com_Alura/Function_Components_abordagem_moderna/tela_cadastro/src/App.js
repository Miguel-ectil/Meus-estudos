import  React, {Component} from 'react';
import './App.css';
import FormularioCadastro from './componets/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto'

import {Container, Typography } from '@material-ui/core';
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">  {/*maxWidth="sm"serve para centralizar o conteudo no centro da tela */}
        <Typography variant='h3' component="h1" align='center'>Formulario de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if(cpf.length !== 11) {
    return {valido:false, texto:"O CPF deve ter 11 digito."}
  }else{
    return {valido:true, texto:""}
    
  }
}

export default App;
