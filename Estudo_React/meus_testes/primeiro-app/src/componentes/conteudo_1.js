
import React from "react";
import { TextField } from "@material-ui/core";
import faetec from './imgs/faetec-400.png'


export default function Conteudo1(){  
    return(
        <section className='teste'>
            <p>========================================</p>
            <h3>Adicionando imagem</h3>
            <img src={faetec}/><br/>
            <h1>Adicionando conteudo </h1>
            <p>Dia 15 de março ir até a policia federal</p>
            <p>Para poder renovar o meu rg</p>
            <TextField
                id="miguel"
                label="Miguel"
                variant="filled"
                // fullWidth
                margin="normal"
            />
        </section>
    )
}