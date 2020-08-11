// Melhorias na notação literal à partir do ES2015

const a = 1, b = 2, c = 3

// Na nova versão do ES2015 não é necessário definir o valor de um atributo
// caso deseje que: nome da chave = mesmo valor da chave
const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }            // ES2015
console.log(obj1, obj2)             // São iguais!

// Quando se quer criar dinamicamente um atributo usando uma string
const nomeAttr = 'nota'
const valorAtt = 7.87
const obj3 = {}
obj3[nomeAttr] = valorAtt
const obj4 = { [nomeAttr]: valorAtt }
console.log(obj3, obj4)

// Para definir funções agora não precisa definir par chave/valor
const obj5 = {
    funcao1: function() {},
    funcao2() {}                    // ES2015
}