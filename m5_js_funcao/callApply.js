// Call e Apply são outros métodos de se chamar uma função

// ---------------------------------------------------------------------------------------------------------------- //
// Chamando normalmente
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const notebook = {
    nome: 'Notebook',
    preco: 3500,
    desc: 0.10,
    getPreco            // Aqui, como getPreco já foi declarado, ele vai usar o já declarado
}

console.log(getPreco())     // Aqui o valor dá NaN pois o this da function irá apontar para o global, não para o objeto
                            // (e também preco e desc não foram declarados na function)
console.log(notebook.getPreco())
// ---------------------------------------------------------------------------------------------------------------- //

// ---------------------------------------------------------------------------------------------------------------- //
// Usando call e apply
const carro = {
    nome: 'Carro',
    preco: 50000,
    desc: 0.10
}

// Usando call
console.log(getPreco.call(carro))
// Passando manualmente as variáveis externas requeridas (imposto e moeda, uma vez que as outras pegam do objeto usando this)
// Ou seja: O primeiro parâmetro é o objeto a usar como 'this'; subsequentes parâmetros são passados como argumentos na função chamada
console.log(getPreco.call(carro, 0.0, '$'))       // Contexto | Param imposto | Param moeda

// Usando apply
console.log(getPreco.apply(carro))
// Mesmo que call, mas usando array
console.log(getPreco.apply(carro, [0.0, '$']))
// ---------------------------------------------------------------------------------------------------------------- //