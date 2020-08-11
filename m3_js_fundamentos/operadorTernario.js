// Operador ternario, que tenha tres operandos, é semelhante ao if

// Uso em funcao
    // Primeiro operando, verifica se nota >= 7 é true ou false
    // Segundo operando, se primeiro operando for true retorna 'Aprovado'
    // Terceiro operando, se primeiro operando for false retorna 'Reprovado'
    // Retorna implicitamente "Aprovado" ou "Reprovado"
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

// Uso em variaveis
    // Primeiro operando, verifica se nota >= 7 é true ou false
    // Segundo operando, se primeiro operando for true retorna 'Aprovado'
    // Terceiro operando, se primeiro operando for false retorna 'Reprovado'
    // Armazena o resultado "Aprovado" ou "Reprovado" na variavel
const valorNota = 7
const status = valorNota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(status)