const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()  // Invocando a função factory do export desse módulo
const contadorD = require('./instanciaNova')()  // Invocando a função factory do export desse módulo

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)    // Contador compartilha o cache do require do contadorA

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)    // Como estou criando nova instância de objeto para cada require, não compartilha o cache com o contadorC