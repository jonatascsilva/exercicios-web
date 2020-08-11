// Destructuring em objetos

// Destructuring tira da estrutura (objeto, array...) seus atributos/elementos

const pessoa = {        // Criando objeto
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Quero ter acesso as chaves nome e idade
// Poderia retirar usando const nome = pessoa.nome, mas o destructuring facilita essa operacao
const { nome, idade } = pessoa      // Estou falando para tirar "nome" e "idade" de "pessoa" e colocar elas como const
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { endereco: { logradouro, numero } } = pessoa     // Nesse caso extrai apenas logradouro e numero
console.log(logradouro, numero)

// Se eu tentar retirar atributos que nao existem, ele ira informar undefined,
// a nao ser que eu defina um valor padrao para esses casos (se tiver, retorna valor, se nao, retorna o valor padrao)
const { sobrenome, hello = true } = pessoa
console.log(sobrenome, hello)