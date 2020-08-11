const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)      // Acesso o atributo saudacao do this (que nesse contexto é o pessoa)
    }
}

pessoa.falar()

// Atribuindo função à constante sem bind
const falar = pessoa.falar              // Armazeno o atributo falar (que é uma funcao) no const falar
falar()                                 // Conflito de paradigma funcional com OO
                                        // Ele executa this.saudacao, mas como agora o contexto é o bjeto falar e
                                        // ele não tem o atributo saudacao, gera undefined

// Atribuindo função à constante com bind
const falar2 = pessoa.falar.bind(pessoa)   // Uso o bind para sempre vincular o this desta instancia de função (falar2) à um objeto específico
falar2()