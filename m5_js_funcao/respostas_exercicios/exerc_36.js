/* 
 * Exercício 36:
 * 
 *     Crie duas funções que recebem dois parâmetros, um vetor
 * com apenas valores numéricos e um número inteiro. Faça com
 * que a primeira função retorne outro vetor que será resultado
 * da multiplicação de cada elemento pelo número passado como
 * parâmetro. A segunda função fará o mesmo da primeira se e
 * somente se o valor do elemento for maior que 5.
 */

function multiplicaElementosDoArrayPorInt(arrayComInt, numInt = 2) {
    // Verifica se:
    // 1. Primeiro parametro é array
    // 2. Se cada elemento do array é number int
    // 3. Segundo parametro é number int
    if (Array.isArray(arrayComInt)
        && arrayComInt.every(elementoDoArray => Number.isInteger(elementoDoArray))
        && (Number.isInteger(numInt))) {
        let novoArray = []
        arrayComInt.forEach((elementoDoArray, indiceDoArray) => novoArray.push(elementoDoArray * numInt))
        return novoArray
    } else {
        return false
    }
}

function multiplicaElementosDoArrayPorIntSeMaioresQue5(arrayComInt, numInt = 2) {
    if (Array.isArray(arrayComInt)
        && arrayComInt.every(elementoDoArray => Number.isInteger(elementoDoArray))
        && (Number.isInteger(numInt))) {
        let novoArray = []
        arrayComInt.forEach((elementoDoArray, indiceDoArray) => {
            if (elementoDoArray > 5) {
                novoArray.push(elementoDoArray * numInt)
            } else {
                novoArray.push(elementoDoArray)
            }
        })
        return novoArray
    } else {
        return false
    }
}

const arrayInicial = [1, 2, 3, 4, 5, 6]

console.log(multiplicaElementosDoArrayPorInt(['a', 'b', 'c'], 2))               // Inválido
console.log(multiplicaElementosDoArrayPorInt([1, 2, 3], 'a'))                   // Inválido

console.log(multiplicaElementosDoArrayPorInt(arrayInicial, 3))
console.log(multiplicaElementosDoArrayPorIntSeMaioresQue5(arrayInicial, 3))

console.log(arrayInicial)                                                       // Vendo se array inicial está intacto