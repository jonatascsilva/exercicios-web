// Aritmetico + - / * %

const [a, b, c, d] = [3, 5, 7, 9]   // Usando operador destructuring

// Operador binario (pois tem dois operandos, logo faz a + b, depois (a+b) + c, etc) infix (pois operador + está entre operandos)
// Nota: ++a é prefix
// Nota: b++ é postfix
// Nota Operador unario seria fazer operacao somente com um operando, por exemplo, fazer "-divisao"
const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a           // Rsulta valor integer
const modulo = a % 2            // Faz a / 2 e mostra o resto (não o quociente)
                                // Usa-se %2 pois dessa forma é fácil de saber se o conteudo da variavel é par ou impar
                                // Se for par, mostra 0, se impar, mostra 1 se for impar
                                // Exemplo: 17 / 2 = 8 resto 1 => Esse 1 será exibido | 18 / 2 = 9 resto 0 => Esse 0 será exibido

console.log(soma, subtracao, multiplicacao, divisao, modulo)