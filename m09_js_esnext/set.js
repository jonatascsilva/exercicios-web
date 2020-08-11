// Estrutura Set
// É uma estrutura de conjunto não indexada e que não aceita repetição

// Criando Set dinamicamente
const casa = new Set()
casa.add('Sala')
casa.add('Quarto')
casa.add('Cozinha').add('Varanda')
casa.add('Quarto')                          // Verifique que este elemento será ignorado por estar repetido

console.log(casa)

// Métodos de Set
console.log(casa.size)              // Tamanho total
console.log(casa.has('Sala'))       // Verificar se existe um elemento
casa.delete('Varanda')              // Apagando elemento
console.log(casa.has('Varanda'))    // Verificando se apagou

// Criando Set com os elementos
const nomes = ['Raquel', 'Lucas', 'Julia']
const nomesSet = new Set(nomes)
console.log(nomesSet)