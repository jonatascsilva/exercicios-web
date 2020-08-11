/* 
 * Exercício 08:
 * 
 *   Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele
 * mantém registro de todos as pontuações feitas por jogo. Após cada jogo ele anota no novo
 * valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho.
 *   Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que
 * ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes
 * que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
 *   Obs.: O primeiro jogo não conta como novo recorde do melhor.
 * 
 * Exemplo: 
 * String: “10 20 20 8 25 3 0 30 1”
 * Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a
 * pior pontuação aconteceu no sétimo jogo.)
 */

const verificaQuantosEQualPosicaoDeHighScore = (stringPontuacoes) => {
    let arrayPontuacoes = stringPontuacoes.split(', ')
    let relatorioFinalDaPontuacao = [0, 0]

    // Converte elementos do array de string para float
    for (let i in arrayPontuacoes) {
        arrayPontuacoes[i] = parseFloat(arrayPontuacoes[i])
    }

    // Registra a primeira pontuação no relatorio (referente a de menor pontuacao)
    menorPontuacao = arrayPontuacoes[0]

    for (let i in arrayPontuacoes) {
        // Se pontuacao atual for maior que a anterior, registra high score
        if (arrayPontuacoes[i] > arrayPontuacoes[i - 1]) {
            relatorioFinalDaPontuacao[0]++
        }

        // Se pontuação atual for menor que a menor pontuação registrada, atualiza número e registra a posição (menor pontuação)
        if (arrayPontuacoes[i] < menorPontuacao) {
            menorPontuacao = arrayPontuacoes[i]
            relatorioFinalDaPontuacao[1] = parseInt(i) + 1
        }
    }

    return relatorioFinalDaPontuacao
}

let pontuacoesBasquetePedro = "10, 20, 20, 8, 25, 3, 0, 30, 1"
let pontuacoesTenisDeMesaPedro = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

console.log(verificaQuantosEQualPosicaoDeHighScore(pontuacoesBasquetePedro))
console.log(verificaQuantosEQualPosicaoDeHighScore(pontuacoesTenisDeMesaPedro))