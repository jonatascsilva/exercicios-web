// Filter
// - Usa-se para filtrar um array com uma ou mais condições
// - Gera um novo array que pode retornar o mesmo tamanho do
// array original ou um menor (ou até vazio), depende apenas da condição de filtro
// - Pra cada elemento, é verificado a condição se retornar true entra no novo array, se false, não entra

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (elemento) {
    return elemento.fragil === true
}))

// Desafio: Acima de 500R$ e frágil
const caro = (elemento) => elemento.preco >= 500
const fragil = (elemento) => elemento.fragil === true

const produtosCarosEFrageis = produtos.filter(caro).filter(fragil)
console.log(produtosCarosEFrageis)      // Novo array
console.log(produtos)                   // Array original intacto