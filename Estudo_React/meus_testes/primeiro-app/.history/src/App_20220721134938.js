import React from "react";
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
import Conteudo1 from "./componentes/conteudo_1";
import Conteudo2 from "./componentes/conteudo_2";
import Conteudo3 from "./componentes/conteudo_3";
import './App.css'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

export default function App(){
  return (
    <>
      <Conteudo3/>
      <section className="teste">
      <h1>Adicionando textos</h1>
        <p>Olá eu sou o Miguel Ectil</p>
        <p>bebe yo soy adicto a tu piel sienpre vuelbo a caer auque quiera romper</p>
        <AccountCircle />
        <MenuIcon />
        <div>  
          <SearchIcon />
          <InputBase
            placeholder="Pesquise…"
            classes={{
            }}
          />
        </div>
      </section> 
      <Conteudo1 />
      <Conteudo2 />
    </>
  );
}
