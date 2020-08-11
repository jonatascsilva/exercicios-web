/* 
 * Exercício 40:
 * 
 *     Faça uma função que receba como parâmetro um vetor
 * de notas e mostre os conceitos de cada uma de modo que
 * de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9
 * seja atribuído o conceito C, de 7,0 a 8,9 o conceito B
 * e de 9,0 a 10,0 o conceito A.
 */

function getConceitoDeNotas(nota) {
    let conceitos = []

    for (let i in nota) {
        if ((nota[i] >= 0) && (nota[i] <= 10)) {
            if (nota[i] <= 4.9) {
                conceitos[i] = 'D'
            } else if (nota[i] <= 6.9) {
                conceitos[i] = 'C'
            } else if (nota[i] <= 8.9) {
                conceitos[i] = 'B'
            } else {
                conceitos[i] = 'A'
            }
        } else {
            conceitos[i] = 'Nota inválida'
        }
    }

    return conceitos
}

const notas = [-0.1, 0.0, 4.5, 4.9, 5.0, 5.5, 6.9, 7.0, 8.5, 8.9, 9.0, 9.5, 10.0, 10.1]
const conceitos = getConceitoDeNotas(notas)

console.log(`${notas}`)
console.log(`${conceitos}`)