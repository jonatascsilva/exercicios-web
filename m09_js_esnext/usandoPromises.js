// Refatorando o exercício do arquivo usandoCallback.js

// Importando o módulo interno de http do node (o axios usa Promise, por isso não vamos usá-lo)
const http = require('http')

// ------------------------------------------------------------------------------------------- //
// Cenário:
// - Tenho três links que são três arquivos JSON contendo informações de três turmas distintas 
// - Quero obter o objeto convertido de cada JSON e depois juntar todos os seus elementos em um array
// ------------------------------------------------------------------------------------------- //

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, response => {    
            let resultado = ''
    
            response.on('data', dados => {
                resultado += dados
            })
    
            response.on('end', () => {
                try {                               // Se receber a resposta positiva, faço o JSON.parse para retornar objeto na callback
                    resolve(JSON.parse(resultado))
                } catch (err) {                     // Se receber a resposta negativa, exibo o erro
                    reject(err)
                }
            })
        })
    })
}

let nomes = []

// Modo ruim: Callback hell! (Uma callback dentro da outra)
/* getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(aluno => `Turma A: ${aluno.nome}`))

    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(aluno => `Turma B: ${aluno.nome}`))

        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(aluno => `Turma C: ${aluno.nome}`))
            console.log(nomes)
        })
    })
})
 */

// Modo bom
// - Promise.all espera todas as promises retornarem seus resultados
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])          // Aqui vou receber [ [ Alunos turma A ], [ Alunos turma B], [ Alunos turma C ] ]
    .then(turmas => [].concat(...turmas))                           // Aqui uso spread para tirar os alunos e os coloco dentro de um único array: [ Alunos turma A, Alunos turma B, Alunos turma C ]
    .then(alunos => alunos.map(aluno => aluno.nome))                // Aqui, pego apenas o nome dos alunos
    .then(nomes => console.log(nomes))                              // Mostro somente os nomes

// Verificando o uso do catch para erros
// Vai aparecer no terminal, neste caso específico: "Unexpected token < in JSON at position 0"
getTurma('D').then(turma => console.log(turma)).catch(erro => console.log(erro.message))