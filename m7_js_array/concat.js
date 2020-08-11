// Concat
// Concatenar dois ou mais arrays em um novo array

// Exemplo 1
const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']

const todos = filhas.concat(filhos)         // Gera novo array
console.log(todos, filhos, filhas)
console.log(typeof (filhos + filhas))       // Se quiser gerar a concatenacao em uma string, posso simplesmente somar

// Exemplo 2
const numero1 = [10, 30]
const numero2 = [20, 40]

const numeros = [].concat(numero1, numero2, [30, 50])

console.log(numeros, numero1, numero2)