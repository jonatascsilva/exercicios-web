console.log(Math.ceil(6.1))     // Usando notacao ponto para acessar funcao arredondamento dentro do object Math

// Usando notacao ponto para criar dinamicamente atributos em objetos
const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola1'    // Observe que nesse caso é possível usar os colchetes também, o que não é recomendavel
console.log(obj1.nome)

// Usando notacao ponto para criar atributos em funcoes
function MeuObjeto(valor) {  // Aqui estamos criando uma funcao chamada MeuObjeto
    this.nome = valor        // Usando o this, estou definindo um atributo público chamado nome, que terá o seu valor
                             // obtido da variável nome1
}

const obj2 = new MeuObjeto('Biscoito')  // Aqui crio uma instancia (copiando a forma, o 'esqueleto') do MeuObjeto,
                                        // no objeto2 com um Nome/Chave "nome" e Valor "Biscoito"
                                        // Ou seja, toda vez que chamar a funcao new MeuObjeto ele ira instanciar (ou seja
                                        // copiar sua forma, que é uma chave "nome" e seu valor obtido dos "()") para o
                                        // objeto que eu desejar
console.log(obj2.nome)

const obj3 = new MeuObjeto('Cadeira')
console.log(obj3.nome)
console.log(obj3)