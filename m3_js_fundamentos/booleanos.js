// Aceita booleans true e false
let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

// Para 'converter' um valor e o JS verificar/resultar se é true/false usa-se a
// negação dupla
isAtivo = 1
console.log(!!isAtivo)

console.log(`
> Os verdadeiros..`)
console.log(!!33)               // Número positivo
console.log(!!-1)               // Número negativo
console.log(!!' ')              // String 'vazia'
console.log(!!'texto')          // String
console.log(!![])               // Arrays
console.log(!!{})               // Objetos literais
console.log(!!Infinity)         // Infinito (divisão por 0)
console.log(!!(isAtivo = 33))   // Se o valor atribuído a uma variável/constante
                                // com os critérios acima

console.log(`
> Os falsos..`)
console.log(!!0)                // 0
console.log(!!'')               // String 'vazia'
console.log(!!null)             // Nulo
console.log(!!NaN)              // Not a number
console.log(!!undefined)        // Indefinidos
console.log(!!(isAtivo = 0))    // Se o valor atribuído a uma variável/constante
                                // com os critérios acima

console.log(`
> Para fechar com chave de ouro: Operações lógicas..`)
console.log(!!(0 || '' || ' ' || null))

// O legal disso é que pode ser feito verificações, como no caso abaixo, se o
// nome for 'false', retorna 'Nome desconhecido'
let nome = ''
console.log(nome || 'Nome desconhecido')