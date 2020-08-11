// Usando async await (promise_3.js)
function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max]

  return new Promise((resolve, reject) => {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min

    if (numerosProibidos.includes(aleatorio)) {
      reject('Número repetido!')
    } else {
      resolve(aleatorio)
    }
  })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
  try {
    const numeros = []

    // Criando array vazio com número de posições predefinidas
    for (let _ of Array(qtdNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }

    return numeros
  } catch (error) {
    if (tentativas > 10) {
      throw `Número de tentativas (${tentativas - 1}) excedida: ${error}`
    } else {
      return gerarMegaSena(qtdNumeros, tentativas + 1)
    }
  }
}

gerarMegaSena(100)
    .then(console.log)
    .catch(console.log)