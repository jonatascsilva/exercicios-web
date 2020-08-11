// Exercício extra para fixar conteúdo
// Lembrando que é sempre recomendado composição, e não herança!!! https://www.youtube.com/watch?v=wfMtDGfHWpA

// Aqui está minha super classe, coloco todos os métodos e atributos que são genéricos
class Animal {  
    constructor(nome) {
        this.nome = nome                                // Todos os animais têm nome!
        this.genero = 'Animal'
    }

    comer() {                                           // Todos os animais comem!
        return console.log(`${this.nome} está comendo!`)
    }

    respirar() {
        return console.log(`${this.nome} está respirando...`)
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        // Note que o uso do extends faz com que o this.nome e this.genero sejam trazidos para cá automaticamente!
        // Porém, como o nome será uma variável, é preciso enviar ela para o Animal tratar da forma adequada (no caso, armazenando dentro de this.nome) usando o super
        super(nome)                                     // Aqui eu faço isso para passar os parametros do Cachorro para definir os atributos gerais e para quando quiser chamar os métodos de Aniamal
                                                        // Assim, ele irá passar o nome da instância (objeto) Cachorro para dentro do construtcor da classe Animal
                                                        // e usar os métodos de Animal com o nome do Cachorro, caso pedido
    }

    latir() {
        super.respirar()                                // Posso chamar métodos diretamente também!
        return console.log(`${this.nome} está latindo!`)
    }
}

class HomoSapiens extends Animal {
    constructor(nome, sobrenome) {
        super(nome)                                     // Aqui uso os métodos de Animal com o nome do HomoSapiens
        this.sobrenome = sobrenome                      // Só os humanos têm sobrenomes!
    }

    falar() {                                           // Só os humanos falam!
        return console.log(`${this.nome} ${this.sobrenome} está falando!`)
    }
}

const cachorro = new Cachorro('Doguinho')
const humano = new HomoSapiens('Ana', 'Silva')

// Verificando aqui que o nome muda, o gênero é igual e humano tem atributo especial
console.log(cachorro, humano)

// Métodos genéricos (pois são animais)
cachorro.comer()
humano.comer()

// Métodos específicos
cachorro.latir()
humano.falar()