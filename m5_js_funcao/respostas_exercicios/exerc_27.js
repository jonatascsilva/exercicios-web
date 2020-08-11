/* 
 * Exercício 27:
 * 
 *   Construa uma função que receba como parâmetros as alturas
 * e as taxas de crescimento anuais de duas crianças e calcule
 * se existe uma criança menor, caso exista se a criança menor
 * ultrapassará a maior e em quantos anos isso acontecerá.
 * Utilize centímetros para as unidades de medida.
 */

function calcularCrescimento(alturaCrianca1, taxaDeCrescimentoAnual1, alturaCrianca2, taxaDeCrescimentoAnual2) {
    if (alturaCrianca1 == alturaCrianca2) {
        if (taxaDeCrescimentoAnual1 > taxaDeCrescimentoAnual2) {
            return `Criança 1 será maior que a criança 2 em 1 ano`
        } else if (taxaDeCrescimentoAnual2 > taxaDeCrescimentoAnual1) {
            return `Criança 2 será maior que a criança 1 em 1 ano`
        } else {
            return 'As duas crianças têm a mesma altura e taxa de crescimento'
        }
    } else if (alturaCrianca1 < alturaCrianca2) {
        if (taxaDeCrescimentoAnual1 > taxaDeCrescimentoAnual2) {
            return `Criança 1 será maior que a criança 2 em ${calcularTempo(alturaCrianca2, taxaDeCrescimentoAnual2, alturaCrianca1, taxaDeCrescimentoAnual1)} anos`
        } else {
            return 'Criança 1 não será maior do que a criança 2'
        }
    } else if (alturaCrianca1 > alturaCrianca2) {
        if (taxaDeCrescimentoAnual2 > taxaDeCrescimentoAnual1) {
            return `Criança 2 será maior que a criança 1 em ${calcularTempo(alturaCrianca1, taxaDeCrescimentoAnual1, alturaCrianca2, taxaDeCrescimentoAnual2)} anos`
        } else {
            return 'Criança 2 não será maior do que a criança 1'
        }
    }
}

function calcularTempo(alturaMaior, taxaDeCrescimentoMaior, alturaMenor, taxaDeCrescimentoMenor) {
    let quantidadeAnos = 0
    while (alturaMaior >= alturaMenor) {
        alturaMaior += taxaDeCrescimentoMaior
        alturaMenor += taxaDeCrescimentoMenor
        quantidadeAnos++
    }

    return quantidadeAnos
}

// Alturas e taxas iguais
console.log(calcularCrescimento(150, 2, 150, 2))        // 150cm e 2cm a.a / 150cm e 2cm a.a

// Alturas iguais e taxas diferentes
console.log(calcularCrescimento(150, 4, 150, 2))
console.log(calcularCrescimento(150, 2, 150, 4))

// Alturas e taxas diferentes
console.log(calcularCrescimento(130, 2, 150, 4))        // Criança 1 com altura e taxa menor
console.log(calcularCrescimento(130, 4, 150, 2))        // Criança 1 com altura menor mas taxa maior
console.log(calcularCrescimento(150, 2, 130, 4))        // Criança 2 com altura menor mas taxa maior
console.log(calcularCrescimento(150, 4, 130, 2))        // Criança 2 com altura e taxa menor