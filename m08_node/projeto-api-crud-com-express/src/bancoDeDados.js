// Simulando um pequeno banco de dados persistido na memória (não estamos salvando em arquivos ainda)
// Aqui é feito o seguinte
// - Criar novos produtos com id sequenciais
// - Obter um produto da minha lista passando um id como parametro
// - Exportar as funcoes criadas para serem acessadas por outro módulo

// Crio um objeto que cria um numero sequencial para ID dos meus produtos
const sequencia = {
    _id: 1,                         // Convenção para definir uma variavel privada, uso _
    get id() { return this._id++ }  // Uso o método get (ver aula ge/set) para obter o valor do id publicamente
}

// Crio meu objeto vazio para guardar meus produtos
    // A chave (atributo) vai ser o proprio id
    // e o valor vai ser o produto
const listaDeProdutos = {}

// Crio uma função para guardar meus produtos dentro do objeto produtos
function salvarProduto(novoProduto) {
        // Se o id do novo produto não foi passado, defino um novo id para ele usando o meu gerador de sequencias
    if (!novoProduto.id) novoProduto.id = sequencia.id
        // Crio um novo atributo cujo nome será o id e o seu valor o próprio produto (ex.: listaDeProdutos { 1: { id: 1, nome: Notebook }, 2: { id: 2, nome: Caderno } })
        // Observe que se o "novo" produto tiver o id de um produto já criado, ele vai substituir o existente
    listaDeProdutos[novoProduto.id] = novoProduto
        // Retorna o novo produto
    return novoProduto
}

// Crio uma função para obter um produto da minha lista de produtos passando o id como param
function getProduto(id) {
    return listaDeProdutos[id] || { erro: 'Não foi possível encontrar seu produto' }
}

// Crio uma função para obter todos os meus produtos (sem o id) da minha lista de produtos
function getProdutos() {
    return Object.values(listaDeProdutos)
}

// Crio uma função para excluir um produto (passando o id como param) da minha lista de produtos
function excluirProduto(id) {
    const produtoExcluido = listaDeProdutos[id]
    delete listaDeProdutos[id]
    return produtoExcluido
}

// Exporto as funções
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }