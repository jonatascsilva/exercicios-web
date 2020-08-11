// Exercício extra para fixar conteúdo

class Avo {
    constructor(nome, sobrenome, profissao) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.profissao = profissao
    }

    quemSou() {
        return console.log(`Olá, me chamo ${this.nome}!`)
    }
}

class Pai extends Avo {                         // Defino o protótipo de pai usando a palavra reservada extends
    constructor(nome, sobrenome, profissao) {
        super(nome)                             // Usando isto posso chamar os métodos da classe Avo com o nome do Pai
        this.nome = nome
        this.sobrenome = sobrenome
        this.profissao = profissao
    }

    meuPai() {
        // Observe que o super retornará undefined pois quando o objeto for referenciar o super,
        // estará referenciando esta classe (que tem o atriubto não preenchido), e não o objeto criado pela instância new
        return console.log(`Sou ${this.nome} e ${super.nome} é o meu pai`)
    }
}

class Filho extends Pai {
    constructor(nome, sobrenome, profissao) {
        super(nome)                             // Usando isto posso chamar os métodos que a classe Pai possui ou tem acesso
        this.nome = nome
        this.sobrenome = sobrenome
        this.profissao = profissao
    }
}

const avo = new Avo('Sérgio', 'Silva', 'Mecânico')
const pai = new Pai('Paulo', 'Silva', 'Professor')
const filho = new Filho('Sara', 'Silva', 'Técnico')

console.log(avo)
console.log(pai)
console.log(filho)

avo.quemSou()
pai.quemSou()
filho.quemSou()

pai.meuPai()        // retornará undefined para seu pai, vide linhas 24 e 25
filho.meuPai()      // retornará undefined para seu pai, vide linhas 24 e 25