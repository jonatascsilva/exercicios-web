// Estrutura Map
// - É um mapa simples de par chave/valor, assim como objeto
// - Mas, diferentemente do objeto, a chave pode ser mais flexível (sendo um objeto, array, número, string, etc.)

// 1. Criando um Map e atribuindo elementos dinamicamente
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

// console.log(tecnologias.react)                   // Observe que no map não consigo chamar com notação ponto
console.log(tecnologias)
console.log(tecnologias.get('react').framework)

// 2. Criando um Map e atribuindo elementos diretamente
const objetoVazio = { }
const funcao = function () { return 'Oi' }

const chavesVariadas = new Map([
    [funcao, 'Função'],    // A chave é uma função!!
    [objetoVazio, 'Objeto'],
    [123, 'Número'],
])

console.log(chavesVariadas)
console.log(chavesVariadas.get(objetoVazio))    // Obtenho o atributo do objeto vazio { }
console.log(chavesVariadas.get(funcao))         // Obtenho o atributo de função

// Observe que posso fazer um forEach no map
chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

// Verifico se uma chave existe usando o has
console.log(chavesVariadas.has(123))            // true

// Excluindo atributos
console.log(chavesVariadas.delete(123))         // true, pois conseguiu excluir o atributo
console.log(chavesVariadas)

// Verificando qual o tamanho do map
console.log(chavesVariadas.size)