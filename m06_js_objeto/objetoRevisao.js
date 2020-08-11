// Objeto é uma coleção dinâmica (pois posso alterar depois de criar o objeto) de pares chave/valor

// --------------------------------------------------------------------------------------------- //
// 1. Criando objeto simples
// --------------------------------------------------------------------------------------------- //
const produto = {}                          // Recomendado criar usando este formato
// const produto = new Object

// Adicionando atributos
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'    // Não recomendado
produto.preco = 220
console.log(produto)

// Apagando atributos
delete produto.preco
delete produto["marca do produto"]
console.log(produto)
// --------------------------------------------------------------------------------------------- //


// --------------------------------------------------------------------------------------------- //
// 2. Criando objetos mais complexos
// --------------------------------------------------------------------------------------------- //
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

// Acessando por notação ponto
carro.proprietario.endereco.numero = 1000

// Acessando por colchetes
// Nota: útil quando você receb uma strng e quer passar como parâmetro pra acessar atributos
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)  

delete carro.condutores                     // É possível excluir ramos inteiros
delete carro.proprietario.endereco          // ...
delete carro.calcularValorSeguro            // excluir métodos...

console.log(carro)

console.log(carro.condutores)               // Cuidado ao acessar atributos, aqui dá undefined pois excluí
// console.log(carro.condutores.length)     // Mas aqui dá erro pois estou tentando acessar um atributo de undefined
                                            // É interessante verificar se o atributo 'pai' dela (condutores) está disponível primeiro!!