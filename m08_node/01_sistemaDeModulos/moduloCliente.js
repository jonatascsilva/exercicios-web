// Este módulo cliente que irá acessar os módulos A e B

// Importando com o CommonJS
// Tudo o que foi EXPORTADO nestes módulos agora estão disponíveis neste módulo
const moduloA = require('./moduloA')        // Não preciso da extensao no caso do js
const moduloB = require('./moduloB.js')     // Mas posso colocar, se quiser

console.log(moduloA)
console.log(moduloB)                // Note que aqui não está as variáveis privadas!

// Vendo e usando os atributos
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())