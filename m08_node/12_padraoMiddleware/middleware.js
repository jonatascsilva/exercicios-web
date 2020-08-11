// Padrão Middleware (chain of responsabilities)
// Exemplo de aplicação:
// - Temos uma função onde há três passos sequenciais A, B e C
// - Ao invés de chamarmos explicitamente o passoB, depois o passoC
//   podemos ter uma chamada genérica next() que irá passar para o próximo passo
// - Logo, assim podemos incluir mais passos intermediários, ou até mesmo alterar a orde m se quiser

// Crio as minhas funções (passos) que serão executados dentro da função principal
// Essas são as minhas middlewares!
const passo1 = (contexto, next) => {
    contexto.valor1 = 'passei pelo mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'passei pelo mid2'
    next()
}

const passo3 = (contexto, next) => {
    contexto.valor3 = 'passei pelo mid3'
}

// Crio minha função principal, passando o objeto a ser usado
// e depois todos os nomes das middlewares num operador spread (logo, estarão dentro de um array)
const exec = (contexto, ...middlewares) => {
    const execMiddleware = indice => {
        // Verifica se:
        // - O middleware existe
        // - Se o índice existe dentro do array, se nã é maior do que o array
        // - E, como dentro do array middlewares temos funções, executo a função do índice atual
        //   passando o contexto e qual vai ser a próxima função next (que será o próprio execMiddleware com índice + 1)
        middlewares &&
            indice < middlewares.length &&
            middlewares[indice](contexto, () => execMiddleware(indice + 1))
    }

    execMiddleware(0)   // Executo o primeiro indice do middleware
}

// Testando
const contexto = {}

exec(contexto, passo1, passo2, passo3)
console.log(contexto)