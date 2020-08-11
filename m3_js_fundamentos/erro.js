// Tratamento de erro

function imprimirNomeCapsLock(obj) {    // Função irá receber um objeto
  try {           // É um bloco que dentro dele vai o seu código que tem potencial para dar erro
    // Vou transformar o atributo name do objeto recebido para CAPS LOCK e adiciono !!
    console.log(obj.name.toUpperCase() + '!!')
  } catch (e) {   // Se houver o erro, ele cai dentro de catch, e você pode tratar o erro de alguma forma
    // No caso chamei a função que criei e enviei o erro que esta na variável "e"
    tratarErroELancar(e)
  } finally {     // E pode ser usado o finally, se quiser, ele é executado sempre que der erro ou não
    console.log('Função imprimirNomeCapsLock terminada!')
  }
}

function tratarErroELancar(erroRecebido) {
  // Com o throw você pode mostrar ao usuário o que desejar
  throw new Error('Deu problema..') // Nesse caso reimprimindo o erro mas com
                                    // o titulo de identificação "Deu problema.."
  // throw 1010                 // Posso simplesmente lançar um número
  // throw true                 // Posso simplesmente lançar um número
  // throw "Mensagem"           // Posso simplesmente lançar um número
  /* throw {      // Posso criar um objeto contendo as propriedades do erro de forma mais legível
    nome: erroRecebido.name,    // Nome do erro
    msg: erroRecebido.message,  // O que aconteceu
    date: new Date              // Data do erro
  } */
}

// Simulando objeto com atributo diferente do que o requisitado na função, veja
// a seguir: (nome != name)
const obj = { nome: 'Alex' }
imprimirNomeCapsLock(obj)