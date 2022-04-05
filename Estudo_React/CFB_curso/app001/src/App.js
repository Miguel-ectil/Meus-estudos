import React from "react";
import Header from "./componentes/Header";
import Corpo from "./componentes/Corpo";
import './App.css'

export default function App(){

  return (
    <>
      <Header />
      <Corpo />
      <section className="caixa">
        <p className="texto">Olá eu sou o Miguel Ectil</p>
        <p>bebe yo soy adicto a tu piel sienpre vuelbo a caer auque quira romper</p>
        <a href='https://github.com/Miguel-ectil' target='_blank'>Miguel ectil</a>
      </section>
    </>
  );
}
