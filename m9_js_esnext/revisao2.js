// Revisão dos novos recursos do ES5+ já apresentados durante os fundamentos do JS

// 1. Arrow Function
// - A ideia é "dar um empurrãozinho" para você desenvolver seu código a ter várias funções de poucas linhas (pois o return para uma linha é implícito caso não use bloco {})
// - O this é amarrado a função, diferentemente das funções normais
// - Ela é sempre anônima, não posso nomeá-la (preciso atribuir para uma constante ou invocar ela diretamente)
const soma = (a, b) => a + b
console.log('1)', soma(2, 4))

const lexico1 = () => console.log('1)', this === exports)
const lexico2 = lexico1.bind({ outroObjeto: 'a' })
lexico1()                                               // true, pois o this está fixado em exports
lexico2()                                               // true, pois o this está fixado em exports, mesmo tentando forçar com o bind para outro objeto

// 2. Parâmetros default
// - Posso passar um valor default para caso um parâmetro na função não seja recebido (ou seja, seja undefined)
function log(texto = 'Node') {
    console.log('2)', texto)
}
log('a')        // a
log()           // Node

// 3. Operador rest/spread
// - No contexto da função, ele será um operador rest (pois ele irá agrupar n parametros recebidos em um unico array)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log('3)', total(2, 3, 5))