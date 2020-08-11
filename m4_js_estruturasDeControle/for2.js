// Uso do for com in
// Uso melhor para array e objeto, mas o ideal é usar o map, reduce, for it...

// -------------------------------------------------------------------------------------------------------- //
// ARRAY
// -------------------------------------------------------------------------------------------------------- //
// Usando for normal para arrays
const notas = [6.5, 7.2, 9.1, 10.0]
console.log(notas.length)
for(let i = 0; i < notas.length; i++) {  // notas.length retorna o último elemento do array (nesse caso, o 3)
    console.log(`Nota ${i} do array: ${notas[i]}`)
}

// Usando for in
for(let i in notas) {
    console.log(i, notas[i])
}

// -------------------------------------------------------------------------------------------------------- //
// OBJETOS
// -------------------------------------------------------------------------------------------------------- //
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 25,
    peso: 65
}

for(let atributo in pessoa) {
    console.log(`Chave ${atributo} tem valor ${pessoa[atributo]}`)
    //console.log(`Chave ${atributo} tem valor ${pessoa.atributo}`)   // Veja que usando a notação ponto ele iria tentar acessar o atributo "atributo"
}