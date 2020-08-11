// Tagged template
// - Processar uma template string à partir de uma função
// - Posso obter separadamente os valores interpolados separados do que é string

function tag(partes, ...valores) {
    console.log(partes)                         // Obtenho o que for string da minha template 
    console.log(valores)                        // Obtenho o que foi interpolado (no caso, as variaveis aluno e situacao)
    return 'Pronto...'
}

const aluno = 'Guilherme'
const situacao = 'Aprovado'
console.log(tag `Olá, ${aluno} está ${situacao}!!!`)