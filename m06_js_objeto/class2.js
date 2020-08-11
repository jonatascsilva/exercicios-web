// Heranças em classes (exemplos parecidos com heranca2.js)

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }

    falar() {
        return `${this.}`
    }
}

class Pai extends Avo {         // Defino o protótipo de pai usando a palavra reservada extends
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)        // Aqui 'chamo' o constructor do Avo passando como parametro o sobrenome e executo aqui
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(sobrenome) {
        super(sobrenome)
    }
}

const filho = new Filho('Silva')
console.log(filho)