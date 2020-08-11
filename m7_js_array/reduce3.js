// Exercício somente demonstrativo, não aplicável na prática de desenvolvimento
// Simulando o reduce

// Meu novo método para array
Array.prototype.reduceNovo = function (callBack, valorInicial) {
    // Implementação do valor inicial do professor
    /* const indiceInicial = valorInicial ? 0 : 1
    let novoValor = valorInicial || this[0] */
    // Final da implementação

    // Implementacao minha
    let indiceInicial = 1
    let novoValor = this[0]
    
    if (valorInicial) {
        indiceInicial = 0
        novoValor = valorInicial
    }
    // Final da implementacao
    
    for (let i = indiceInicial; i < this.length; i++) {
        novoValor = callBack(novoValor, this[i], i, this)
    }

    return novoValor
}

// Teste 1
const a = [1, 2, 3, 4]
console.log(a.reduce((i, j) => (i - j)))
console.log(a.reduceNovo((i, j) => (i - j)))

// Teste 2
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

    // Verifica se todos os alunos sao bolsistas
const bolsista = elemento => elemento.bolsista
const todosBolsistas = alunos.map(bolsista).reduceNovo(function (valorIteracaoAnterior, valorAtual) {
    return valorIteracaoAnterior && valorAtual
})
console.log(todosBolsistas)