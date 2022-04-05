import React from "react";

export default function Dados(props){
    let n1 = 10
    let n2 = 222
    return(
        <section className="caixa">
            <p>Canal: {props.canal()}</p>
            <p>YouTube: {props.youtube}</p>
            <p>Curso: {props.curso}</p>
            <p>{'A soma de ' + n1 + ' com ' + n2 + ' é igual a ' + props.somar(n1,n2)}</p>
        </section>
    )
}