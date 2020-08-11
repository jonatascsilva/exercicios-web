/* 
 * Exercício 17:
 * 
 *   Um funcionário irá receber um aumento de acordo com o seu plano de
 * trabalho, de acordo com a tabela abaixo:
 *  | Plano | Aumento (%) |
 *  |   A   |     10      |
 *  |   B   |     15      |
 *  |   C   |     20      |
 *   Faça uma função que leia o plano de trabalho e o salário atual de um
 * funcionário e calcula e imprime o seu novo salário.
 *   Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 */

function imprimirNovoSalario(planoDeTrabalho, salarioAtual) {
    planoDeTrabalho = planoDeTrabalho.toLowerCase()

    switch (planoDeTrabalho) {
        case 'a':
            return console.log(`Novo salário: ${salarioAtual * 1.10} (Plano A)`)
        case 'b':
            return console.log(`Novo salário: ${salarioAtual * 1.15} (Plano B)`)
        case 'c':
            return console.log(`Novo salário: ${salarioAtual * 1.20} (Plano C)`)
        default:
            return console.log('Plano de trabalho inválido')
    }
}

imprimirNovoSalario('A', 1000)      // 1000 + 10% = 1100
imprimirNovoSalario('b', 1000)      // 1000 + 15% = 1150
imprimirNovoSalario('C', 1000)      // 1000 + 20% = 1200

imprimirNovoSalario('z', 1000)      // Inválido