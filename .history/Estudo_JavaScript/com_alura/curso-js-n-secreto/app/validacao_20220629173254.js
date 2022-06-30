function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = + chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido</div>'
        console.error('Valor invalido')
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o número precisa ser maior que ${menorValor} e menor que ${maiorValor}</div>`
        ret
    }

    if (numero == numeroSecreto) {
        document.body.innerHTML = `
            <h2> PARABENS! Você acertou o número secreto</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero) 
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}