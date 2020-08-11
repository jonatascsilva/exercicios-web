// Para aumentar o desacoplamento de código e evitar que seja alterado
// atributos explicitamente e assim gerar erros (ex.: pessoa.idade = -1)
// É definido os atributos como privados e se utiliza métodos getters/setters
// associados ao nome do atributo para, respec., obter/alterar esses atributos privados

// Como o JS não permite definir private igual ao Java, é convencionado
// o uso do _ antes para "saber" que a variável deve ser acessada por get/set
const sequencia = {
    _valor: 1,
    get valor() {                   // Quando chamo get ele aumenta minha var em +1 automaticamente
        return ++this._valor
    },
    set valor(valor) {              // Ou posso setar minha var manualmente 
        if (valor > this._valor) {  // com a condição de que ela deve ser maior que o valor atual
            this._valor = valor
        }
    }
}

// Posso acessar agora usando o get (note que não precisa colocar get)
console.log(sequencia.valor, sequencia.valor)

// Usando set
sequencia.valor = 1000
console.log(sequencia.valor)
sequencia.valor = 1             // Ignora pois não passou na validação do set
console.log(sequencia.valor)