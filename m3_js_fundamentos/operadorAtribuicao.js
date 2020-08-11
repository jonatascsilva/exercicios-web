// Atribuição =
const a = 7
let b = 3

b += a              // Atribuição aditiva ou b = b + a
console.log(b)

b -= 4              // Atribuição subtrativa ou b = b - 4
console.log(b)

b *= 2              // Atribuição multiplicativa ou b = b * 2
console.log(b)

b**= 2              // Atribuição por exponenciacao ou b ^ 2
// b = Math.pow(b, 2)   // Maneira antiga, a de cima substitui
console.log(b)  

b /= 2              // Atribuição divisiva ou b = b / 2
console.log(b)

b %= 2              // Atribuição modular ou b = b % 2, mostra o resto (não o quociente) da divisão modular de b / 2 (sem casas decimais)
                    // Usa-se %2 pois dessa forma é fácil de saber se o conteudo da variavel é par ou impar
                    // Se for par, mostra 0, se impar, mostra 1 se for impar
                    // Exemplo: 17 / 2 = 8 resto 1 => Esse 1 será exibido | 18 / 2 = 9 resto 0 => Esse 0 será exibido  
console.log(b)