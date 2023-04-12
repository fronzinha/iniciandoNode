// importando

const moduloCalculadora = require ("./calculadora")

// entrada
const numero01 = 5
const numero02 = 0

// processamento

const resultadoSomaTela = moduloCalculadora.soma(numero01, numero02)
const resultadoSubtracaoTela = moduloCalculadora.subtracao(numero01, numero02)
const resultadoMultiplicacaoTela = moduloCalculadora.multiplicacao(numero01, numero02)
const resultadoDivisaoTela = moduloCalculadora.divisao(numero01, numero02)

// saida

console.log (resultadoSomaTela)
console.log (resultadoSubtracaoTela)
console.log (resultadoMultiplicacaoTela)
console.log (resultadoDivisaoTela)