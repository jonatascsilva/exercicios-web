const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(6)
imprimirResultado(8)
imprimirResultado('Epa!')       // Aqui ele mostraria reprovado, é importante ter cuidado com isso e tratar,
                                // colocando exceção ou verificando se é number

// Exemplo pra resolver o problema do Epa!

const imprimirResultado2 = function(nota) {
    if(Number.isNaN(Number(nota)) === false) {
        if(nota >= 7) {
            console.log('Aprovado')
        } else {
            console.log('Reprovado')
        }
    } else {
        console.log('Não é número')
    }
}

imprimirResultado2(6)
imprimirResultado2(8)
imprimirResultado2('Epa!')