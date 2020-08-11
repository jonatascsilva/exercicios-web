// Este arquivo é um módulo do node!
// Tudo o que estiver aqui fica aqui, fica privado!
// A não ser que eu exporte...

// Exportando com o CommonJS
// Esta é a forma mais usual, usar o module.exports
// Se você trocar module.exports por exports ou até mesmo this verá que dará problema!
// > Aqui no moduloB, note que estou substituindo o objeto vazio dentro de module.exports por um novo objeto
//   No moduloA eu adicionei atributos para o objeto padrão já existente
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}

var a = 1       // Variável privada
let b = 2       // Variável privada
const c = 3     // Variável privada

// console.log(this)
// console.log(exports)
// console.log(module.exports)