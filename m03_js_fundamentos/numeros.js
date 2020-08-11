const peso1 = 2.1
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(typeof(peso1), typeof(peso2))
console.log(Number.isInteger(peso1), Number.isInteger(peso2))

const avaliacao1 = 9.765
const avaliacao2 = 8.567

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// Médias 
console.log(media)                                              // com todas as casas decimais
console.log(media.toFixed(3))                                   // com arredondamento para x casas decimais
console.log(media.toString(), typeof(media.toString()))         // convertendo para String
console.log(media.toString(2))                                  // convertendo para binário
console.log(media.toString(16))                                 // convertendo para hexadecimal