const porta = 3003
// ------------------------------------------------------------------------------------------------------ //
// 1. Importando bibliotecas1.==
// ------------------------------------------------------------------------------------------------------ //
// Importo o banco de dados que criei, juntamente com as funções para salvar produto e obter produtos do DB
const bancoDeDados = require('./bancoDeDados')

// Importo biblioteca Express e associo a função express dela dentro da variável app
// Usarei ela para disponibilizar minha aplicação via web e fazer requisições HTTP
const express = require('express')
const app = express()

// Importo biblioteca do body-parser
// Ela vai tratar o body que vem dentro de um formulário web em objeto, assim posso identificar
// facilmente as variáveis recebidas no lado do servidor
const bodyParser = require('body-parser')
// ------------------------------------------------------------------------------------------------------ //

// ------------------------------------------------------------------------------------------------------ //
// 2. Crio minhas middlewares, que serão os métodos web que estarei disponibilizando para poder acessar meu DB
// ------------------------------------------------------------------------------------------------------ //
// Crio uma middleware para ser implementada em todas as páginas usando o método use
// Aqui, qualquer requisição na minha aplicação (get, post...) vai passar por essa middleware e
// se essa requisição tiver um padrão urlencoded (que é o usado para salvar produtos no Postman usando o método post)
// a lib body-parser vai tratar esse body recebido (que é um JSON), fazer um parse e transformar em objeto
app.use(bodyParser.urlencoded({ extended: true }))

// Crio a primeira middleware do método get para a página produtos
// Externamente, posso chamar o get no endereço http://localhost:3003/produtos/ e obtenho toda a lista de produtos do meu banco de dados
app.get('/produtos', (request, response, next) => {
    response.send(bancoDeDados.getProdutos())           // Express obtem meu objeto que contem os produtos e converte automaticamente em JSON, e envia para quem requisitou usanoo o método send
    // next()                                           // Se tiver mais middlewares para get na página produtos, chamo ela pelo next()
})

// Se quiser uma segunda middleware do método get na mesma url /produtos, basta colocar na ordem de execução do código fonte :)
/* app.get('/produtos', (request, response, next) => {
    // conteúdo desejado, lembrando que sempre a última middleware que deve ter o send, 
}) */

// Crio um parâmetro usando : dentro da url produtos, logo, posso obter um determinado produto acessando, por exemplo:
// http://localhost:3003/produtos/1234
app.get('/produtos/:id', (request, response, next) => {
    response.send(bancoDeDados.getProduto(request.params.id))     // Como o id é um parametro de request, ele estará disponivel pela variavel request
})

// Crio um método post para poder salvar novos produtos no meu banco de dados
app.post('/produtos', (request, response, next) => {
    // Armazeno o novo produto com os atributos recebidos externamente
    const novoProduto = bancoDeDados.salvarProduto({
        // Para criar um produto, externamente terá esses campos (name e preco) para o
        // usuario preencher (geralmente num formulario), logo quando recebo pego eles do atributo body
        nome: request.body.nome,
        preco: request.body.preco
    })

    response.send(novoProduto)          // Retorno (em JSON) para quem pediu qual foi o produto cadastrado
})

// Crio um método put para poder atualizar um produto já existente no meu banco de dados
app.put('/produtos/:id', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco,
        id: request.params.id
    })

    response.send(produto)               // Retorno (em JSON) para quem pediu qual foi o produto atualizado
})

// Crio um método delete para poder apagar um determinado produto no meu banco de dados
app.delete('/produtos/:id', (request, response, next) => {
    const produto = bancoDeDados.excluirProduto(request.params.id)

    response.send(produto)               // Retorno (em JSON) para quem pediu qual foi o produto apagado
})
// ------------------------------------------------------------------------------------------------------ //


// ------------------------------------------------------------------------------------------------------ //
// Aguardo requisições feitas para minha aplicação
// ------------------------------------------------------------------------------------------------------ //
// Especifico qual a porta que minha API vai ficar "escutando" para receber as requisições pela web
// e printo a porta no console
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}...`)
})

// Agora, só usar o postman para obter o JSON usando o GET no endereço http://localhost:3003/produtos
// ou acessar pelo browser mesmo
// ------------------------------------------------------------------------------------------------------ //