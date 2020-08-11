// Promise é uma função, preciso passar parâmetro para ela
const promessa = new Promise(function(resolve) {
  // Retorna apenas um único valor (4 será desconsiderado)
  // cumprirPromessa(3, 4)
  // Para retornar mais de um, uso objeto, array, JSON...
  resolve([
    'Ana',
    'Bia',
    'Carlos'
  ])
})

// Recebo um objeto Promise
console.log(typeof promessa)

const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]
const letrasMinusculas = string => string.toLowerCase()

// Para receber o valor do objeto Promise, uso o then
promessa
    // Posso compor as chamadas then para tratar o dado recebido
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letrasMinusculas)
    .then(console.log) 