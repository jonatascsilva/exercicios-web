// Operador Rest/Spread
// - Rest: Junta vários parâmetros em um único array
// - Spread: "Espalha" (copia) os elementos de um array/objeto e envia para outro do mesmo tipo

// Spread com objetos
const funcionario = { nome: 'Maria', salario: 1234.56 }
const clone = { ativo: true, ...funcionario }               // Crio novo obj usando os atributos do obj
                                                            // existente (ou seja, espalho os atributos de
                                                            // funcionario e "espalho dentro do obj clone")
                                                            // Note que ele copia, não aponta!
                                                            // Logo, os dois objs são independentes!
funcionario.nome = 'Joao'
console.log(funcionario, clone)                             // Objeto clone permanece com nome Maria

// Spread com arrays
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoB = ['José', 'Elton', ...grupoA ]                // Spread fz a mesma operação no objeto
grupoA[0] = 'HaHa'
console.log(grupoA, grupoB)

// Rest com funções

function total(...numeros) {                                // No contexto da função, ele será um operador 
    let total = 0                                           // rest pois ele irá agrupar n parametros recebidos
    numeros.forEach(n => total += n)                        // em um unico array
    return total
}
console.log('3)', total(2, 3, 5))