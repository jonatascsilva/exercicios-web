// Promise
// É uma estrutura para chamadas/operação assíncronas, esperando (depois de ela ter sido concluída)
// uma resposta: se ela foi resolvida (atendida/cumprida) ou rejeitada

// 1. Criando uma função para falar uma frase depois de x segundos (simulando uma operação assíncrona)
// - Instancio minha Promise (objeto) colocando uma callback
// - Na callback, coloco dois parametros que respectivamente são:
//   > Resolve: É o parametro que será uma outra callback que irá retornar um determinado conteúdo caso minha Promise seja ATENDIDA
//   > Reject: Mesmo que a do resolve, mas caso ela seja RECUSADA
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {   
        setTimeout(() => {
            resolve(frase)      // Isso vai ser tratado pelo then
            // reject(frase)
        }, segundos * 1000)     // Converto ms para segundos
    })
}

// 2. Para tratar a resposta positiva de uma Promise, uso o método then
// - O then recebe como mesmo parametro o (parametro) enviado pela callback resolve
// - Você pode concatenar outros then, a return do primeiro then vai ser enviado como param para o seguinte, e assim por diante...
falarDepoisDe(3, 'Que legal!').then(paramRecebido => console.log(paramRecebido))
falarDepoisDe(5, '1 + 1 é').then(frase => frase.concat(' 2')).then(frase => console.log(frase))

// 3. Para tratar a resposta negativa de uma Promise, uso o catch
// - O catch recebe como mesmo parametro o (parametro) enviado pela callback reject

// Para testar, comente a linha 13 e habilite a linha 14
falarDepoisDe(5, 'Simulando erro').catch(erro => console.log(erro))