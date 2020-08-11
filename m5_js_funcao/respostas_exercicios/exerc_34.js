/* 
 * Exercício 34:
 * 
 *   Construa uma função que receberá duas Strings de tamanhos
 * variados e que retornará True ou False caso todos os caracteres
 * (independentemente de ser maiúsculo ou minúsculo) estejam 
 * contidos em ambas palavras.
 */

function comparaDuasStrings(string1, string2) {
    if (string1.length == string2.length) {
        let charsString1 = string1.split('')
        let charsString2 = string2.split('')
    
        charsString1 = charsString1.sort()
        charsString2 = charsString2.sort()

        let charsEncontrados = true

        for (let i in charsString1) {
            if ((charsString1[i].toLowerCase()) != (charsString2[i].toLowerCase())) {
                charsEncontrados = false
                break
            }
        }

        if (charsEncontrados === false) {
            return false
        } else {
            return true
        }
    } else {
        return 'Strings não possuem o mesmo tamanho.'
    }
}

let nomePessoa1 = 'JOS@1#é'
let nomePessoa2 = 'jos@1#É'

console.log(comparaDuasStrings(nomePessoa1, nomePessoa2))