// [ES8] Async/Await
// A ideia é deixar um código assíncrono com Promises mais simples, o deixando com o comportamento mais próximo de um síncrono

// Vamos usar a mesma situação do usandoCallback.js

const http = require('http')

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

// Preciso criar uma função com a palavra reservada async!
// async function obterAlunos() { ou com arrow function
let obterAlunos = async () => {
    const turmaA = await getTurma('A')          // Não preciso chamar o then agora, e a próxima linha do código só vai ser executada quando terminar
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    return [].concat(turmaA, turmaB, turmaC)    // Como estou usando async, ela retorna isso dentro de um objeto AsyncFunction para ser tratado por um then
}

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))