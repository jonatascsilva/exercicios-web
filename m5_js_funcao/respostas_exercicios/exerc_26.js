/* 
 * Exercício 26:
 * 
 *   Fazer um programa para encontrar todos os pares entre 1 e 100.
 */

function encontrarPares(numeroInicial, numeroFinal) {
    const numerosPares = []

    for (let i = numeroInicial; i <= numeroFinal; i++) {
        if ((i % 2) == 0) {
            numerosPares.push(i)
        }
    }

    return console.log(numerosPares)
}

encontrarPares(1, 100)