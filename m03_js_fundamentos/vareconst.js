// Variavel var
var a = 5

// Variavel let <-- RECOMENDADA (AO INVES DO VAR)
let b = 6

/*
 * OBSERVACAO:
 * É possível redeclarar variavel com var
 * NÃO é possível redeclarar variavel com 'let'
 */
var a = 55
b = 66

console.log(a, b)

a = 555
b = 666

console.log(a, b)

const c = 7
// c = 77    // NÃO é possível reatribuir valor à uma const, justamente por ser constante

console.log(a, b, c)