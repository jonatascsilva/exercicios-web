/* 
 * Exercício 16:
 * 
 *   Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica
 * o programa recebe como parâmetros dois valores numéricos e uma string referente
 * à operação e a realize com os valores numéricos na ordem que foram inseridos.
 * 
 * Por exemplo: calculadora(2, ‘+’, 3). A função efetuará a soma de 2 e 3.
 * Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
 */

function calculadora(a, operacao, b) {
    operacao = operacao.trim()  // Remove espaços em branco que possam ser colocados acidentalmente

    switch (operacao) {
        case '+':
            return console.log(a + b)
        case '-':
            return console.log(a - b)
        case '*':
            return console.log(a * b)
        case '/':
            return console.log(a / b)
        default:
            return console.log(`Operação ${operacao} não reconhecida`)
    }
}

calculadora(10, ' ', 5)
calculadora(10, '//', 5)

calculadora(10, '+', 5)
calculadora(10, '-', 5)
calculadora(10, '*', 5)
calculadora(10, '/', 5)

calculadora(10, ' + ', 5)
calculadora(10, ' +', 5)
calculadora(10, '+            ', 5)