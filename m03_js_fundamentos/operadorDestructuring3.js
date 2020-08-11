// Destructuring em objetos e uso em funcoes

function random({ min = 0, max = 1000 }) {    // Aqui uso o destructuring para pegar min e max de um objeto e usar na funcao
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const objetoTeste = {
    min: 50,
    max: 40
}
console.log(random(objetoTeste))        // Retorna valores randmicos de 50 a 40

console.log(random({min: 998}))         // Posso passar apenas um parametro, uma vez que na funcao o max tem um valor ja padrao
                                        // Aqui ele irá retornar de 998 e 1000
//console.log(random())                 // Nao passei objeto, a funcao ira tentar desetruturar nada, logo, gera erro