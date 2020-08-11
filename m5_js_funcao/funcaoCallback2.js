// Objetivo: Pegar um array, extrair notas menores do que 7 e gerar um novo array

const notas = [7.5, 8.9, 9.9, 5.2, 10.0, 6.3, 3.2]

// Fazendo na raça (sem callback)
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Usando callback
const notasMenorQue7 = nota => nota < 7
notasBaixas2 = notas.filter(notasMenorQue7)     // > Filtra elementos com base em um critério
                                                // Aqui chamei uma função callback que verifica cada elemento do array e
                                                // compara com o critério
                                                // Se return for true, filter copia elemento do array, se false, não faz nada
console.log(notasBaixas2)