/* 
 * Exercício 10:
 * 
 *   Crie uma função que verifica se um número inteiro passado como
 * parâmetro é divisível por 3 e retorne true ou false.
 */

const verificaNumeroDivisivelPor3 = (numero) => {
    if (Number.isInteger(numero)) {
        if ((numero % 3) == 0) {
            return `O número ${numero} é divisível por 3`
        } else {
            return `O número ${numero} NÃO é divisível por 3`
        }
    } else {
        return `Argumento ${numero} não aceito. Envie número inteiro do tipo number`
    }
}

// Validação de entrada
console.log(verificaNumeroDivisivelPor3())
console.log(verificaNumeroDivisivelPor3(null))
console.log(verificaNumeroDivisivelPor3(Infinity))
console.log(verificaNumeroDivisivelPor3(' '))
console.log(verificaNumeroDivisivelPor3('3'))

// Divisíveis por 3
console.log(verificaNumeroDivisivelPor3(3))
console.log(verificaNumeroDivisivelPor3(27))
console.log(verificaNumeroDivisivelPor3(300))
console.log(verificaNumeroDivisivelPor3(99))

// Não divisíveis
console.log(verificaNumeroDivisivelPor3(5))
console.log(verificaNumeroDivisivelPor3(7))
console.log(verificaNumeroDivisivelPor3(1))
console.log(verificaNumeroDivisivelPor3(100))