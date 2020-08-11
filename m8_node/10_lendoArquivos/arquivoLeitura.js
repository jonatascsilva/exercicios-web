const fs = require('fs')        // Importando biblioteca filesystem do node

const caminho = __dirname + '/arquivo.json'

console.log(__dirname)          // Palavra reservada do node, que está oculta no global,
                                // que indica o nome do diretório atual 

// Leitura síncrona de arquivo
// Event loop fica aguardando fazer a leitura completa e assim mostra o resultado
// Pode travar sua aplicação se arquivo for grande
const config1 = JSON.parse(fs.readFileSync(caminho, 'utf-8'))
console.log(config1)

// Leitura assíncrona de arquivo
// Event loop manda uma work thread fazer a leitura e fica livre, e quando work terminar manda pro event loop
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config3 = JSON.parse(conteudo)
    console.log(config3)
})

// Leitura síncrona de JSON com require
const config2 = require('./arquivo.json')       // Note que para JSON usando require não preciso usar o parse
console.log(config2)                            // Note que por ser síncrono aparece antes do assíncrono no terminal

// Leitura assíncrona de diretório
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

// Leitura assíncrona com tratamento de erro
/* function lerArquivo(caminho) {
    fs.readFile(caminho, 'utf-8', (err, conteudo) => {
        if (err) {
            throw 'Opa, não encontrei esse arquivo!'
        } else {
            const config3 = JSON.parse(conteudo)
            console.log(config3)
        }
    })
}

try {
    lerArquivo(__dirname + '/naoExiste.js')
} catch(err) {
    console.log(err.message)
} */