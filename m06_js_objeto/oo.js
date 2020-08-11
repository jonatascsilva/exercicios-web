// Somente notas! Não é executável.

// ----------------------------------------------------------------------------- //
// Paradigma Procedural
// ----------------------------------------------------------------------------- //
// - Foco em procedimentos (funções) que irão manipular dados
// - Normalmente usa valores globais, que são compartilhados em toda a aplicação,
// onde isso dificulta saber quem está mexendo no quê e dar problema/bugs

// Exemplo: aqui tenho procedimento para maniuplar dados e devolver um valor
processamento(valor1, valor2, valor3)


// ----------------------------------------------------------------------------- //
// Paradigma de OO - Orientação à Objetos
// ----------------------------------------------------------------------------- //
// - Foco em dados (objetos), e dentro deles você terá métodos (funções) para
// manipulá-los internamente
// - Baseado para abstarir o mundo real, onde temos objetos (cada qual tendo suas
// características/dados) e podemos fazer ações neles, e todos esses objetos
// interagem/relacionam uns com os outros, bem como herança (pai -> filho)
// - Cria um melhor encapsulamento (objeto encapsula seus dados e métodos),
// desacoplando seu projeto

// Exemplo: aqui tenho objeto com valores e funções (métodos) internas
objeto = {
  valor1,
  valor2,
  valor3,
  processamento() {
    // ...
  }
}

objeto.processamento()

// ----------------------------------------------------------------------------- //
// Pilares da OO
// ----------------------------------------------------------------------------- //
    
    /* 1. Abstração: Pegar um objeto do mundo e traduzir/trazer de forma simplificada 
    (somente as partes importantes dele) para seu sistema */

            /* Exemplo: Carro tem dados (peso, altura, velocidade máxima...) e métodos (acelerar,
            freiar...), mas por exemplo, se fosse criar um objeto carro no DETRAN não preciso
            disso tudo, preciso de placa, cor do veículo, dono do carro, etc. */

    // -------------------------------------------------------------------------------------------------- //

    /* 2. Encapsulamento: Mostrar publicamente somente os dados/métodos que são necessários
    ser mostrados em sua interface para o utilizar (maior abstração = menor interação com esse objeto)
    Assim, posso fazer alterações internas no objeto sem que seja necessário mexer em sua interface
    diminuindo o acoplamento (dependências) na sua aplicação, (como trocar um servidor SQL internamente
    no objeto mas os dados de saída permanecem o mesmo e todas as outras funções e objetos que dependem
    dele não precisem ser alteradas) */
            
            /* Exemplo: É importante saber no carro sua velocidade máxima, onde fica o pedal,
            quantas marchas possui, etc., mas saber como funciona o motor, onde está a gasolina,
            etc. são coisas que posso esconder (encapsular) e não deixar visível em sua interface */

    // -------------------------------------------------------------------------------------------------- //
    
    /* NOTA. Antes de entrar em herança, é importante saber que é possível reusar código por Composição
    usando assim a RELAÇÃO TEM UM (Notebook tem Tela, Tela tem Pixels...), como por exemplo, um objeto
    carro é composto por objetos menores como o objeto motor, que por sua vez usa outros objetos menores
    É preferível sempre usar a composição ao invés de herança! */

    // -------------------------------------------------------------------------------------------------- //
    
    /* 3. Herança (prototype): Reusa código com RELAÇÃO É UM (Ferrari é um Carro, Arara é uma Ave...),
    onde temos um pai e seus filhos, que por sua vez podem ser pais de outros filhos... E os filhos vão
    reutilizar (herdar) alguns (ou todos) atributos e/ou comportamentos (métodos) dos seus pais. */
        
            /* Exemplo: Um pai tem olhos azuis e a mãe tem cabelo loiro, e o filho herda estes atributos de seus
            pais (o filho não consegue modificar isso, pois herdou) */

    // -------------------------------------------------------------------------------------------------- //

    /* 4. Polimorfismo (significa múltiplas formas): À partir de um objeto filho você sobrescrever
    atributos e/ou métodos do seu objeto pai, e ele (filho) poder ter vários pais */
        
            /* Exemplo: Ser humano pode ser: Criança, Adulto, Adolescente, Idoso, etc, mas todos são
            seres humanos. Pessoa pode ser Física ou Jurídica. Física ou Jurídica tem suas peculiaridades,
            porém são pessoas. */