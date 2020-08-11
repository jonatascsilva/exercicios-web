const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho, codificacao) {
  return new Promise((resolve, reject) => {
    fs.readFile(caminho, codificacao, (err, arquivo) => {
      if (err) {
          reject('Opa, não encontrei esse arquivo!')
      } else {
          resolve(arquivo.toString())
      }
    })
  })
}

const separarTextoPorCaractere = (texto, caractere) => texto.split(caractere)
const juntarLinhasComCaractere = (arrayDeString, caractere) => arrayDeString.join(caractere)

lerArquivo(caminho, 'utf-8')
    .then(arquivo => separarTextoPorCaractere(arquivo, '\n'))
    .then(linhas => juntarLinhasComCaractere(linhas, ','))
    .then(conteudo => console.log(`Conteúdo final: ${conteudo}`))
    .catch(console.log)