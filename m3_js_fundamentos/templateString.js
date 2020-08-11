// Concatenando do modo normal
const nome = 'Beatriz'
const concatenacao = 'Olá ' + nome + '!'

// Uso da template string (necessário abrir com crase), que inclusive aceita quebra de linhas, tab...
// Observe que para colocar variáveis e ou expressões, é necessário interpolar com o uso do ${}
const template = `
Olá
    ${nome}!
Sabia que 1 + 1 = ${1 + 1}?`

console.log(concatenacao)
console.log(template)

// Uso do template string com funções, métodos..
const uppercase = texto => texto.toUpperCase()  // Função

console.log(`Olá.. ${uppercase('maiuscula')}`)