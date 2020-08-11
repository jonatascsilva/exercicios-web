//----------------------------------------------------------------------------//
// Armazenando uma função em uma variável
//----------------------------------------------------------------------------//
const imprimirSoma = function (a, b) {  // Atribuindo a função anônima (sem nome) à uma variável
                                        // Nesse caso a vantagem é que essa função não pode ser
                                        // reescrita pois está associada a uma const :)
                                        // diferente se declarasse uma função pura (como no arquivo anterior)
  console.log(a + b)
}

imprimirSoma(2, 3)

//----------------------------------------------------------------------------//
// Armazenando uma função arrow (esta reduz a construção de uma função) em uma
// variável
//----------------------------------------------------------------------------//
const soma = (a, b) => {        // A seta substitui o nome function
  return a + b
}

console.log(soma(2, 4))

//----------------------------------------------------------------------------//
// Armazenando uma função com retorno implícito (esta reduz ainda mais a
// construção de uma função) em uma variável
//----------------------------------------------------------------------------//
const soma2 = (a, b) => a + b   // Quando não há chaves, executa apenas essa linha, e ela (implicitamente) retorna o resultado da expressão

console.log(soma2(2, 5))