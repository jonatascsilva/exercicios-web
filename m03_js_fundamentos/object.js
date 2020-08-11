// Criando objeto literal, que é composto de chaves e valores
// Pode ser construído dinamicamente, ou seja, não é preciso informar as chaves já de início
const prod1 = {}

// Criei uma chave (nome) fora do objeto e atribuí um valor à ela (Antonio, tipo String)
prod1.nome = 'Antonio'
prod1.cargo = 'Técnico em TI'
prod1.salario = 2500.78

console.log(prod1)

//------------------------------------------------------------------------------------------//

// Criando objetos já com os atributos

const prod2 = {
    nome: 'Alexandra',
    cargo: 'Diretor geral',
    salario: 45679.55,
    horaExtra: {                // É possível ter objetos dentro de objetos
        precoHora: 700.5,
        horasMaximasDia: 2
    }
}

console.log(prod2)                              // Visualizando o objeto inteiro
console.log(prod2.horaExtra.horasMaximasDia)    // Visualizando uma chave específica