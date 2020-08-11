// ForEach
// Percorre todos os elementos do array e chama uma callback
// (uma função que está aguardando ser chamada para um propósito)
// para tratar cada um desses elementos

const aprovados = ['Agatha', 'Samuel', 'Daniel', 'Raquel']

// Usando function expression como callback
aprovados.forEach(function (valor, indice, esteArray) {
    console.log(`${indice + 1}º) ${valor} deste array: ${esteArray}`)
})

// Usando arrow function como callback
aprovados.forEach(nome => console.log(nome))

// Armazenando arrow expression em constante e usar como callback
const exibirAprovados = aprovado => console.log('Olá', aprovado)
aprovados.forEach(exibirAprovados)