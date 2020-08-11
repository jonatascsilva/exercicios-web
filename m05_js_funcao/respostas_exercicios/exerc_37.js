/* 
 * Exercício 37:
 * 
 *     Escreva duas funções, uma para progressão aritmética e uma para progressão
 * geométrica que recebam como parâmetros e um número n (número de termos), a1 (o primeiro termo) e
 * r (a razão) e escreva os n termos, bem como a soma dos elementos.
 */

function calculaProgressao(n, a1, r, tipoProgressao) {
    let termos = [a1]
    let somaTermos = a1

    for (let i = 1; i <= (n - 1); i++) {
        if (tipoProgressao == 'aritmetica') termos[i] = termos[i-1] + r
        if (tipoProgressao == 'geometrica') termos[i] = termos[i-1] * r
        somaTermos += termos[i]
    }

    return {
        termos,
        somaTermos
    }
}

function getProgressaoAritmetica(n, a1, r) {
    progressaoAritmetica = calculaProgressao(n, a1, r, 'aritmetica')

    return console.log(`Termos da P.A. são ${progressaoAritmetica.termos} e a soma ${progressaoAritmetica.somaTermos}`)
}

function getProgressaoGeometrica(n, a1, r) {
    progressaoGeometrica = calculaProgressao(n, a1, r, 'geometrica')

    return console.log(`Termos da P.A. são ${progressaoGeometrica.termos} e a soma ${progressaoGeometrica.somaTermos}`)
}

getProgressaoAritmetica(5, 2, 2)        // n= 5, a1= 2, r= 2
                                        // a1 + a2=(a1+r) + ... + an(a(n-1)+2)
                                        // 2 + 4 + 6 + 8 + 10 = 30
getProgressaoGeometrica(5, 2, 2)        // n= 5, a1= 1, r= 2
                                        // a1 + a2=(a1*r) + ... + an(a(n-1)*2)
                                        // 2 + 4 + 8 + 16 + 32 = 62