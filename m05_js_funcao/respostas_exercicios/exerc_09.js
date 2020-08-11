/* 
 * Exercício 09:
 * 
 *   Construa uma função para um sistema de notas de uma instituição que possui a seguinte
 * política de classificação:
 *   - Todo aluno recebe uma nota de 0 a 100.
 *   - Alunos com nota abaixo de 40 são reprovados.
 * As notas possuem a seguinte regra de arredondamento:
 *   - Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para
 *   esse próximo múltiplo de 5.
 *   - Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na
 *   reprovação do aluno.
 * 
 * Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo
 * de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno.
 * No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
 */

const classificarAluno = (notaAluno = null) => {
    if ((typeof notaAluno === typeof 1) && (notaAluno >= 0) && (notaAluno <= 100)) {
        if (notaAluno < 38) {
            return `Aluno REPROVADO (nota ${notaAluno})`
        }

        algoritmoArredondamento = (Math.floor(notaAluno / 5) + 1) * 5
        if ((algoritmoArredondamento - notaAluno) < 3) {
            return `Aluno APROVADO com nota arrendondada ${algoritmoArredondamento} (nota original ${notaAluno})`
        } else {
            return `Aluno APROVADO com nota ${notaAluno}`
        }
    } else {
        return `Nota inválida (${notaAluno})`
    }
}

console.log(classificarAluno())
console.log(classificarAluno(" "))
console.log(classificarAluno(-1))
console.log(classificarAluno(101))

console.log(classificarAluno(0))
console.log(classificarAluno(29))
console.log(classificarAluno(37))
console.log(classificarAluno(38))
console.log(classificarAluno(74))
console.log(classificarAluno(77))
console.log(classificarAluno(81))