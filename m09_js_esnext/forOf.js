// Laço de repetição For Of
// Ao invés de iterar nos índices de um elemento, você itera em cima de seus valores

// String 
for (let letra of "Cod3r") {
    console.log(letra)          // Printa cada um dos chars existentes, se fosse for in printaria os indices de 0 a 4
}

// Array
const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)              // Printa os índices de 0 a 3, se quiser o valor tenho que fazer assuntosEcma[i]
}

for (let valor of assuntosEcma) {
    console.log(valor)              // Printa os elementos do array
}

// Map
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let elemento of assuntosMap) {
    console.log(elemento)           // Como no Map cada elemento é um array, ele mostra cada array por inteiro (junto com sua chave e valor)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)              // Agora sim mostro somente as chaves de seus respectivos elementos
}

for (let valor of assuntosMap.values()) {
    console.log(valor)              // Agora sim mostro somente os valores de seus respectivos elementos
}

for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, '|', valor)   // Ou uso destructuring para pegar a chave e valor de cada elemento
}

// Set
const letrasSet = new Set(['a', 'b', 'c'])

for (let letra of letrasSet) {
    console.log(letra)
}