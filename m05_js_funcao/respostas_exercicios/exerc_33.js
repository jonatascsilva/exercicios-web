/* 
 * Exercício 33:
 * 
 *   Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble.
 * Cada um destes vetores deverá conter quatro valores, sendo o primeiro
 * com valores inteiros, o segundo com strings e o terceiro com valores
 * decimais.
 *   Declarados os vetores, utilize a função de união concat() de duas
 * maneiras diferentes para unir os vetores, e mostre o resultado no
 * console. Todos os elementos do vetor resultado deverão aparecer no console.
 */

vetorInteiro = [1, 2, 3, 4]
vetorString = ['a', 'b', 'c', 'd']
vetorDouble = [1.11, 2.22, 3.33, 4.44]

vetorConcat = vetorInteiro.concat(vetorString, vetorDouble)
console.log(vetorConcat)

vetorConcat2 = [].concat(vetorInteiro, vetorString, vetorDouble)
console.log(vetorConcat2)

// Solução do professor
/* function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString)) */