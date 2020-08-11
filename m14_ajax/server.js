const express = require('express')              // Permite criar um servidor http
const app = express()

app.use(express.static('.'))                    // Express irá servir os arquivos desta pasta
app.use(express.urlencoded({ extended: true })) // Express será executado aqui para fazer o parse caso receba um form
app.use(express.json())                         // Express será executado aqui para fazer o parse caso receba um JSON

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// Usado no exercício do XMLHttpRequest
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
const multer = require('multer')                // Interpreta forms do tipo multipart/form-data que geralmente são usados pelo cliente para envio de arquivos

const storage = multer.diskStorage({            // Cria objeto para personalizar a pasta e nome dos arquivos quando salvar os arquivos após receber o upload
    destination: function (req, file, callback) {
        callback(null, './upload')                              // Informo qual a pasta para salvar o arquivo
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)    // Insira a data antes do nome original, evitando sobrescrita
    }
})

const upload = multer({ storage }).single('arquivo')    // Define destino (pelo storage) para salvar o arquivo recebido, e o "name" do input do form que conterá o arquivo como "arquivo"

app.post('/upload', (req, res) => {                     // Quando receber arquivo por este caminho /upload, chama multer para salvar o arquivo
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro...')
        }

        res.end('Concluído com sucesso!')
    })
})

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// Usado no exercício do Fetch e Axios
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
app.post('/formulario', (req, res) => {
    res.send({          // Simulando uma resposta em JSON do servidor para um formulário recebido e persistido com sucesso no back-end
        ...req.body,    // É preciso ter configurado o parse do body para tipos urlencoded (que é o tipo default recebido de forms!)
        id: 1
    })
})

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// Usado no exercício do Axios
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
app.get('/parOuImpar', (req, res) => {
    // É possível receber os dados do front-end usando express usando:
    // - req.body (quando o conteúdo está no body, exemplo usado no fetch)
    // - req.query (quando o conteúdo está na url usand ?, exemplo: /parOuImpar?numero=123)
    // - req.params (quando existe parametros na url, exemplo: /parOuImpar/123)
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'ímpar'
    })
})

app.listen(8080, () => console.log('Executando servidor na porta 8080...'))