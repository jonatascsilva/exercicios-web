/* 
 * Exercício 07:
 * 
 *   Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
 * Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.
 * Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação:
 *   3x² - 5x + 12
 * os valores seriam respectivamente:
 *   3,-5, 12.
 * Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
 * que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor,
 * um string com a frase:
 *   “Delta é negativo”.
 */

const formulaBhaskara = (ax2, bx, c = 0) => {
    const delta = (bx ** 2) - (4 * ax2 * c)

    if (delta >= 0) {
        const raizPositiva = ((-bx) + Math.sqrt(delta)) / (2 * ax2)
        const raizNegativa = ((-bx) - Math.sqrt(delta)) / (2 * ax2)

        return [raizPositiva, raizNegativa]
    } else {
        return "Delta é negativo"
    }
}

console.log(formulaBhaskara(2, -16, -18))       // Delta > 0 | 2x² - 16x - 18 => 9 e -1
console.log(formulaBhaskara(1, 12, -13))        // Delta > 0 |  x² + 12x - 13 => 1 e -13

console.log(formulaBhaskara(4, -4, 1))          // Delta = 0 | 4x² -  4x - 1  => 0.5

console.log(formulaBhaskara(1, -4, 5))          // Delta < 0 |  x² -  4x + 5  => ?