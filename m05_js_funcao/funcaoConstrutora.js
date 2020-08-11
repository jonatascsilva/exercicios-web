// Função construtora
// É semelhante a classes em outras linguagens

// ------------------------------------------------------------------------------------------------------------------ //
// Criando função construtora
// ------------------------------------------------------------------------------------------------------------------ //

// Carro tem velocidade maxima e pedal de aceleracao, onde a cada aceleracao ele aumenta o delta até chegar na vrlocidade maxima
function Carro(velocidadeMaxima = 200, delta = 5) {     // Aqui defino os parametros que os objetos devem passar
    
    // Atributo privado (privado: uso de conts, let ou var)
    let velocidadeAtual = 0

    // Metodo publico (publico: uso do this)
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo publico
    // Aqui, como não quero que alterem velocidade atual mas quero que acessem, crio um metodo
    // publico para que obtenha somente o valor dela
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

// ------------------------------------------------------------------------------------------------------------------ //
// Criando objetos com função construtora
// ------------------------------------------------------------------------------------------------------------------ //
const uno = new Carro                   // Instanciando um novo objeto (com valores padroes, já que não defini nada)
uno.acelerar()                          // Chamei metodo acelerar (soma delta 5 com veocidadeAtual 0)
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)      // Instanciando um novo objeto com valores definidos por mim
ferrari.acelerar()                      // Chameii metodo acelerar (soma delta 20 com veocidadeAtual 0)
console.log(ferrari.getVelocidadeAtual())