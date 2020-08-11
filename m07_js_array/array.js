// Array
// - Cresce e diminui dinamicamente
// - Organizado por índice (aceita somente números inteiros)
// - É um objeto por baixo dos panos

// Em JS, array é um objeto especial organizando de forma indexada, mas internamente é objeto
// Ou seja, não é um tipo array como em outras linguagens
console.log(typeof Array, typeof new Array, typeof [])

// Array é heterogêneo, suporta vários tipos dentro de um mesmo array
// Mas, é uma boa prática manter só um tipo de dado em um array
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Carlos', 'Ana', 'Bia']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])           // undefined

// Adicionando novo elemento
aprovados.push('Zilma')             // Adicionando elemento logo após a última posição
aprovados[7] = 'Paulo'              // Posso adicionar elemento pulando posições, os anteriores que não existiam ficam vazios
console.log(aprovados)
console.log(aprovados[6])           // Verificando o conteúdo do elemento vazio = undefined
console.log(aprovados.length)       // 8 elementos

// Organizando elementos por ordem crescente
aprovados.sort()                    // Altera o array original, gera um novo array organizado
console.log(aprovados)

// Apagando elementos de diversas formas
delete aprovados[0]                 // Apaga o conteúdo do índice 0 e coloca undefined (não reordena o array)
console.log(aprovados)

aprovados.splice(0, 1)              // A partir do índice 0, quero excluir 1 elemento (reordena array)
console.log(aprovados)

aprovados.splice(4, 0, 'Olá!!!')    // A partir do índice 4, quero excluir nenhum elemento e adicionar 1 elemento
console.log(aprovados)