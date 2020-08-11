// Break: sai do bloco que está e funciona no switch, while, for
// Continue: interrompe somente a iteração atual e funciona no while, for
// Label: nomeio uma posição sendo possível pular para ela de qualquer ponto
// Mas não é muio interessante usa-los, ficar desviando fluxos causa confusão na leitura do código e sua execução

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Uso do BREAK
for(let i in numeros) {
    if(i == 5) {
        break   // Aqui ele não irá interagir com o if mas com o bloco mais proximo que ele interage, nesse caso, sai do for
    }
    console.log(`${i} = ${numeros[i]}`)
}

console.log()

// Uso do CONTINUE
for(let i in numeros) {
    if(i == 5) {
        continue   // Aqui ele interrompe a iteração atual e pula pra próxima
    }
    console.log(`${i} = ${numeros[i]}`)
}

// Usando labels, que não são recomendados também
externo:    // Quando ele vem para cá, ele não executa o for novamente!
for(let i in numeros) {
    for(let j in numeros) {
        if(i == 2 && j ==3) {
            break externo   // Aqui saio dos dois for's, se não usasse label ele ia sair só do for mais interno
        }
        console.log(`Estou em ${i} ${j}`)
    }
}