function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

// Quando se usa o operador new será criado um objeto e o seu prototype será a função construtora
const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// Simulando o new
function novo(funcaoConstrutora, ...params) {    // ... indica o operador Spread, é usado quando é esperado zero ou mais argumentos
    const obj = {}                                  // Cria novo objeto literal
    obj.__proto__ = funcaoConstrutora.prototype     // Associa o protótipo do obj ao atributo prototype da funcao
    funcaoConstrutora.apply(obj, params)            // Executa a funcao externa (usando apply), associando o this da funcao ao obj, e repassando os parametros recebidos 
                                                    // Logo, aqui executa a funcao no contexto do objet, exemplo => obj.nome = nome
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula1, aula2)