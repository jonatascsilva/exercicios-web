// Usa WHILE (apropriado) para situações que tenha uma quantidade indeterminda de iterações
// Exemplo: Enquanto o usuário não digitar -1 vai continuar lendo as notas para calcular a media
// Exemplo: Enquanto o usuário não clicar no botão vai ficar aparecendo na tela "Clique no botão"

function obterAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = obterAleatorioEntre(-1, 10)
    console.log(`O número aleatório foi ${opcao}`)
}