// Função anônima
// - 1. Atribuir a função a uma const/var
// - 2. Passar como parametro
// - 3. Passar como return
// - 4. Colocar como valor de uma chave/atributo em um objeto

const soma = function (x, y) {              // 1.
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {   // 2. 
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)    // 2. 

const pessoa = {
    falar: function () {                    // 4.
        console.log('Falei..')
    },
    falar2() {                              // 4. Modo 2 de atribuir
        console.log('2 x Falei')
    }
}

pessoa.falar()
pessoa.falar2()