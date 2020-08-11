// Par Nome e Valor (este ultimo atribuído ao nome)
const saudacao = 'Olá!'     // Contexto léxico 1 (que é o local físico onde sua variável, nome/valor, foi definida)
                            // Nesse caso, o contexto é o escopo global do arquivo "parNomeValor.js", mas poderia ser no browser, etc.


function exec() {
    const saudacao = 'Oi :)'    // Contexto léxico 2 (não está no mesmo contexto léxico 1, pois está dentro da funcao,
                                // mesmo tendo o nome igual, logo, pode ser redeclarado)
    return saudacao
}

//const saudadcao = 'Oi'    // Não pode ser redeclarado pois o contexto léxico 1 que a declarou

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    endereco: {
        logradouro: 'Rua Legal',
        numero: 123
    }
}

console.log(saudacao)   // Retorna o contexto lexico mais prioritario (escopo global)
console.log(exec())     // Retorna o valor do contexto lexico de onde a funcao está (escopo local)
console.log(cliente)    // Retorna todos os nomes/valores