// -------------------------------------------------------------------------------------------------- //
// 1. Importando módulos separadamente
// -------------------------------------------------------------------------------------------------- //
// Caminhos para importar com require
    // É importante sempre usar caminho relativo (vide, moduloA1 e moduloA2)
    // Pois assim não fica travado num caminho completo (moduloA3)

const moduloA1 = require('../../moduloA')
const moduloA2 = require('../../../01_sistemaDeModulos/moduloA')
const moduloA3 = require('D:/GoogleDrive/001_Educacao/001_DesenvDeProjetos/001_Projetos/002_EmAndamento/001_CursoDevWeb/exercicios-web/m8_node/01_sistemaDeModulos/moduloA.js')

console.log(moduloA1.ola)
console.log(moduloA2.ola)
console.log(moduloA3.ola)
// -------------------------------------------------------------------------------------------------- //


// -------------------------------------------------------------------------------------------------- //
// 2. Importando vários módulos a partir de um único módulo
// -------------------------------------------------------------------------------------------------- //
// Basta, dentro da pasta do seu projeto, criar um arquivo index.js e referenciar todos os exports lá
const pastaC = require('./pastaC')

console.log(pastaC.ola2)
// -------------------------------------------------------------------------------------------------- //


// -------------------------------------------------------------------------------------------------- //
// 3. Importando bibliotecas da pasta local node_modules
// -------------------------------------------------------------------------------------------------- //
const lodash = require('lodash')      // Aqui ele irá procurar o arquivo index.js dentro da pasta da lib lodash
// -------------------------------------------------------------------------------------------------- //


// -------------------------------------------------------------------------------------------------- //
// 4. Importando bibliotecas pré-instaladas com o Node
// -------------------------------------------------------------------------------------------------- //
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)

// Acesse pelo endereço: http://localhost:8080/
// -------------------------------------------------------------------------------------------------- //