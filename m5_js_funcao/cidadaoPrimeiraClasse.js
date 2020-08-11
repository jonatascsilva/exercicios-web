// Função em JS é First-Class Object (Citizens) ou Higher-order function
// 
// Ou seja, você pode usar função como dado, colocá-la dentro de constante,
// colocar função dentro de função, usar ela como parâmetro, etc.


// -------------------------------------------------------------------------------------------------------- //
// Criar de forma literal
// -------------------------------------------------------------------------------------------------------- //
function func1() { }    // Retorno opcional, logo, se não usar return, ela devolve undefined


// -------------------------------------------------------------------------------------------------------- //
// Armazenar em uma variável
// -------------------------------------------------------------------------------------------------------- //
const func2 = function () { }


// -------------------------------------------------------------------------------------------------------- //
// Armazenar em um array
// -------------------------------------------------------------------------------------------------------- //
const meuArray = [function (a, b) { return a + b }, func1, func2]   // Pode armazenar declarando de forma literal ou chamá-la
console.log(meuArray[0](2,3))   // Chamando a função da posição 0 no array


// -------------------------------------------------------------------------------------------------------- //
// Armazenar dentro de um atributo de objeto
// -------------------------------------------------------------------------------------------------------- //
const meuObjeto = { atributo1: function () { return 'Opa' } }
console.log(meuObjeto.atributo1())


// -------------------------------------------------------------------------------------------------------- //
// Passar função como parâmetro
// -------------------------------------------------------------------------------------------------------- //
function run(funcRecebida) {    // Defini receber uma função como parâmetro desta função run
    funcRecebida()      // Invocando a função recebida
}
run(function () { console.log('Executando...') })


// -------------------------------------------------------------------------------------------------------- //
// Função pode retornar/conter uma função
// -------------------------------------------------------------------------------------------------------- //
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
// Primeiro passo os parâmetros da função "master" depois passo o parâmetro da interna
soma(2, 3)(5)   
// Ou armazenar o resultado da primeira chamada em const e depois chamar a const para então chamá-la novamente
const primeiraParcelaSoma = soma(2,3)
primeiraParcelaSoma(5)