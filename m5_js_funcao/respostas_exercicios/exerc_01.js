/* 
 * Exercício 01:
 *
 *   Crie uma função que dado dois valores (passados como parâmetros)
 * mostre no console a soma, subtração, multiplicação e divisão desses valores.
 */

const soma = (a, b) => a + b
const subtracao = (a, b) => a - b
const multiplicacao = (a, b) => a * b
const divisao = (a, b) => a / b

const operacoesAritmeticasCom2Valores = (a, b) => {
    return console.log(`Para ${a} e ${b} => Soma: ${soma(a, b)} | Subtração: ${subtracao(a, b)} | Multiplicação: ${multiplicacao(a, b)} | Divisão: ${divisao(a, b)}`)
}

operacoesAritmeticasCom2Valores(10, 5)
operacoesAritmeticasCom2Valores(2, 5)
operacoesAritmeticasCom2Valores(1, 2)