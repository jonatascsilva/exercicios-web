// Destructuring em objetos e uso em funcoes

function random([min = 0, max = 1000]) {    // Aqui uso o destructuring para pegar min e max de um array e usar na funcao
    if (min > max) [min, max] = [max, min]  // Se a variavel min for maior que max, estruturo elas em array e crio um novo array = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(random([50, 40]))       // min > max, a funcao ira inverter internamente
console.log(random([992]))          // só passei min, a funcao ira usar valor padrao de max
console.log(random([, 10]))         // só passei max, a funcao ira usar valor padrao de min
console.log(random([]))             // passei array vazia, a funcao ira usar valor padrao de min e max
//console.log(random())             // Nao passei array, a funcao ira tentar desetruturar nada, logo, gera erro