// JSON - JavaScript Object Notation
// -> É um formato textual para transportar dados entre sistemas
//    diferentes (ou no mesmo sistem) e possam assim se comunicar, guardar configurações, etc.
// Ele não aramazena funções, pois é um formato de dados para
// carregar dados apenas nada específico de um sistema/tecnologia

// 1. Convertendo objeto para JSON
const objetoGenerico = { a: 1, b: 2, c: 3, soma() { return a + b + c } } 
console.log(JSON.stringify(objetoGenerico))     // Gera string, e verifique que ele exclui a função!

// 2. Convertendo JSON para objeto
// console.log(JSON.parse("{ a: 1, b:2, c: 3 }"))              // Inválido! Strings devem ter ""
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))       // Inválido! Somente "", '' são inválidas
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))          // Válido! Somente "", colocar '' fora

// 2.1 Testando outras conversões
console.log(JSON.parse('{ "a": 1.75, "b": "string", "c": true, "d": {}, "e": [] }'))