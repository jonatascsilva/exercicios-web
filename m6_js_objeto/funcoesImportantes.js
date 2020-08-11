const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Retorna arrays obtendo:
console.log(Object.keys(pessoa))            // Somente as chaves
console.log(Object.values(pessoa))          // Somente os valores
console.log(Object.entries(pessoa))         // Cada par chave/valor em um elemento (do array)

    // Exemplo para percorrer um array criado
    Object.entries(pessoa).forEach(elemento => {
        console.log(`${elemento[0]}: ${elemento[1]}`)
    })

    // Exemplo para percorrer um array criado usando destructuring
    Object.entries(pessoa).forEach(([chave, valor]) => {
        console.log(`${chave}: ${valor}`)
    })

// Criar/alterar propriedades e definir características especiais
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,           // Listar quando chamar Object.keys
    writable: false,            // Não quero que seja alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = 'Olá'   // Não consigo alterar!
console.log(pessoa.dataNascimento)

// Concatenar atributos de objetos com assign
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3 , a: 4 }
Object.assign(destino, o1, o2)

Object.freeze(destino)
destino.a = 10000
console.log(destino)