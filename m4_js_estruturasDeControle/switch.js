const imprimirResultado = function (nota) {
    // Math.floor arrendonda numero para baixo = 6.1 = 6
    // Math.ceil arrendonda numero para cima = 6.1 = 7
    switch(Math.floor(nota)) {
        case 10:    // Como eu quero que se for 10 ou 9 apareça quadro de honra, se receber 10 ele não faz nada e
        case 9:     // quando pular para o debaixo ele vai mostrar "Quadro de honra", veja nota no final
            console.log('Quadro de honra')
            break
        case 8: case 7: {   // Pode usar bloco de código, mas não precisa, pois ele vai lendo até ter um break
            console.log('Aprovado!')
            break
        }
        case 6: case 5: case 4: case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
            break
    }
}

// Nota: O comportamento do switch se eu aplicar a nota 10 nesse caso (claro que se eu não usar o break)
// é que entrará no case 10, sera verdade e executará o que está dentro, mas, como não há o break
// ele vai executar todos os outros cases abaixo (executa o que estiver dentro do case 9, dentro do case 8, etc.)

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(0)
imprimirResultado(-1)