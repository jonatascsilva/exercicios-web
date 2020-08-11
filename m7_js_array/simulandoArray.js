// Exercício somente demonstrativo, não aplicável na prática de desenvolvimento
// pois o array gerado pelo JS tem muito mais coisa por baixo dos panos

// Crio um objeto literal
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray[0])          // Aqui já printa como se fosse um array
console.log(quaseArray)             // Mas aqui não, ainda printa como objeto
     

// Crio um novo atributo para meu objeto com:
// - Chave: 'toString'
// - Valor: função que irá retornar todos os valores dos atributos deste mesmo array
// - Enumerable: false (não listo ela no meu objeto)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})
console.log(quaseArray[0])          // Aqui continua printando como se fosse um array
console.log(quaseArray.toString())  // Aqui printa como se fosse um array!