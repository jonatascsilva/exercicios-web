/* 
 * Exercício 28:
 * 
 *   Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

const verificaParEImpar = (array) => {
    let contadorNumerosPares = 0
    let contadorNumerosImpares = 0

    for (let i in array) {
        if ((array[i] % 2) == 0) {
            contadorNumerosPares++
        } else {
            contadorNumerosImpares++
        }
    }

    console.log(`Há ${contadorNumerosPares} número(s) par(es) e ${contadorNumerosImpares} número(s) ímpar(es)`)
}

const array1 = [2, 4, 6, 8, 3, 5, 7]       // 4 pares e 3 ímpares

verificaParEImpar(array1)
verificaParEImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])