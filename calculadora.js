// Função de somatoria, subtração, multiplicação e divisão

function soma(num01, num02) {
    const resultadoSoma = num01 + num02

    return resultadoSoma
}

function subtracao(num01, num02) {
    const resultadoSubtracao = num01 - num02

    return resultadoSubtracao
}

function multiplicacao(num01, num02) {
    const resultadoMult = num01 * num02

    return resultadoMult
}


function divisao(num01, num02) {
    if (num02 === 0) {
        return -101;
    }
    else {
        resultadoDivisao = num01 / num02

        return resultadoDivisao
    }
}

// exportando

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao,
}

// Modelo de Arrow Functions

// function somatoria = (num01, num02) => {
//     const somaArrowFunction - num01 + num02

//     return somaArrowFunction
// }
