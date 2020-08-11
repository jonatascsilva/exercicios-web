/* 
 * Exercício 13:
 * 
 *   Crie um programa que exibe se um dia é dia útil, fim de semana ou dia
 * inválido dado o número referente ao dia. Considere que domingo é o
 * dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

const queDiaDaSemanaEHoje = (dia) => {
    switch (dia) {
        case 1:
            return 'Fim de semana'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia útil'
        case 7:
            return 'Fim de semana'
        default:
            return 'Dia inválido'
    }
}

console.log(queDiaDaSemanaEHoje())
console.log(queDiaDaSemanaEHoje(0))
console.log(queDiaDaSemanaEHoje(' '))

console.log(queDiaDaSemanaEHoje(1))
console.log(queDiaDaSemanaEHoje(2))
console.log(queDiaDaSemanaEHoje(3))
console.log(queDiaDaSemanaEHoje(4))
console.log(queDiaDaSemanaEHoje(5))
console.log(queDiaDaSemanaEHoje(6))
console.log(queDiaDaSemanaEHoje(7))

console.log(queDiaDaSemanaEHoje(8))