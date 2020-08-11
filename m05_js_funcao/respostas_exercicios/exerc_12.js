/* 
 * Exercício 12:
 * 
 *   Faça um algoritmo que calcule o fatorial de um número.
 *   n! = n . (n – 1) . (n – 2) . (n – 3) ...
 */

function calcularFatorial(numeroInicial) {
    if (Number.isSafeInteger(numeroInicial)) {
        if (numeroInicial == 0) {
            return `${numeroInicial}! = 1`
        } else {
            let fatorial = numeroInicial

            for (let i = (numeroInicial - 1); i > 1; i--) {
                fatorial *= i
            }

            return `${numeroInicial}! = ${fatorial}`
        }
    } else {
        return `Por favor, digite um número inteiro (recebi ${numeroInicial})`
    }
}

console.log(calcularFatorial(0))        // 1
console.log(calcularFatorial(1))        // 1
console.log(calcularFatorial(2))        // 2
console.log(calcularFatorial(3))        // 6
console.log(calcularFatorial(4))        // 24
console.log(calcularFatorial(10))       // 3628800
console.log(calcularFatorial(20))       // 2432902008176640000