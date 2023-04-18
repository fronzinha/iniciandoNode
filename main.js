// importando
const moduloCalculadora = require("./calculadora")
const moduloAlunos = require("./alunos")

// ======= entrada =======

// == calculadora ex 1 ==
const numero01 = 5
const numero02 = 0

// == alunos ex 2 ==
const nomeAluno = "João"
const idade = 27
const listaAluno = ["Guilherme", "Nicolas", "João", "Carlos"]
const listaDeDoisAlunos = ["Guilherme", "Nicolas", "João", "Carlos", "João"]

// ======= processamento =======

// == calculadora ex  1==
const resultadoSomaTela = moduloCalculadora.soma(numero01, numero02)
const resultadoSubtracaoTela = moduloCalculadora.subtracao(numero01, numero02)
const resultadoMultiplicacaoTela = moduloCalculadora.multiplicacao(numero01, numero02)
const resultadoDivisaoTela = moduloCalculadora.divisao(numero01, numero02)


// == alunos ex 2 ==
const resultadoEncontrarNomeAluno = moduloAlunos.encontrarAluno(nomeAluno, listaAluno)
const resultadoFiltrarNomeAluno = moduloAlunos.filtrarAluno(nomeAluno, listaAluno)
const resultadoFiltrarNomeDeDoisAluno = moduloAlunos.filtrarAluno(nomeAluno, listaDeDoisAlunos)
const resultadoConstruirAluno = moduloAlunos.construirAluno(nomeAluno, idade)

// ======= saida =======

// == calculadora ex 1 ==
console.log(resultadoSomaTela)
console.log(resultadoSubtracaoTela)
console.log(resultadoMultiplicacaoTela)
console.log(resultadoDivisaoTela)

// == alunos ex 2 ==
console.log(resultadoEncontrarNomeAluno)
console.log(resultadoFiltrarNomeAluno)
console.log(resultadoFiltrarNomeDeDoisAluno)
console.log(resultadoConstruirAluno)
