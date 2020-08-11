const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1
// Todos os alunos são bolsistas? Retornar apenas true, caso contrário false
const bolsista = elemento => elemento.bolsista
const todosBolsistas = alunos.map(bolsista).reduce(function (valorIteracaoAnterior, valorAtual) {
    return valorIteracaoAnterior && valorAtual
})
console.log(todosBolsistas)

// Desafio 2
// Pelo menos um aluno é bolsista? Retornar apenas true, caso contrário false
const algumBolsista = alunos.map(bolsista).reduce(function (valorIteracaoAnterior, valorAtual) {
    return valorIteracaoAnterior || valorAtual
})
console.log(algumBolsista)