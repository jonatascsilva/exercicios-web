// Callback Hell: aninhamento gigante de callbacks :/
// setTimeout(function() {
//   console.log('Executando callback...')
  
//   setTimeout(function() {
//     console.log('Executando callback...')

//     setTimeout(function() {
//       console.log('Executando callback...')
//     }, 2000)
//   }, 2000)
// }, 2000)


// Usando promises
function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(console.log('Executando promise...'))
    }, tempo)
  })
}

esperarPor(2000)
    .then(() => esperarPor(2000))
    .then(() => esperarPor(2000))