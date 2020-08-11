// Uso Express para rodar meu servidor
const express = require('express')
const app = express()

// Uso o body parser para fazer um parser (transformar os dados)
// que vieram no body do formulário e o envia para a variavel
// requisição para ser tratado por uma middleware (como em app.post)
const bodyParser = require('body-parser')

// Para qualquer mensagem recebida com o padrão "urlencoded"
// (que é o de formulário) faz o parse com o body.paprser
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)               // Aqui vou receber o dado já tratado pelo body-parser
    resp.send('<h1>Parabéns! Usuário incluído!</h1>')      // Retorno para quem pediu a mensagem
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns! Usuário alterado!</h1>')
})

app.listen(3003)