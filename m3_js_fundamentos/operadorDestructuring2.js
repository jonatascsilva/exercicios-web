// Destructuring em array

const [a] = [10]        // Obtendo primeiro valor do array [10] e atribuindo a nova const a
console.log(a)

// Obtendo primeiro valor do array [10] e atribuindo a nova const n1
// Ignorei segundo  valor do array [9]
// Obtendo terceiro valor do array [8]  e atribuindo a nova const n3
// Ignorei quarto   valor do array [9]
// Obtendo quinto   valor do array e atribuindo a nova const n5, como nao existe, retorna undefined
// Obtendo sexto    valor do array e atribuindo a nova const n6, como nao existe e o valor padrao é 0, retorna 0
const [n1, , n3, , n5, n6 = 0] = [10, 9, 8, 7]
console.log(n1, n3, n5, n6)

// Destructuring array de array, mas não é bom na prática pois fica complexo e demorado, mais fácil usar a posicao direto
// Ignorei o primeiro elemento do array 0
// Dentro do segundo elemento do array 0
    // Ignorei o primeiro elemento do array 1
    // Obtendo o segundo elemento do array 1 e atribuindo a nova const nota
const [ , [ , nota]] = [[1, 2, 3], [9, 7, 8]]
console.log(nota)