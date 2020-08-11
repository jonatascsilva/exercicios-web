// Revisão dos novos recursos do ES5 (e posteriores) já apresentados durante os fundamentos do JS

// 1. Variáveis let e const
// - var => somente dois escopos: funcao e global
// - let => escopo local (de blocos): global, dentro de uma funcao, dentro de um for, dentro de um objeto...
// - const => mesmo escopo do let, mas não permite alterar o conteúdo (se conteúdo for primitivo) ou alterar ponteiro (se for objeto, array, etc.)
{
    var a =2
    let b = 3
    console.log('1) Dentro do bloco:', a, b)
}
console.log('1) Fora do bloco:', a/* , b */)    // Não consigo acessar b

// 2. Template String
// - Usando ` (backtick), permite interpolar quebra de linhas, variáveis, funções, na string
const produto = 'Ipad'
console.log(`2) ${produto} é caro!!
2) Compre outro tablet.`)

// 3. Operador Destructuring
// - Obter facilmente partes de uma estrutura (como array, objeto, string...)
const [l, e, ...tras] = "Cod3r"
console.log('3)', l, e, tras)

const [x,  , y] = [1, 2, 3]
console.log('3)', x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }     // Removo um atributo com o mesmo nome (ele deve existir, se não não funciona) e ainda renomeio minha variável
console.log('3)', i, nome)