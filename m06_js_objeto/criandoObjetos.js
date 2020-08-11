// ----------------------------------------------------------------------------------------------------- //
// 1. Notação literal
const obj1 = {}
console.log(obj1)


// ----------------------------------------------------------------------------------------------------- //
// 2. À partir do Object do JS
const obj2 = new Object
console.log(obj2, typeof Object, typeof new Object)


// ----------------------------------------------------------------------------------------------------- //
// 3. Função construtora
function Produto(nome, preco, desc) {
    this.nome = nome                    // Deixei somente o nome público!
                                        // Ele pode ser alterado depois de criado objeto
                                        // Os outros atributos não
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
// console.log(obj3.preco)              // Como citado na linha 11 a 13, não consegui acessar/alterar preco
// obj3.preco = 10                      // Observe que se eu "forçar" eu não estarei sobrescrevendo, mas sim o redeclarando na última linha do objeto
                                        // Logo, a função getPrecoComDesconto usará o preço antigo, e não o novo
                                        // Para isso, precisa usar o freeze


// ----------------------------------------------------------------------------------------------------- //
// 4. Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())


// ----------------------------------------------------------------------------------------------------- //
// 5. Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// ----------------------------------------------------------------------------------------------------- //
// 6. Usando uma função famosa que retorna objeto (JSON)
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)