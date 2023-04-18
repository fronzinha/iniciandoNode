// Exportando
module.exports = {
    encontrarAluno,
    filtrarAluno,
    filtrarDoisAluno,
    construirAluno
}

function encontrarAluno(nomeAluno, listaAluno) {

    const resultadoFind = listaAluno.find(
        (aluno) => aluno == nomeAluno
    )

    if (resultadoFind !== undefined)
        return "Encontrei"

    return "Não encontrei"
}


function filtrarAluno(nomeAluno, listaAluno) {

    const resultadoFilter = listaAluno.filter((aluno) => aluno == nomeAluno)

    return resultadoFilter
}
function filtrarDoisAluno(nomeAluno, listaAluno) {

    const resultadoFilter = listaAluno.filter((aluno) => aluno == nomeAluno)

    return resultadoFilter
}

function construirAluno(nomeDoAluno, idadeDoAluno) {

    const objetoAluno = {
        nome: nomeDoAluno,
        idade: idadeDoAluno
    }

    return objetoAluno

}

