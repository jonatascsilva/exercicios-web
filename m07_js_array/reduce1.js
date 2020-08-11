// Reduce
// - Transforma array em um único elemento/valor (em casos escpecíficos em um outro array, etc.)
// - Ele realiza iterações do elemento anterior com o elemento atual, e o resultado disso com o próximo... e gera um resultado
// - O resultado de uma reduce é passado para próxima reduce como uma nova iteração, e assim por diante...
//   Ex.: [1, 2, 3] => reduce(1 + 2) => reduce2 (resultadoReduce1 + 2)

// ---------------------------------------------------------------------------------------------------- //
// Exemplo 1
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

    // Converto o array alunos em um novo array contendo somente as notas
    // Uso o reduce para somar todas as notas (somo a 1a com a 2a, o resultado disso com a 3a...)
const resultado = alunos.map(a => a.nota).reduce(function(valorIteracaoAnterior, valorPosicaoAtual,
    posicaoAtual, esteArray) {
    console.log(valorIteracaoAnterior, valorPosicaoAtual, posicaoAtual)  // Note que ele já começa do segundo elemento (índice 1) para poder fazer a iteração com o primeiro
    return valorIteracaoAnterior + valorPosicaoAtual
})

console.log(resultado)      // Soma de todas as notas = 35
// ---------------------------------------------------------------------------------------------------- //


// ---------------------------------------------------------------------------------------------------- //
// Exemplo 2
    // Se eu quiser fazer o mesmo processo acima mas colocando um valor inicial personalizado
    // devo passar esse parametro no reduce (ver variavel valorInicial)
const valorInicial = 100

const resultado2 = alunos.map(a => a.nota).reduce(function(valorIteracaoAnterior, valorPosicaoAtual,
    posicaoAtual, esteArray) {
    console.log(valorIteracaoAnterior, valorPosicaoAtual, posicaoAtual)  // Note que como passei valor inicial, então ele começa do primeiro elemento (índice 0) para poder fazer a iteração com o valor inicial
    return valorIteracaoAnterior + valorPosicaoAtual
}, valorInicial)

console.log(resultado2)      // Soma do valorInicial com a soma de todas as notas = 135
// ---------------------------------------------------------------------------------------------------- //

