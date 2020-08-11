// 1. Posso exportar criando novos atributos da seguinte forma
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

// 2. Mas se for exportar um novo objeto, é preciso usar o module.exports

// Nota 1: Logo, não posso exportar um novo objeto usando apenas "exports", pois assim eu vou mudar para onde exports
// estará apontando, e ele não irá apontar mais para o atributo module.exports
// Nota 2: Porque o atributo de module (module.exports) ainda existirá
// Mas eu desassociei a variável exports (ela não estará apontando mais
// para module.exports) e apontei ela para outro endereço de memória (agora é um novo objeto)
exports = null
exports = { b: 'a' }

console.log(module)
console.log(module.exports)
console.log(exports)

// Isso acontece pois debaixo dos panos é isso:
// const module = { exports: {} }
// this = module.exports
// const exports = module.exports

module.exports = { teste: 'Esse funciona e é o certo!' }