// Aqui vou prototipar um numero e associar uma funcao à ele
Number.prototype.entre = function (inicio, fim) {     // Ele vai aceitar dois intervalos, inicio e fim
    // O this no caso será o próprio Number.prototype 
    // (que vou chamar de nota depois) e verificar se está dentro do intervalo dado
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    // Agora posso chamar a funcao que criei a partir de m number, que será o "nota"
    if(nota.entre(9, 10)) {
        console.log('Quadro de honra!')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado!')
    } else if(nota.entre(0, 6.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(3)
imprimirResultado(-1)
imprimirResultado(11)