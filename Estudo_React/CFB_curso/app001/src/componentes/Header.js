import React from "react";
import faetec from './imgs/faetec-400.png'

export default function Header(){
    return(
        <header>
            <h1 style={{color:'#f00', fontSize:'3em'}}
            >Curso de React</h1>
            <img src={faetec}/>
        </header>
    )
}