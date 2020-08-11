// Retorna infinito (não gera erro)
const numeroTeste = 7 / 0
console.log(numeroTeste, typeof(numeroTeste))      

// Consegue realizar operações caso o conteúdo do outro tipo seja number
console.log('10' / 2)               // Nesse caso, ele identifica que o / não faz sentido no mundo da String e que tentando dividir dá resultado, então realiza essa ultima operação
console.log('10' + 2)               // Nesse caso, a String tem preferência (pois faz sentido concatenar)
console.log('10a' / 2)              // Mas, se houver algo que não seja muber retorna NaN (not a number)
console.log("Show" * 2)             // Em algumas linguagens retornaria Show duas vezes, mas não acontece no JS
console.log(0.5 + 0.1)              // Assim como em outras linguagens, não tem precisão exata no float para não comprometer desempenho
//console.log(10.toFixed())         // Não é possível utilizar funções em números literais, apenas nos que estiverem armazenados
console.log((10.557).toFixed(2))    // Mas, se colocar dentro de parêteses é ok :)
