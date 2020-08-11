//----------------------------------------------------------------------------//
// Exemplos de como a função é primordial no Js, pois aqui tudo é criado a
// partir de função
//----------------------------------------------------------------------------//

// Objetos
console.log(typeof Object)      // Exibe que é uma função por 'baixo dos panos'
console.log(typeof new Object)  // Estou instanciando um novo objeto, o programa reconhece que será criado um Object

// Armazenando função
const Cliente = function() {}
console.log(typeof Cliente)      // Exibe que é uma função por 'baixo dos panos'
console.log(typeof new Cliente)  // Estou instanciando uma nova função a partir de uma função, o programa reconhece que será criado uma função

// Classes (é basicamente instanciar uma função)
class Produto {}
console.log(typeof Produto)      // Exibe que é uma função por 'baixo dos panos'
console.log(typeof new Produto)  // Estou instanciando uma nova classe a partir de uma classe, o programa reconhece que será criado um Object