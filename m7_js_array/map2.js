// Exercício somente demonstrativo, não aplicável na prática de desenvolvimento
// Simulando o map

// Meu novo método para array
Array.prototype.mapNovo = function (callBack) {
    const novoArray = []

    for (let i = 0; i < this.length; i++) {
        // novoArray[i] = callBack(this[i], i, this) ou fazer o de baixo
        novoArray.push(callBack(this[i], i, this))
    }

    return novoArray
}

// Array com elementos do tipo JSON
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array apenas com os precos
const converterJSONemObject = (elemento) => JSON.parse(elemento)
const retirarPreco = (elemento) => elemento.preco

const precosCarrinho = carrinho.mapNovo(converterJSONemObject).mapNovo(retirarPreco)

console.log(precosCarrinho)