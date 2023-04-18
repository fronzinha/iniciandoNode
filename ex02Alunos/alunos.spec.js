// Teste Unitario

// importando
const { encontrarAluno, filtrarAluno, filtrarDoisAluno, construirAluno } = require("./alunos")

// para rodar o teste -> npm run test

// TDD - Teste Driven Development

describe("Função Encontrar Aluno", () => {
    it("Deve retornar 'Encontrei' quando encontrar um nome 'João' da lista", () => {

        // GIVEN
        const nomeAluno = "João"
        const listaAluno = ["Guilherme", "Nicolas", "João"]

        // WHEN
        const resultado = encontrarAluno(nomeAluno, listaAluno)

        // THEN
        expect(resultado).toBe("Encontrei")

    })

    it("Deve retornar 'não encontrei' quando não encontrar um nome na lista", () => {
        // GIVEN
        const nome = "Vinicius"
        const listaAluno = ["Guilherme", "Nicolas", "João"]

        // WHEN
        const resultado = encontrarAluno(nome, listaAluno)

        // THEN
        expect(resultado).toBe("Não encontrei")
    })
})

describe("Função Filtrar Aluno", () => {
    it("deve retornar o nome de um aluno se encontrar o aluno na lista", () => {

        // GIVEN
        const nomeAluno = "João"
        const listaAluno = ["Guilherme", "Nicolas", "João"]

        // WHEN
        const resultado = filtrarAluno(nomeAluno, listaAluno)
        const resultadoEsperado = ["João"]

        // THEN
        expect(resultado).toEqual(resultadoEsperado)
    })

    it("deve retornar o nome de dois alunos se encontrar dois alunos na lista", () => {

        // GIVEN
        const nomeAluno = "João"
        const listaAluno = ["João", "Guilherme", "Nicolas", "João"]

        // WHEN
        const resultado = filtrarDoisAluno(nomeAluno, listaAluno)
        const resultadoEsperado = ["João", "João"]

        // THEN
        expect(resultado).toEqual(resultadoEsperado)
    })

})

describe("Função Construir Aluno", () => {
    it("Deve retornar um objeto de aluno ao receber nome e idade", () => {

        // GIVEN
        const nomeDoAluno = "João"
        const idadeDoAluno = 27

        // WHEN
        const resultado = construirAluno(nomeDoAluno, idadeDoAluno)

        const resultadoEsperado = {
            nome: nomeDoAluno,
            idade: idadeDoAluno
        }

        // THEN
        expect(resultado).toEqual(resultadoEsperado)
    })

})
