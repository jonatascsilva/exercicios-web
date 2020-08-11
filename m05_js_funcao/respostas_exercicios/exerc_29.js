/* 
 * Exercício 29:
 * 
 *   Utilizando a estrutura de repetição for, faça uma função que percorra
 * um vetor e conte quantos números deste vetor estão no intervalo [10,20]
 * (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
 * deles estão fora do intervalo, escrevendo estas informações.
 */

const contadorInstanciasDe10Ate20 = (array = []) => {
    let contagemDentroIntervalo = 0

    for (let i in array) {
        if ((array[i] >= 10) && (array[i] <= 20)) {
            contagemDentroIntervalo++
        }
    }

    return console.log(`No intervalo de 10 até 20: ${contagemDentroIntervalo} estão dentro e ${array.length - contagemDentroIntervalo} estão fora`)
}

const numerosAleatorios = [10, 12.5, 17.5, 20, 1, 2, 5]

contadorInstanciasDe10Ate20(numerosAleatorios)
contadorInstanciasDe10Ate20([7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21])