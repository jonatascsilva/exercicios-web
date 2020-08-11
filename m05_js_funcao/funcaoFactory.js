// Função factory (fábrica)
// É semelhante a classe, mas no caso ela tem return de um objeto e não necessita new
function criarProduto(nome, preco) {
    return {
        nomeDoProduto: nome,
        precoDoProduto: preco,
        desconto: 0.2
    }
}

console.log(criarProduto('Pilha', 23.5))      // Criei um produto mas não precisei armazenar nem usar o new
console.log(criarProduto('Bateria', 5.63))