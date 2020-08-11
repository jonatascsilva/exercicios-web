/* 
 * Exercício 32:
 * 
 *   Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

const getArrayComNumerosIntPositivos = (quantElementosParaArray = 5, menorNumero = 0, maiorNumero = 100) => {
    let array = []
    for (let i = 0; i <= (quantElementosParaArray - 1); i++) {
        array[i] = Math.floor(Math.abs((Math.random() * (maiorNumero - menorNumero)) + menorNumero))
    }
    return array
}

const getMediaAritmetica = (array) => {
    if (Array.isArray(array)) {
        let somaTotalDoArray = 0
        for (let i in array) {
            somaTotalDoArray += array[i]
        }
        return console.log(`Média aritmética: ${somaTotalDoArray / array.length}`)
    } else {
        return console.log('Parâmetro recebido não é um array!')
    }
}

const numerosInteiros = [10, 20, 30]
getMediaAritmetica(numerosInteiros)

let numerosAleatorios = []
numerosAleatorios = getArrayComNumerosIntPositivos(5, -10, -150)
console.log(numerosAleatorios)
getMediaAritmetica(numerosAleatorios)