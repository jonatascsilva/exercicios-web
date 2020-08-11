/* 
 * Exercício 19:
 * 
 *   O cardápio de uma lanchonete é o seguinte:
 *  | Código | Descrição do Produto | Preço (R$) |
 *  |  100   |   Cachorro quente    |    3,00    |
 *  |  200   |  Hambúrguer simples  |    4,00    |
 *  |  300   |    Cheeseburguer     |    5,50    |
 *  |  400   |        Bauru         |    7,50    |
 *  |  500   |    Refrigerante      |    3,50    |
 *  |  600   |        Suco          |    2,80    |
 *   Implemente uma função que receba como parâmetros:
 * - o código do item pedido
 * - a quantidade
 * E assim calcule o valor a ser pago por aquele lanche.
 * 
 * Considere que a cada execução somente será calculado um item.
 * Use o comando switch. Crie um caso default para produto não existente.
 */

const calcularPedido = (codigo, quantidade) => {
    let preco = 0

    switch (codigo) {
        case 100:
            preco = 3
            return console.log(`Pedido: ${quantidade} x 'Cachorro quente' | Preço total: R$ ${preco * quantidade}`)
        case 200:
            preco = 4
            return console.log(`Pedido: ${quantidade} x 'Hambúrguer simples' | Preço total: R$ ${preco * quantidade}`)
        case 300:
            preco = 5.5
            return console.log(`Pedido: ${quantidade} x 'Cheeseburguer' | Preço total: R$ ${preco * quantidade}`)
        case 400:
            preco = 7.5
            return console.log(`Pedido: ${quantidade} x 'Bauru' | Preço total: R$ ${preco * quantidade}`)
        case 500:
            preco = 3.5
            return console.log(`Pedido: ${quantidade} x 'Refrigerante' | Preço total: R$ ${preco * quantidade}`)
        case 600:
            preco = 2.8
            return console.log(`Pedido: ${quantidade} x 'Suco' | Preço total: R$ ${preco * quantidade}`)
        default:
            return console.log(`Produto não existente!`)
    }
}

calcularPedido(100, 2)
calcularPedido(200, 3)
calcularPedido(300, 4)
calcularPedido(400, 5)
calcularPedido(500, 6)
calcularPedido(600, 7)

calcularPedido(700, 8)