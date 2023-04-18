// Teste Unitario 

//                ----------- SOMA ----------

const { soma } = require ("./calculadora")

it ("Deve receber o valor de 5 e 2 e retornar 7", () => {

// GIVEN - Dado que (configuração do teu cenário)
const numero01 = 5
const numero02 = 2

// WHEN - Quando (o que for testar)
const resultadoSoma = soma(numero01, numero02)

// THEN - Então quero que aconteça isto
expect(resultadoSoma).toBe(7)

})

//                ----------- SUBTRAÇÂO ----------

const { subtracao } = require ("./calculadora")

it ("Deve receber o valor de 10 e 5 e retornar 5", () => {

// GIVEN - Dado que (configuração do teu cenário)
const numero01 = 10
const numero02 = 5

// WHEN - Quando (o que for testar)
const resultadoSubtracao = subtracao(numero01, numero02)

// THEN - Então quero que aconteça isto
expect(resultadoSubtracao).toBe(5)

})

//                ----------- Multiplicação ----------

const { multiplicacao } = require ("./calculadora")

it ("Deve receber o valor de 10 e 2 e retornar 10", () => {

// GIVEN - Dado que (configuração do teu cenário)
const numero01 = 10
const numero02 = 2

// WHEN - Quando (o que for testar)
const resultadoMult = multiplicacao(numero01, numero02)

// THEN - Então quero que aconteça isto
expect(resultadoMult).toBe(20)

})

//                ----------- Divisão ----------

const { divisao } = require ("./calculadora")

it ("Deve receber o valor de 20 e 2 e retornar 10", () => {

// GIVEN - Dado que (configuração do teu cenário)
const numero01 = 30
const numero02 = 2

// WHEN - Quando (o que for testar)
const resultadoDivisao = divisao(numero01, numero02)

// THEN - Então quero que aconteça isto
expect(resultadoDivisao).toBe(15)

})


//                ----------- Divisão Com erro ----------

const { divisaoErro } = require ("./calculadora")

it ("Deve receber o valor de 20 e 0 e retornar erro -101", () => {

// GIVEN - Dado que (configuração do teu cenário)
const numero01 = 20
const numero02 = 0

// WHEN - Quando (o que for testar)
const resultadoDivisaoComErro = divisao(numero01, numero02)

// THEN - Então quero que aconteça isto
expect(resultadoDivisaoComErro).toBe(-101)

})