// Obtendo JSON de HTTP usando callbacks
// A ideia é fazer o código sem Promise, e depois comparar para ver a melhoria (ver usandoPromises.js)

// Importando o módulo interno de http do node (o axios usa Promise, por isso não vamos usá-lo)
const http = require('http')

// ------------------------------------------------------------------------------------------- //
// Cenário:
// - Tenho três links que são três arquivos JSON contendo informações de três turmas distintas 
// - Quero obter o objeto convertido de cada JSON e depois juntar todos os seus elementos em um array
// ------------------------------------------------------------------------------------------- //

// Crio função genérica para obter objeto contendo as turmas (visto que a diferença das turmas é apenas uma letra na URL)
// - Primeiro parametro vai ser a letra para diferenciar a URL
// - Segundo parametro vai ser a callback para ser chamada para retornar o arquivo quando for baixado completamente
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, response => {    
        let resultado = ''

        response.on('data', dados => {  // Quando começar a receber os dados (stream de dados), como vou recebendo aos poucos o arquivo (é um chunk) preciso ir concatenando
            resultado += dados
        })

        response.on('end', () => {      // Quando acabar os chunks, e receber a resposta que terminou, faço o JSON.parse para retornar objeto na callback
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []

// NOTA!
// Veja que preciso obter uma dentro da outra pois a resposta é assíncrona, então se colocar separadao pode bagunçar tudo!
getTurma('A', alunos => {   // Passo a letra da turma e recebo como parametro o que foi enviado pela "callback"
    // Coloco o nome de cada aluno dentro do array nomes, identificando eles pela turma
    nomes = nomes.concat(alunos.map(aluno => `Turma A: ${aluno.nome}`))

    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(aluno => `Turma B: ${aluno.nome}`))

        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(aluno => `Turma C: ${aluno.nome}`))
            console.log(nomes)
        })
    })
})