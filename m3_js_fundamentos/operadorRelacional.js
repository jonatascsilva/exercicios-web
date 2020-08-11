// Operador relacional, fazendo comparacoes (resultando sempre true ou falso apenas)
// Resumindo: Use sempre === para verificar conteudo e tipo

// Comparacao se operandos sao iguais no seu valor, independente do tipo
console.log('Teste 1.1:', '1' == 1)    // Verifico se o valor da string é igual ao valor de number
console.log('Teste 1.2:', '3' != 3)    // Verifico se o valor da string é diferente do valor de number

// Comparacao se operandos sao estritamente iguais no seu valor e tipo
console.log('Teste 2.1:', '1' === 1)    // Verifico se o valor e tipo da string é igual ao valor e tipo de number
console.log('Teste 2.2:', '3' !== 3)    // Verifico se o valor e tipo da string é diferente do valor e tipo de number

// Comparacoes maior, menor
console.log('')
console.log('Teste 3.1:', 3 > 2)
console.log('Teste 3.2:', 3 < 2)  
console.log('Teste 3.3:', 3 <= 2)
console.log('Teste 3.4:', 3 >= 2)

// Comparacao com ponteiros (atribuicao por referencia)
const data1 = new Date(0)   // Data 0 usa o valor padrao global, que é 01/01/1970
const data2 = new Date(0)
console.log('')
console.log('Data 1:', data1 === data2)         // Nesse caso, sao tipos nao primitivos (objetos, classes e funcoes)
console.log('Data 1:', data1 == data2)          // Quando se atribui o objeto Date a data1 e data2 eles recebem atribuicao
                                                // por referencia de memoria, e nao por valor
                                                // Logo, como estamos comparando apenas enderecos de memoria (que sao diferentes)
                                                // dará erro. Uma gambiarra seria converter cada um para tipo primitivo
                                                // (exemplo, converter para string), por exemplo, aí sim funcionaria
                                                // Ou o correto, usando o getTime, vaja abaixo
console.log('Data 2:', data1.getTime() === data2.getTime())     // Nesse caso ele obtem valor em number e em milisegundos e assim sendo possivel compara

// Comparacao com null e undefined
console.log('')
console.log('Final:', undefined == null)        // Apresentam valor nulo
console.log('Final:', undefined === null)       // Apresentam valor nulo mas tipos diferentes
