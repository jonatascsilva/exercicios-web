/* 
 * Exercício 05:
 * 
 *   Lidar com números em JavaScript pode dar muita dor de cabeça.
 * Você já viu o que acontece quando faz o seguinte comando no console: 
 * - console.log(0.1 + 0.2);
 * O resultado será: 0.30000000000000004.
 * Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa.
 * Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta.
 * Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004
 * e retorne R$0,30 (observe a vírgula e o ponto).
 */

const transformarNumberEmMoedaBrasileira = (numero = 0) => {
    if (typeof numero === typeof 1) {
        numero = numero.toFixed(2).toString().replace('.', ',')
        return ('R$ ' + numero)
    } else {
        return 'ATENÇÃO! Insira um número válido...'
    }
}

console.log(transformarNumberEmMoedaBrasileira())
console.log(transformarNumberEmMoedaBrasileira(0.1 + 0.2))
console.log(transformarNumberEmMoedaBrasileira(0.999999999999999999999999999))
console.log(transformarNumberEmMoedaBrasileira(10 / 0))
console.log(transformarNumberEmMoedaBrasileira(null))
console.log(transformarNumberEmMoedaBrasileira('10'))