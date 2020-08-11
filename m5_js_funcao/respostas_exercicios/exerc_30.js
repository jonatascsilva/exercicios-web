/* 
 * Exercício 30:
 * 
 *   Escreva um algoritmo que percorre um vetor de inteiros
 * e defina o maior e menor valor dentro do vetor.
 */

const verificaMaiorEMenor = (array) => {
    let menorNumero = array[0]
    let maiorNumero = array[0]

    for (let i in array) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        } else if (array[i] < menorNumero) {
            menorNumero = array[i]
        } 
    }

    return console.log(`Menor: ${menorNumero} | Maior: ${maiorNumero}`)
}

// Outro método, só que usando método sort
const verificaMaiorEMenorComSort = (array) => {
    // By default, the sort() function sorts values as strings.
    // This works well for strings ("Apple" comes before "Banana").
    // However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
    // Because of this, the sort() method will produce incorrect result when sorting numbers.
    // You can fix this by providing a compare function, see more: https://www.w3schools.com/js/js_array_sort.asp
    array.sort((a, b) => a - b)
    return console.log(`Menor: ${array[0]} | Maior: ${array[array.length - 1]}`)
}

const numerosAleatorios = [10, 12.5, 17.5, -20, 1, 2, 5]

verificaMaiorEMenor(numerosAleatorios)
verificaMaiorEMenorComSort(numerosAleatorios)
verificaMaiorEMenor([10, 5, 7, 3, 1, 3, 11, 20, 6, 9])
verificaMaiorEMenorComSort([10, 5, 7, 3, 1, 3, 11, 20, 6, 9])