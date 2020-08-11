/* 
 * Exercício 20:
 * 
 *   Crie um programa para informar quais e quantas notas são necessárias
 * para entregar o mínimo de cédulas para um determinado valor informado
 * pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
 *   Seu programa deve mostrar apenas as notas utilizadas, por exemplo:
 *   - Ao solicitar R$18, o programa deve informar apenas a seguinte
 *   informação (note que não foram exibidas informações sobre as demais cédulas):
 *   1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

const obtemQuantidadeDeCedulas = (valorParaSaqueAtual, valorDaCedula) => {
    if (valorParaSaqueAtual >= valorDaCedula) {
        return Math.floor(valorParaSaqueAtual / valorDaCedula)
    } else {
        return 0
    }
}

const getCedulasParaSaque = (valorTotalParaSaque = 0) => {
    let valorParaSaqueRemanescente = valorTotalParaSaque
    let cedulasNoCaixa = [100, 50, 10, 5, 1]
    let cedulasParaSaque = [0, 0, 0, 0, 0]
    let reatorioDeRetorno = ''

    for (let i in cedulasNoCaixa) {
        cedulasParaSaque[i] = obtemQuantidadeDeCedulas(valorParaSaqueRemanescente, cedulasNoCaixa[i])
        valorParaSaqueRemanescente -= (cedulasParaSaque[i] * cedulasNoCaixa[i])
    }

    for (let i in cedulasParaSaque) {
        if (cedulasParaSaque[i] > 0) {
            reatorioDeRetorno += `${cedulasParaSaque[i]} nota(s) de R$ ${cedulasNoCaixa[i]}. `
        }
    }

    return console.log(reatorioDeRetorno)
}

getCedulasParaSaque(0)
getCedulasParaSaque(101)
getCedulasParaSaque(1111)
getCedulasParaSaque(1527)
getCedulasParaSaque(10000)