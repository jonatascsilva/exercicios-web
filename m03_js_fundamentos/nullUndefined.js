//------------------------------------------------------//
// Antes de começar, veja explicação sobre atribuições
//------------------------------------------------------//

/*
 * Atribuição por referência:
 * 
 * Quando se cria um objeto e atribui ele a uma const/var,
 * o que na verdade está sendo atribuído é um endereço de
 * memória contendo o conteúdo do objeto.
 * 
 * Quando eu atribuo essa const/var à uma outra const/var,
 * essa nova const/var irá ter o "privilégio" de alterar
 * esse endereço também. Logo, eu atribuí por REFERÊNCIA.
 * 
 * Explico: Se alterar o conteúdo desse endereço à partir
 * de uma variável, a outra irá "sentir" isso também, veja:
 */

const a = {nome: 'Carlos'}
console.log(a)

const b = a
console.log(b)

b.nome = 'Alterei.. hehe'
console.log(a)

/*
 * Atribuição por valor:
 * 
 * Quando se cria uma const/var e atribui à ela um valor
 * primitivo da linguagem (number, string..) e eu atribuo
 * essa const/var à uma outra const/var, essa nova const/var
 * irá ter a CÓPIA do valor (e não do enderço). Logo, eu
 * atribuí por VALOR.
 * 
 * Logo: Se eu alterar o valor dessa nova const/var, ela
 * não irá alterar o valor da antiga const/var, veja:
 */
let c = 3
let d = c
console.log(c, d)

d++
console.log(c, d)

//------------------------------------------------------//
// Bora mlk
//------------------------------------------------------//

// Declarado variavel com nenhum valor (NUNCA foi inicializada)
let variavel
console.log(variavel, typeof(variavel))

// Null significa ausência de valor, ela não aponta para nenhum local de memória
// Logo, por exemplo, se eu quiser que uma variável não aponte pra lugar nenhum, posso usar ela
variavel = null
console.log(variavel, typeof(variavel))

// Apesar de ser sempre interessante manter atribuído um tipo à uma const/var quando precisar limpar
// uma const/var (exemplo: se for numerico colocar 0, se for string colocar ''..),
// o null pode ser usado para 'zerar' um valor de uma variável para const/var de referências
const preco = [1, 2, 3]
console.log(preco)
preco[0] = null                     // Preciso dizer que o preco dessa posição 0 não está
                                    // definido ainda (ao invés de dizer que está gratuito = R$0.00)
                                    // Assim, por exemplo, o sistema pode detectar e não colocar o produto no site
console.log(preco)

//console.log(preco[0].toString)    // Mas é preciso ter cuidado, pois não é possível efetuar função ou ter acesso
                                    // a propriedades de um undefined/null dar erro

const obj = {}
console.log(obj.nome)               // Aqui a chave nome será undefined (não foi inicializada)
//console.log(obj.nome.sobrenome)   // Mas se eu tentar acessar a propriedade dentro dela, dará erro             
