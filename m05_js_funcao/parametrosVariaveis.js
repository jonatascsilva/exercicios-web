function soma() {   // Apesar de não estar pedindo parâmetros, a função pode receber parâmetros
    let soma = 0
    
    for(let i in arguments) {      // Usand a palavra reservada arguments (que são os parametros da funcao) posso fazer um fr in e navegar por ele
        soma += arguments[i]        // Logo, eu faço a soma de todos os argumentos recebidos implicitamente
    }

    return soma
}

console.log(soma())                 // Aqui retorna 0 pois será somado nenhum parametro
console.log(soma(2))
console.log(soma(2, 3))
console.log(soma(2, 3, 5))
console.log(soma(2, 3, 5, 100.1))
console.log(soma(2, 3, "Teste"))    // Aqui como não tem filtro, ele concatena