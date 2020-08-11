/* 
 * Exercício 22:
 * 
 *   Criar uma função para calcular o valor a ser pago de anuidade de uma associação.
 * A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…)
 * que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro.
 * Por mês, é cobrado 5% de juros (sob o regime de juros compostos).
 * O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
 */

const getJurosCompostos = (valorInicial, taxaDeJurosEmPorcentagemAoMes, tempoDividaEmMeses) => {
    const tempoDividaEmMesesCorrigido = tempoDividaEmMeses - 1      // Divida começa somente apenas a partir do segundo mes (fevereiro = 2)
    const valorFinal = valorInicial * ((1 + (taxaDeJurosEmPorcentagemAoMes / 100)) ** (tempoDividaEmMesesCorrigido))
    return valorFinal.toFixed(2)
}

const valorAPagarAnuidadeAssociacao = (mesQuePagouAnuidade, valorAnuidade) => {
    if (mesQuePagouAnuidade == 1) {
        return console.log(`Não há juros, pague o valor padrão de R$ ${valorAnuidade}`)
    } else if (mesQuePagouAnuidade <= 12) {
        return console.log(`Tem juros, pague o valor de R$ ${getJurosCompostos(valorAnuidade, 5, mesQuePagouAnuidade)}`)
    } else {
        return console.log(`Mês ${mesQuePagouAnuidade} inválido`)
    }
}

valorAPagarAnuidadeAssociacao(1, 1000)
valorAPagarAnuidadeAssociacao(2, 1000)
valorAPagarAnuidadeAssociacao(3, 1000)
valorAPagarAnuidadeAssociacao(5, 1000)
valorAPagarAnuidadeAssociacao(12, 1000)

valorAPagarAnuidadeAssociacao(13, 1000)