/* 
 * Exercício 04:
 * 
 *   Crie uma função que irá receber dois valores, o dividendo e o divisor.
 *   A função deverá imprimir o resultado e o resto da divisão destes dois valores.
 */

const divisaoSemCasaDecimal = (dividendo, divisor) => console.log(`${dividendo + '/' + divisor} => Quociente: ${Math.floor(dividendo / divisor)} | Resto: ${dividendo % divisor}`)

divisaoSemCasaDecimal(11, 4)      // 11 / 4 = 2 (quociente) e 3 (resto)
divisaoSemCasaDecimal(10, 2)      // 10 / 2 = 5 (quociente) e 0 (resto)
divisaoSemCasaDecimal(2, 8)       // 2 / 8  = 0 (quociente) e 2 (resto)
divisaoSemCasaDecimal(17, 2)      // 17 / 2 = 8 (quociente) e 1 (resto)