// Usando async await (promise_2.js)
function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setTimeout(() => resolve(), tempo)
  })
}

async function gerarValor(valor) {
  return new Promise(resolve => {
    setTimeout(() => resolve(1), 1000)
  })
}

async function executar() {
  const valor = await gerarValor()

  await esperarPor(2000)
  console.log(`Executando async/await ${valor}...`)
  
  await esperarPor(2000)
  console.log(`Executando async/await ${valor + 1}...`)
  
  await esperarPor(2000)
  console.log(`Executando async/await ${valor + 2}...`)

  return 'Execução finalizada'
}

// Deno suporta await fora de async
// const valor = await executar()
// console.log(valor)

// Com Node, é preciso tratar com then
// executar()
//     .then(console.log)

// Ou integrar dentro de uma async novamente
async function executarDeVerdade() {
  // Observe que mesmo o executar não retornando Promise, é importante usar o
  // await para ele tratar corretamente (se não você recebe um objeto Promise)
  const valor = await executar()
  console.log(valor)
}

executarDeVerdade()