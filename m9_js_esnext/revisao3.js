// Revisão dos novos recursos do ES5+ já apresentados durante os fundamentos do JS

// 1. [ES8] Object.values/Object.entries
// - Object.values: Obtem todos os valores de um objeto e os coloca separadamente em elementos de um novo array
// - Object.entries: Obtem todos os pares chave/valor de um objeto e os coloca (como array) separadamente em elementos de um novo array
const obj = { a: 1, b: 2, c: 3 }
console.log('1)', Object.keys(obj))     // Antiga, retorna somente as chaves (nomes dos atributos)
console.log('1)', Object.values(obj))
console.log('1)', Object.entries(obj))

// 2. Melhorias na notação literal
// - 2.1 Em um objeto, se o nome de uma variável (que será atribuída como conteúdo de um atributo) for igual
//       ao nome de sua respectiva chave, basta colocar o nome dessa variável
//       > Nota: nome da variável != conteúdo da variável
//       > Ex.: Se "nome: nome", posso colocar apenas "nome"
// - 2.2 Para funções dentro de atributos, antes era preciso colocar o nome da chave e criar uma função anônima
//       como por exemplo: "saudacao: function () {}"
//       Agora posso posso declarar a função diretamente (implicitamente o nome do atributo será o da função)
const nome = 'Jonatas'
const pessoa = {
    nome,           // 2.1
    saudacao() {    // 2.2
        return `Olá, meu nome é ${nome}`
    }
}
console.log('2)', pessoa.nome, pessoa.saudacao())

// 3. Class
class Animal { }
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
const cachorro = new Cachorro
console.log(cachorro.falar())