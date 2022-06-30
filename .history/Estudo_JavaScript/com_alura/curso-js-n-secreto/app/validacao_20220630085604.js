function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = + chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido</div>'
        console.error('Valor invalido')
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
            elementoChute.innerHTML += `<div>Valor inválido: o número precisa ser maior que ${menorValor} e menor que ${maiorValor}</div>
        `
        return
    }

    if (numero == numeroSecreto) {
        document.body.innerHTML = `
            <h2><i class="fa-solid fa-face-party"></i> PARABENS! Você acertou o número secreto</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"</i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"</i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero) 
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}