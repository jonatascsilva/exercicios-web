/* 
 * Exercício 18:
 * 
 *   Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso.
 * Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’
 */

const lerPorExtensoNumeroDe0A10 = (numero) => {
    if (Number.isInteger(numero)) {
        switch (numero) {
            case 0:
                return console.log(`${numero}: Zero`)
            case 1:
                return console.log(`${numero}: Um`)
            case 2:
                return console.log(`${numero}: Dois`)
            case 3:
                return console.log(`${numero}: Três`)
            case 4:
                return console.log(`${numero}: Quatro`)
            case 5:
                return console.log(`${numero}: Cinco`)
            case 6:
                return console.log(`${numero}: Seis`)
            case 7:
                return console.log(`${numero}: Sete`)
            case 8:
                return console.log(`${numero}: Oito`)
            case 9:
                return console.log(`${numero}: Nove`)
            case 10:
                return console.log(`${numero}: Dez`)
            default:
                return console.log(`${numero}: Número fora do intervalo (0 a 10)`)
        }
    } else {
        return console.log('É aceito somente números inteiros')
    }
}

lerPorExtensoNumeroDe0A10()
lerPorExtensoNumeroDe0A10(null)
lerPorExtensoNumeroDe0A10(-1)

lerPorExtensoNumeroDe0A10(0)
lerPorExtensoNumeroDe0A10(1)
lerPorExtensoNumeroDe0A10(2)
lerPorExtensoNumeroDe0A10(3)
lerPorExtensoNumeroDe0A10(4)
lerPorExtensoNumeroDe0A10(5)
lerPorExtensoNumeroDe0A10(6)
lerPorExtensoNumeroDe0A10(7)
lerPorExtensoNumeroDe0A10(8)
lerPorExtensoNumeroDe0A10(9)
lerPorExtensoNumeroDe0A10(10)

lerPorExtensoNumeroDe0A10(11)