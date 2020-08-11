// Caso 1: var sendo declarado dentro e fora do objeto
// Resultado: 'Vence' a última var declarada (no caso, porque sobrescreve o 'numero')
var numero = 1
{
    var numero = 2
    console.log('caso1 - dentro = ', numero)
}
console.log('caso1 - fora = ', numero)

// Caso 2: var sendo declarado fora do objeto e let dentro do objeto
// Resultado: Cada variável será vista dentro de seu próprio escopo
// pois o escopo menor irá procurar a variável declarada no escopo dele primeiro, depois fora
// logo, se let numero2 = 4 não fosse declarada, iria ser usado a var numero2 = 3
console.log('')
var numero2 = 3
{
    let numero2 = 4
    console.log('caso2 - dentro = ', numero2)
}
console.log('caso2 - fora = ', numero2)

// Caso 3: let sendo declarado dentro e fora do objeto
// Resultado: Cada variável será vista dentro de seu próprio escopo
// pois o escopo menor irá procurar a variável declarada no escopo dele primeiro, depois fora
// logo, se let numero3 = 6 não fosse declarada, iria ser usado a let numero3 = 5
console.log('')
let numero3 = 5
{
    let numero3 = 6
    console.log('caso3 - dentro = ', numero3)
}
console.log('caso3 - fora = ', numero3)

// Caso 4: var sendo declarado dentro do objeto e let fora do objeto
// Resultado: Não é possível redeclarar uma let, então var dará erro
console.log('')
let numero4 = 5
{
    //var numero4 = 6
    console.log('caso4 - dentro = ', numero4)
}
console.log('caso4 - fora = ', numero4)