// Quando importo uma biblioteca (ou seja, crio uma referencia da biblioteca), uso por convenção _
// Note que não preciso usar o sistema de pastas, basta colocar o nome da lib que o node irá procurar
// esta lib dentro da pasta node_modules, abrir o index.js desta lib e executar o que estiver lá
const _ = require('lodash')

// Usando função random do lodash
// Gero valor aleatorio a cada 2s
setInterval(() => console.log(_.random(1, 1000)), 100)

// Usando o nodemon
// Basta, no terminal, executar qualquer arquivo .js usando
// > nodemon nome.js
// Que ele irá executar o arquivo em tempo real
// Logo, se eu alterar qualquer coisa no código e salvar, ele irá rodar ele automaticamente
// Posso forçar o restart digitando no terminal
// > rs
// E sair apertando Ctrl + C