// Operadores unarios (somente com um operando)

let num1 = 1
let num2 = 2

// Posfix, ou seja, pós fixada
num1++  // soma 1
console.log(num1)

// Prefix, ou seja, pré fixada
// Quando há uma expressao, a prefix tem ordem priorizada em relacao ao posfix (procurar tabela de precedencia)
--num1  // subtrai 1
console.log(num1)

// Exercício: Dará verdadeiro ou falso?
console.log(++num1 === num2--)
// No caso, dará verdadeiro, porque antes de comparar o num1 será somado em 1, depois ele irá comparar com num2
// e só depois de comparar ele irá subtrair 1 do num2

// Veja agora depois de o num2 ter sido subtraído
console.log(num1 === num2)