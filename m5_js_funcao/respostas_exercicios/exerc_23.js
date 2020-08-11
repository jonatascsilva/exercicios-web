/* 
 * Exercício 23:
 * 
 *   Escreva um algoritmo que leia o código de um aluno e suas três notas.
 * Calcule a média ponderada do aluno, considerando que o peso para a maior
 * nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas
 * três notas, a média calculada e uma mensagem "APROVADO" se a média for
 * maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a
 * operação até que o código lido seja negativo.
 */

const mediaPonderada = (nota1, peso1, nota2, peso2, nota3, peso3) => {
    return (((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)).toFixed(2)
}

const verificarSituacaoAluno = (codigoAluno, nota1, nota2, nota3) => {
    const maiorNota = Math.max(nota1, nota2, nota3)

    if (maiorNota == nota1) mediaAluno = mediaPonderada(maiorNota, 4, nota2, 3, nota3, 3)
    else if (maiorNota == nota2) mediaAluno = mediaPonderada(maiorNota, 4, nota1, 3, nota3, 3)
    else if (maiorNota == nota3) mediaAluno = mediaPonderada(maiorNota, 4, nota1, 3, nota2, 3)

    return console.log(`Código: ${codigoAluno} | Notas: ${nota1}, ${nota2}, ${nota3} | Média: ${mediaAluno} | Resultado: ${mediaAluno >= 5 ? 'APROVADO' : 'REPROVADO'}`)
}

verificarSituacaoAluno(123, 5.5, 10, 10)
verificarSituacaoAluno(123, 9.5, 10, 10)
verificarSituacaoAluno(123, 2.8, 6, 3.5)