// Imperativo: diz como fazer (passo a passo)
    // Exemplo na vida: falo pra pessoa preparar a mesa e passo as instruções: colocar o prato em tal lugar, talher nesse lugar...
// Declarativo: diz o que quer fazer
    // Exemplo na vida: falo pra pessoa preparar a mesa e não preciso passar instruções (pois ela já sabe)

const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
    // Menos reuso de código
    // Pensar mais para resolver um determinado algoritmo
    // Aqui estou fazendo tudo de uma vez só, percorrendo e somando tudo de uma vez
    // Me interessa como o programa irá executar, quero passar as instruções
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Declarativo
    // Mais reuso de código
    // Deixo que a linguagem resolva um determinado algoritmo
    // Aqui faço coisas separadas e posso reusar as funções/métodos em outros contextos se quiser
    // Não me interessa como o programa irá executar, apenas que faça o que pedi
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)