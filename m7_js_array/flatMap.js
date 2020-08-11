// FlatMap

const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

// Extrair todas as notas independente das turmas e colocar em um array

// Usando apenas map
const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)                             // Retorna array dentro de arrays

// Usando flatMap
Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
    // É o mesmo que = [].concat.apply(escola.map(getNotasDaTurma))
    // Está fazendo isso:
    // - Faz o map normal, mas recebe ele sem que o map jogue os dados dentro de um novo array,
    //   ou seja, irá receber apenas dois array com as notas [ 8.1, 9.3 ], [ 8.9, 7.3 ]
    // - Usa o concat para concatenar todos os elementos em um único array
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)                             // Retorna apenas um array