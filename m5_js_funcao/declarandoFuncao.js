// Modos de declarar funções

// ---------------------------------------------------------------- //
// Testando hoisting
console.log(soma(2, 3))
// console.log(sub(2, 3))       // Não é possível
// console.log(mult(2, 3))      // Não é possível
// ---------------------------------------------------------------- //

// ---------------------------------------------------------------- //
// Function declaraction
// Permite hoisting
function soma(x, y) {
    return x + y
}
// ---------------------------------------------------------------- //

// ---------------------------------------------------------------- //
// Function expression
// Não permite hoisting
const sub = function (x, y) {
    return x - y
}
// ---------------------------------------------------------------- //

// ---------------------------------------------------------------- //
// Named function expression (pouco usada, benefício apenas para debug)
// Mesmo de Function expression
const mult = function mult(x, y) {
    return x * y
}
// ---------------------------------------------------------------- //
