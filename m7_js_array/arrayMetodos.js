// Aqui, defini o pilotos à um endereço de memória, mas posso mexer em seu conteúdo!
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// Adicionando e removendo elementos na última ou primeira posições
pilotos.pop()                               // Remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen')                  // Adiciona um elemento depois do último elemento
console.log(pilotos)

pilotos.shift()                             // Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')                 // Adiciona um elemento antes do primeiro elemento
console.log(pilotos)

// Adicionando e/ou removendo elementos em qualquer posição
pilotos.splice(2, 0, 'Bottas', 'Massa')     // Adiciono dois elementos no índice 2
console.log(pilotos)

pilotos.splice(3, 1)                        // Removo o elemento de índice 3
console.log(pilotos)

// Gerar novo array copiando um pedaço do array original
const algunsPilotos1 = pilotos.slice(2)     // Copia elemento de índice 2 até o último elemento
console.log(pilotos)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)  // Copia elemento[1] até o elemento[4]
                                            // (lembrando que o [4] aqui não existe, então ele ignora)
console.log(pilotos)
console.log(algunsPilotos2)