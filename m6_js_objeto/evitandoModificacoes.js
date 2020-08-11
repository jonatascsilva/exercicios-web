// É importante lembrar que objetos e arrays que possam estar dentro de
// atributos têm que passar pelo mesmo processo de bloqueio!

// Object.preventExtensions
// Adicionar attr: Não
// Apagar    attr: Sim
// Alterar   attr: Sim
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

produto.descricao = 'Borracha escolar branca'       // Adicionando attr
delete produto.tag                                  // Apagando attr
produto.nome = 'Borracha'                           // Alterando attr

console.log('Objeto extensível?', Object.isExtensible(produto))
console.log(produto)

// Object.seal
// Adicionar attr: Não
// Apagar    attr: Não
// Alterar   attr: Sim
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)

pessoa.sexo = 'Feminino'                            // Adicionando attr
delete pessoa.nome                                  // Apagando attr
pessoa.idade = 47                                   // Alterando attr

console.log('Objeto selado?', Object.isSealed(pessoa))
console.log(pessoa)

// Object.freeze
// Adicionar attr: Não
// Apagar    attr: Não
// Alterar   attr: Não
const carro = { modelo: 'F40', ano: 2019 }
Object.freeze(carro)

carro.fabricante = 'Ferrari'                       // Adicionando attr
delete carro.modelo                                // Apagando attr
carro.ano = 1995                                   // Alterando attr

console.log('Objeto congelado?', Object.isFrozen(carro))
console.log(carro)