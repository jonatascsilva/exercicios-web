const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// A herança em JS é dada pelo prototype:
// Todo objeto possui um atributo (__proto__) que referencia seu pai (seu prototype)
// Ele é usado no caso se eu buscar um atributo que não esteja dentro de
// ferrari, ele vai buscar esse atributo no objeto pai
console.log(ferrari.__proto__)                              // Como criei de forma literal, retorna um objeto vazio (ou seja existe!, mas está vazio), vamos ver quem é
console.log(ferrari.__proto__ === Object.prototype)         // Achamos! Logo, deduzimos que criamos esse objeto usando a função Object.prototype
console.log(volvo.__proto__ === Object.prototype)           // Conferindo se existe esse atributo em volvo
console.log(Object.prototype.__proto__)                     // Verificando se o Object possui algum pai (prototype) = não possui!

// Toda função terá um prototype (logo Object é uma função) que é do tipo objeto
// É assim que o JS define herança, pois o prototype é quem será o "superpai" quando gerar objetos a partr de funções
function MinhaFuncao() {}
console.log(typeof Object, typeof MinhaFuncao)
console.log(MinhaFuncao.prototype)