// Lembrando que estes tipos são funções, logos todos têm prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Logo, podemos criar métodos personalizados para estes tipos!
// Criando um método para strings
String.prototype.reverse = function () {
    return this.split('').reverse().join('')    // Quebro todos os chars em elementos de array, inverto e junto
}

console.log('Escola Cod3r'.reverse())

// Criando um método para arrays
Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3].first())
console.log(['a', 'b', 'c'].first())

// Podemos até sobrescrever métodos que já existem (o que não é recomendado)
String.prototype.toString = function () {
    return 'ROMA'
}

console.log('Escola Cod3r'.reverse())