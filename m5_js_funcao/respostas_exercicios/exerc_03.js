/* 
 * Exercício 03:
 * 
 *   Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
 */

const getExponenciacao = (base, expoente) => {
    return base ** expoente
}

console.log(getExponenciacao(2, 3))    // 2 ^ 3 = 8
console.log(getExponenciacao(10, 4))    // 10 ^ 4 = 10.000
console.log(getExponenciacao(2, 32))    // 2 ^ 32 = 4.294.967.296‬