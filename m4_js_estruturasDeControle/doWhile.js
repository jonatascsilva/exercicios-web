// Do while garante que pelo menos uma vez o while será executado
// Exemplo de uso: Caso tenha um texto e um input. Caso o input seja errado ele volta a apresentar o texto e
// pedir novamente o input.

function obterNumeroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1   // Mesmo sendo a condicao de saida do while, passa pelo do primeiro e a function vai mudar esse valor   

do {    // Executa isto pelo menos uma vez e depois verifica a condicao do while
    opcao = obterNumeroAleatorioEntre(-1, 10)
    console.log(`Número aleatório foi ${opcao}`)
} while (opcao != -1)