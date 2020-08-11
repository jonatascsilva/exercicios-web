// Como o export é uma função, passo os params pra ela e recebo o retorno dela como import
const saudacoes = require('./passandoParams')('Ana', 'Lucas', 'Joao')
console.log(saudacoes)