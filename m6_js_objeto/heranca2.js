// Cadeia de protótipos (prototype chain)
// Criar "heranças e subheranças": avo > pai > filho

// Exemplo simples
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attrZ: '0' }
const fil = { __proto__: pai, attr3: 'C', attrZ: '1' }

console.log(fil.attr0)      // Não acho pois ninguém tem (nem o objeto Object.prototype)
console.log(fil.attr1)      // Pega atributo do avo
console.log(fil.attr2)      // Pega atributo do pai
console.log(fil.attr3)      // Pega atributo dele mesmo
console.log(fil.attrZ)      // Pega o atributo do escopo menor (dentro dele < pai < avo)
                                // Chama-se sombreamento /shadowing/ (o attrZ do fil sombreia os outros
                                // atributos de escopos maiores, ou seja tem mais preferencia que os outros)

// Exemplo mais complexo
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    getVelocidade() {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324                                             // Aqui vai acontecer shadowing, pois se pedir
                                                            // velMax ele trará o de ferrari e não o de carro
}

const volvo = {
    modelo: 'F40',
    getVelocidade() {
        return `${this.modelo}: ${super.getVelocidade()}`   // Assim como this acessa var dentro do escopo
                                                            // local, super busca do seu prototype
    }
}

Object.setPrototypeOf(ferrari, carro)                       // Definindo o prototype de ferrari === (ferrari.__proto__: carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari, volvo)                                 // Note que aqui só é exibido os atributos locais dos objetos,
                                                            // mesmo ele herdando métodos e attr de seus prototypes

ferrari.acelerar(100)
volvo.acelerar(100)
console.log(ferrari.getVelocidade())
console.log(volvo.getVelocidade())