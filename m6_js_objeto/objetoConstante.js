// Pessoa aponta para um end. de memória -> ex.: 0x123 -> {...}
const pessoa = { nome: 'João' }     // Logo, não consigo alterar a const pessoa, mas seus dados sim
pessoa.nome = 'Pedro'
console.log(pessoa)                 // Pedro

// Tentando apontar o pessoa para um novo endereço -> ex.: 0x456
// pessoa = { nome: 'Ana' }         // Erro!

// Para impedir que alterem os atributos, o correto é usar o freeze
    // Observe que ele congela os atributos logo abaixo de pessoa
    // Se quiser congelar subatributos (um array ou outros objetos dentro de pessoa)
    // Por exemplo: pessoa.nome.endereco
    // É preciso usar o freeze novamente lá dentro
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)            // Pedro

// Criando um objeto direto com o freeze
const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Paulo'
console.log(pessoaConstante)