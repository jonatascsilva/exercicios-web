// Função arrow
// Ela oi introduzida no ES6 e permite reduzir a construção de uma função,
// sempre vai ser anônima (logo, tem que armazenar ela em const/var) e o this não varia mais :)

// --------------------------------------------------------------------------------------------------- //
// EXEMPLO 1: Mudando de função simples para arrow
// --------------------------------------------------------------------------------------------------- //
// 1. Função pura, o this varia!
let dobro = function (a) {
    return 2 * a
}

// Refatorando a função dobro com função arrow
// Se abrir o bloco com {} é obrigatório usar o return
dobro = (a) => {
    return 2 * a
}

// Refatorando usando uma função arrow ainda mais enxuta
// Removido o bloco com {} (pois só tem um parametro) o return é implícito, logo deve ter só uma sentença
dobro = a => 2 * a

console.log(dobro(2))

// --------------------------------------------------------------------------------------------------- //
// EXEMPLO 2: Mudando de função simples para arrow
// --------------------------------------------------------------------------------------------------- //
let ola = function () {
    return 'Olá!'
}

ola = () => {
    return 'Olá'
}

ola = () => 'Olá'   // Usar sem parametro colocando ()
ola = _ => 'Olá'    // Pode até reduzir mais usando um parametro como esse (_),
                    // aí no caso quando chamar a função basta não passar parametro

console.log(ola())