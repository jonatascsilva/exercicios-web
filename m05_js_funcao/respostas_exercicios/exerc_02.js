/* 
 * Exercício 02:
 *
 *   Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 *   - Equilátero: Os três lados são iguais.
 *   - Isósceles: Dois lados iguais.
 *   - Escaleno: Todos os lados são diferentes.
 *   Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne
 * sua classificação quanto ao tamanho de seus lados.
 * (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
 */

function getTipoDoTriangulo(ladoA = false, ladoB = false, ladoC = false) {
    if ((ladoA != false) && (ladoB != false) && (ladoC != false)) {
        if ((ladoA == ladoB) && (ladoA == ladoC) && (ladoB == ladoC)) {
            return 'Equilátero'
        }

        if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)) {
            return 'Isósceles'
        }

        if ((ladoA != ladoB) && (ladoA != ladoC) && (ladoB != ladoC)) {
            return 'Escaleno'
        }
    } else {
        return 'Não é um triângulo'
    }
}

console.log('1.  Tipo do triângulo: ', getTipoDoTriangulo(22, 22, 22))

console.log('2.  Tipo do triângulo: ', getTipoDoTriangulo(11, 11, 22))
console.log('2.1 Tipo do triângulo: ', getTipoDoTriangulo(11, 11, 22))
console.log('2.2 Tipo do triângulo: ', getTipoDoTriangulo(11, 22, 11))

console.log('3.  Tipo do triângulo: ', getTipoDoTriangulo(22, 33, 44))

console.log('4.  Tipo do triângulo: ', getTipoDoTriangulo(0, 33, 44))
console.log('4.1 Tipo do triângulo: ', getTipoDoTriangulo(22, 0, 44))
console.log('4.2 Tipo do triângulo: ', getTipoDoTriangulo(22, 33, 0))

console.log('5.  Tipo do triângulo: ', getTipoDoTriangulo(22))
console.log('5.1 Tipo do triângulo: ', getTipoDoTriangulo(22, 33))