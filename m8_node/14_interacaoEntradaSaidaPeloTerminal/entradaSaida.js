// Entrada e saída de comandos/respostas pelo próprio terminal
// Posso interagir com a minha aplicação pelo terminal!

// Por padrão, o Node disponibiliza o objeto process para podermos tratar isso
// console.log(process)

// Associo uma flag -a (que será recebida se o usuário digitar no terminal)
// que estará dentro do objeto process deste arquivo js (quando ele for executado)
const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

// Agora, posso chamar no terminal:
    // node entradaSaida -a
        // Isso vai retornar true
    // node entradaSaida
        // Isso vai retornar false

// Agora vamos brincar um pouco...
// Se chamar a flag -a, vamos escrever no terminal!
if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')     // \n é quebra de linha
    process.exit()                              // Finaliza aplicação
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', dadosRecebidos => {                      // No evento em que o usuario apertar enter (reconhecido pelo 'data' habilitado) executa isso
        const nome = dadosRecebidos.toString().replace('\r\n', '')    // Armazeno o que o usuário escreveu removendo o enter e quebra de linha

        process.stdout.write(`Fala ${nome}!!`)
        process.exit()
    })
}