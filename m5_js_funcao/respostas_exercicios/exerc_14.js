/* 
 * Exercício 14:
 * 
 *   Crie uma estrutura condicional switch que receba uma string com
 * o nome de uma fruta e que possua três casos:
 *   - Caso maçã, retorne no console: “Não vendemos esta fruta aqui”.
 *   - Caso kiwi, retorne: “Estamos com escassez de kiwis”.
 *   - Caso melancia, retorne: “Aqui está, são 3 reais o quilo”.
 * Teste com estas três opções e crie também um default, que retornará uma mensagem de erro no console.
 */

const verificaFrutaNoEstoque = (nomeDaFruta) => {
    if (typeof nomeDaFruta === typeof 'a') {
        nomeDaFruta = nomeDaFruta.toLowerCase()

        switch (nomeDaFruta) {
            case 'maçã':
                return console.log("Não vendemos esta fruta aqui")
            case 'kiwi':
                return console.log("Estamos com escassez de kiwis")
            case 'melancia':
                return console.log("Aqui está, são 3 reais o quilo")
            default:
                return console.log("Erro! Fruta inválida.")
        }
    } else {
        return console.log("Envie um parâmetro string!")
    }
}


verificaFrutaNoEstoque()
verificaFrutaNoEstoque(1)
verificaFrutaNoEstoque('')
verificaFrutaNoEstoque('maçã')
verificaFrutaNoEstoque('KIWI')
verificaFrutaNoEstoque('MelANCia')