// Não é interessante mexer no global!
// Está sendo apenas mostrado para teoria

// Anotação interessante:
/* Levemos em consideração o código abaixo: 
        module.exports.nome = 'fulano'
        const nome = 'Sicrano'
        console.log(nome);              // Sicrano
        console.log(module.exports);    // { nome: 'fulano' }
Ambos estão no escopo global, no entanto, module.exports é um objeto, então as propriedades
só podem ser acessadas utilizando a notação ponto, ou seja: 
        module.exports.nome = 'fulano'  
        console.log(module.exports);    // { nome: 'fulano' }
A outra diferença é que as variáveis que foram declaradas no escopo global mas não estão
incluídas dentro do module.exports não estarão disponíveis para os demais arquivos que
importarem esse módulo. Sacou?  */

// console.log(global)

var a = 1
b = 1

global.MinhaApp = {
    saudacao() {
        return "I'm everywhere"
    },
    nome: 'Sistema legal'
}

console.log(global)                 // Veja que MinhaApp e b estão no global, mas a não