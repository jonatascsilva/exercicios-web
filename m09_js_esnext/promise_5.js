function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      simulandoerro.log('temp')
      if (Math.random() < chanceErro) {
        reject('Ocorreu um erro')
      } else {
        resolve(valor)
      }
    } catch (error) {
      reject(error)
    }
  })
}

funcionarOuNao('Testando...', 1)
    .then(v => `Valor: ${v}`)
    .then(
      v => conse.log(v),
      // Tratando erro durante a execução (não comum)
      // err => console.log(`Erro específico: ${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(() => console.log('Fim!'))