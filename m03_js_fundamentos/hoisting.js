// O hoisting (içamento) manda o var e funções para cima, independente onde
// estão localizadas
// - No caso dos var, assim, sendo possível declará-la depois de uma chamada,
//   por exemplo outras linguagens não seria possível pois lê de cima para baixo

console.log('a = ', a)      // Aqui no caso dá undefined, ou seja, só não foi atribuído tipo/valor, mas a variável existe
var a = 2                   // Atribuí valor e tipo
console.log('a = ', a)      // Agora mostra valor

/* 
 * O que o código internamente faz é isso:
 * var a
 * console.log('a = ', a)
 * a = 2
 * console.log('a = ', a)
 */