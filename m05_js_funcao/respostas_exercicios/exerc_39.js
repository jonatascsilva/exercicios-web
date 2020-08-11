/* 
 * Exercício 39:
 * 
 *     Crie uma função que receba dois vetores de igual tamanho e troque
 * seus elementos de modo que o primeiro elemento do vetorA passe a ser
 * o primeiro elemento do vetorB e vice versa e assim sucessivamente.
 * Faça a troca sem utilizar uma variável auxiliar.
 */

function trocaDeElementosEntreArrays(arrayA, arrayB) {
    if (arrayA.length === arrayB.length) {
                                                                 // arrayA = [ 1, 2, 3 ]          arrayB = [ 4, 5, 6 ]
        arrayA = arrayA.concat(arrayB)                           // arrayA = [ 1, 2, 3, 4, 5, 6 ] arrayB = [ 4, 5, 6 ]
        arrayB = arrayB.concat(arrayA.splice(0, arrayB.length))  // arrayA = [ 4, 5, 6 ]          arrayB = [ 4, 5, 6, 1, 2, 3 ]
        arrayB = arrayB.splice(arrayA.length, arrayA.length)     // arrayA = [ 4, 5, 6 ]          arrayB = [ 1, 2, 3 ]   

        return console.log(`Novo vetor 1: ${arrayA} | Novo vetor 2: ${arrayB}`)
    } else {
        return console.log('ERRO: Arrays não tem o mesmo comprimento!')
    }
}

trocaDeElementosEntreArrays([1, 2, 3], [4, 5, 6])
trocaDeElementosEntreArrays(['a', function (a) {a}, [1,2,3]], [obj = {nome: 'a'}, 5, 6])