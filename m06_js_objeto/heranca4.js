// Entendendo um pouco mais sobre prototype

// Criando função (será uma construtora no caso, pois não cria obj usando return)
function MeuObjeto() {}
console.log(MeuObjeto.prototype, typeof MeuObjeto.prototype)

const obj1 = new MeuObjeto                           // Instanciando objetos com funcao            
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)       // O prototype dos dois objetos têm a mesma ref? SIM
console.log(MeuObjeto.prototype === obj1.__proto__)  // Verificando se o __proto__ dos objetos irão apontar para o Object ou MeuObjeto
// NOTA! Concluímos que quando criamos objetos à partir de funções
// o prototype dos obj será a função, e não mais o Object

MeuObjeto.prototype.nome = 'Anônimo'                 // Como prototype é obj, posso criar atributos!
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj1.nome = 'Rafael'
obj1.falar()

// Mudando a ref do prototype
const obj3 = {}                         // Como criei usando notação lieteral, quem vai ser protoype é o Object
console.log(obj3.__proto__ === Object.prototype)    // true

obj3.__proto__ = MeuObjeto.prototype    // Mas agora mudei a referencia do prototype
obj3.nome = 'Obj3'                      // Agora tenho acesso aos atributos e métodos de MeuObjeto
obj3.falar()

// Resumindo referências
// Object -> function MeuObjeto -> Function -> Object
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)      // Qualquer novo objeto criado por função <> Prototype dessa função
console.log(MeuObjeto.__proto__ === Function.prototype)             // Pai de qualquer função === Prototype da Function
console.log(Function.prototype.__proto__ === Object.prototype)      // Pai da Function === Prototype de Object
console.log(Object.prototype.__proto__)                             // Aqui chegamos no final da prototype chain