console.log(this === global)                // false
console.log(this === module)                // false
console.log(this === module.exports)        // true, ou seja, é igual ao objeto exports dentro de module
console.log(this === exports)               // true, pois exports aponta para this.exports

function logThis() {
    console.log('Dentro da função...')
    console.log(this === module.exports)    // false
    console.log(this === global)            // true

    this.a = 1                              // Logo, por isso que quando coloco this em uma variável dentro da função
                                            // digo que ela ficará pública, porque ela estará dentro de global

    let b = 2                               // Enquanto esta será privada por ficar presa dentro da função
}

logThis()
console.log(global)                         // verifique que a variável a está aqui

obj01 = {
    logThis() {
        return this === global
    },
    logThisObj() {
        return this === obj01
    }
}

console.log(obj01.logThis())                // false, pois neste caso, o this irá apontar para o obj
console.log(obj01.logThisObj())