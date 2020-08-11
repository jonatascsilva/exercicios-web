/* 
 * Exercício 31:
 * 
 *   Escrever um algoritmo que percorre um vetor de inteiros, conta
 * quantos números negativos há nesse vetor e imprime a quantidade no console.
 */

function getQuantidadesNumerosNegativos(array) {
    array.sort((a, b) => a - b)     // Organiza array de forma crescente
    if (array[0] < 0) {
        let contadorNumerosNegativos = 1
        let indiceArray = 1

        while (array[indiceArray] < 0) {
            contadorNumerosNegativos++
            indiceArray++
        }

        return console.log(`Há ${contadorNumerosNegativos} números negativos`)
    } else {
        return console.log('Não há números negativos')
    }
}

// Modo mais enxuto
function getQuantidadesNumerosNegativos2(array) {
    let contadorNumerosNegativos = 0
    for (const i in array) {
        if (array[i] < 0) contadorNumerosNegativos++
    }
    return console.log((contadorNumerosNegativos > 0) ? `Há ${contadorNumerosNegativos} números negativos` : 'Não há números negativos')
}

const numerosAleatorios = [10, 25, -10, 35, 36, -150, -1, 0, -1000, -Infinity]
const numerosAleatorios2 = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
const numerosPositivos = [2, 3, 4]

getQuantidadesNumerosNegativos(numerosAleatorios)
getQuantidadesNumerosNegativos2(numerosAleatorios)
getQuantidadesNumerosNegativos(numerosAleatorios2)
getQuantidadesNumerosNegativos2(numerosAleatorios2)
getQuantidadesNumerosNegativos(numerosPositivos)
getQuantidadesNumerosNegativos2(numerosPositivos)