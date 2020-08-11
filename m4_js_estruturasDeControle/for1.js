// Usa FOR (apropriado) para situações que tenha uma quantidade determinda de iterações

// Comparando while com for (nenhuma diferença, claro, mas o ideal é usar for)
let contador = 1

while(contador <= 10) {
    console.log('Contador = ', contador)
    contador++
}

console.log()

for(let i = 1; i <= 10; i++) {  // Use sempre o let para que ela use a variavel dentro deste escopo e não fique pública
    console.log('Contador = ', i)
}