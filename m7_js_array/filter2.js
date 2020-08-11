// Exercício somente demonstrativo, não aplicável na prática de desenvolvimento
// Simulando o filter

// Meu novo método para array
Array.prototype.filterNovo = function (callBack) {
    const novoArray = []


    for (let i = 0; i < this.length; i++) {
        if (callBack(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }

    return novoArray
}

// Dados
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

// Acima de 500R$ e frágil
const caro = (elemento) => elemento.preco >= 500
const fragil = (elemento) => elemento.fragil === true

const produtosCarosEFrageis = produtos.filterNovo(caro).filterNovo(fragil)
console.log(produtosCarosEFrageis)      // Novo array
console.log(produtos)                   // Array original intacto