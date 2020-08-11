/* 
 * Exercício 38:
 * 
 *     Escreva uma função que receba dois parâmetros início e fim. Essa função
 * deve imprimir todos os números ímpares que estão entre esses valores.
 *     Por padrão os valores devem ser 0 para início e 100 para fim.
 *     Atente para corrigir a ordem dos parâmetros caso a função receba o valor
 * maior antes do menor.
 */

function getNumerosImparesDentroRange(menor = 0, maior = 10) {
    // Modo 1 para inverter valores:
    let range = [menor, maior]
    range.sort((a, b) => (a - b))       // Coloca elementos em ordem crescente

    // Modo 2 para inverter valores:
    // Se usar este método, trocar range[0] por menor e range[1] por maior 
    /* if (menor > maior) {
        menor = maior + menor
        maior = menor - maior
        menor = menor - maior
    } */

    let numerosImpares = []

    for (let i = (range[0] + 1); i < range[1]; i++) {
        if (i % 2 != 0) {
            numerosImpares.push(i)
        }
    }

    return console.log(`Entre ${range[0]} e ${range[1]}, números ímpares: ${numerosImpares}`)
}

getNumerosImparesDentroRange()
getNumerosImparesDentroRange(1, 11)
getNumerosImparesDentroRange(-5, 5)
getNumerosImparesDentroRange(19, 3)
getNumerosImparesDentroRange(30, 20)
getNumerosImparesDentroRange(20, 30)