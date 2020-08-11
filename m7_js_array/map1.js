// Map
// Ele é um for com um propósito: ele mapeia um array e cria um novo com os seus dados transformados
// Regra: Só gera um novo array com a mesma quantidade de elementos
// Exemplo: Tenho um array com 3 elementos e quero criar um novo com esses 3 elementos multiplicados por 2

// 1. Quero duplicar o valor dos elementos
const nums = [1, 2, 3, 4, 5]

let resultado = nums.map((valor, indice, esteArray) => {
    return valor * 2
})

console.log(nums, resultado)           // Array original intacto e novo array

// 2. Quero efetuar várias operações
const soma10 = valor => valor + 10                                                      // Callback 1
const triplo = valor => valor * 3                                                       // Callback 2
const paraDinheiro = valor => `R$ ${parseFloat(valor).toFixed(2).replace('.', ',')}`    // Callback 3

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(nums, resultado)