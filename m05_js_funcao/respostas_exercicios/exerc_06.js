/* 
 * Exercício 06:
 * 
 *   Elabore duas funções que recebem três parâmetros:
 *   - capital inicial, taxa de juros e tempo de aplicação.
 *   A primeira função retornará o montante da aplicação financeira sob o regime de juros simples
 * e a segunda função retornará o valor da aplicação sob o regime de juros compostos.
 */

const jurosSimples = (capitalInicial, taxaDeJurosEmPorcentagemAoMes, tempoDeAplicacaoEmMeses) => {
    const jurosSimples = capitalInicial * (taxaDeJurosEmPorcentagemAoMes / 100) * tempoDeAplicacaoEmMeses
    const montanteFinalDaAplicacao = capitalInicial + jurosSimples

    return montanteFinalDaAplicacao.toFixed(2)
}

const jurosCompostos = (capitalInicial, taxaDeJurosEmPorcentagemAoMes, tempoDeAplicacaoEmMeses) => {
    const montanteFinalDaAplicacao = capitalInicial * ((1 + (taxaDeJurosEmPorcentagemAoMes / 100)) ** tempoDeAplicacaoEmMeses)
    // const montanteFinalDaAplicacao = capitalInicial * (Math.pow((1 * taxaDeJurosEmPorcentagemAoMes), tempoDeAplicacaoEmMeses))

    return montanteFinalDaAplicacao.toFixed(2)
}

let capitalInicial = 25000                  // R$ 25000
let taxaDeJurosEmPorcentagemAoMes = 4       // 4% a.m
let tempoDeAplicacaoEmMeses = 12            // 12 meses

console.log(`Juros Simples: R$ ${jurosSimples(capitalInicial, taxaDeJurosEmPorcentagemAoMes, tempoDeAplicacaoEmMeses)}`)
console.log(`Juros Compostos: R$ ${jurosCompostos(capitalInicial, taxaDeJurosEmPorcentagemAoMes, tempoDeAplicacaoEmMeses)}`)