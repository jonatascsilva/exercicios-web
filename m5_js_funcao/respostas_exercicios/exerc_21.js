/* 
 * Exercício 21:
 * 
 *   Criar um programa para identificar o valor a ser pago por um
 * plano de saúde dada a idade do conveniado considerando que todos
 * pagam R$ 100 mais um adicional conforme a seguinte tabela:
 *   1) crianças com menos de 10 anos pagam R$80;
 *   2) conveniados com idade entre 10 e 30 anos pagam R$50;
 *   3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
 *   4) conveniados acima de 60 anos pagam R$130
 */

const getValorAdicionalPlanoDeSaude = (idadeConveniado) => {
    let valorAdicional = 0

    if (idadeConveniado < 10) valorAdicional = 80
    else if (idadeConveniado <= 30) valorAdicional = 50
    else if (idadeConveniado <= 60) valorAdicional = 95
    else valorAdicional = 130

    return console.log(`Plano de saúde para ${idadeConveniado} anos é de R$ ${100 + valorAdicional}`)
}

getValorAdicionalPlanoDeSaude(2)
getValorAdicionalPlanoDeSaude(9)

getValorAdicionalPlanoDeSaude(10)
getValorAdicionalPlanoDeSaude(29)

getValorAdicionalPlanoDeSaude(30)
getValorAdicionalPlanoDeSaude(42)
getValorAdicionalPlanoDeSaude(60)

getValorAdicionalPlanoDeSaude(61)
getValorAdicionalPlanoDeSaude(100)