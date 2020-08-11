//----------------------------------------------------------------------------//
// Função sem retorno
//----------------------------------------------------------------------------//
function imprimirSoma(a, b) {  // Como é fracamente tipada, não precisa declarar tipos :D
  console.log(a + b)
}

imprimirSoma(2, 3)      // Caso ideal: fornecer duas variáveis com tipos válidos para executar a função
imprimirSoma(2)         // Caso de exceção 1a: fornecer somente uma variável, a outra será undefined
imprimirSoma()          // Caso de exceção 1b: fornecer somente nenhuma variável, a outra será undefined
imprimirSoma(5, 6, 7)   // Caso de exceção 2: fornecer variáveis a mais (no caso, ele simplesmente ignora)

//----------------------------------------------------------------------------//
// Função com retorno
//----------------------------------------------------------------------------//
function soma(a, b = 1) {   // Já defino um valor padrão (que será usado para caso ele não seja definido)
  return a + b
}

console.log(soma(2, 3))  // Caso ideal: fornecer duas variáveis com tipos válidos para executar a função
console.log(soma(2))     // Caso de exceção tratado: fornecer apenas uma variável (a outra usará a definida nesse caso)