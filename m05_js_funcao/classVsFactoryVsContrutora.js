// ---------------------------------------------------------------------------------------------------------------- //
// Criando objetos com class
// ---------------------------------------------------------------------------------------------------------------- //
class PessoasComClass {

    // Atributo público
    constructor(nome) {
        this.nome = nome        // Preciso usar o this para que ele dinamicamente obtenha a ref de cada objeto criado
    }

    // Método privado
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new PessoasComClass('João')
pessoa1.falar()

// ---------------------------------------------------------------------------------------------------------------- //
// Criando objetos com funcao factory
// - Não precisa do new
// - Não precisa do this (trava contexto léxico)
// ---------------------------------------------------------------------------------------------------------------- //
const PessoasComFactory = nome => {
    return {
        nome,
        falar() {
            console.log(`Meu nome é ${nome}`)
        }
    }
}

const pessoa2 = PessoasComFactory('Paulo')
pessoa2.falar()

// ---------------------------------------------------------------------------------------------------------------- //
// Criando objetos com funcao construtora
// Vantagem: Não precisa do this e não precisa do this (trava contexto léxico)
// ---------------------------------------------------------------------------------------------------------------- //
function PessoasComConstrutora(nome = '') {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa3 = new PessoasComConstrutora('Pedro')
pessoa3.falar()