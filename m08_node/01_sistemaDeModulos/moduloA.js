// ---------------------------------------------------------- //
// Este arquivo é um módulo do node!
// Tudo o que estiver aqui fica aqui, fica privado!
// A não ser que eu exporte...
// ---------------------------------------------------------- //
// Para tornar/receber algo público, precisa usar um dos
// padrões de módulos existentes do node. Os mais conhecidos:
// - CommmonJS
// - ECMAScript 2015
// ---------------------------------------------------------- //


// Exportando com o CommonJS
this.ola = 'Fala Pessoal!'                  // Posso usar o prórprio this na raíz
exports.bemVindo = 'Bem vindo ao node!'     // Ou usar o exports
module.exports.ateLogo = 'Até mais!'        // Mas, você deve usar este para não dar problema
                                            // Veja o moduloB.js

// console.log(module.exports)                 // Note que exports é um objeto, então aloquei dinamicamente
                                               // estas variáveis para este objeto

// console.log(this === exports)               // Note também que o this neste contexto aponta para o exports,
// console.log(this === module.exports)        // e o module.exports, por isso funciona de maneira igual

// Isso acontece pois debaixo dos panos é isso:
/* const module = { exports: {} }
this = module.exports
const exports = module.exports */