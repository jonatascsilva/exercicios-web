// Gulp
// - Serve para automatizar o workflow de um build para produção da sua
//   aplicação
// - Com ele podemos minificar arquivos, compactar imagens, converter typescript
//   para js, entre várias outras coisas...

// 1. Importo biblioteca do gulp e as funções desejadas (caso não queira fica
//    digitando gulp.funcaoAleatoria, etc...)
const gulp = require('gulp')

// 1.1. No caso, a função series do gulp executa as tarefas de modo serial,
//      sequencialmente, logo, só irá executar uma tarefa quando a anterior
//      terminar
// 1.2. Já função parallel do gulp executa as tarefas paralelamente (inicia elas
//      juntas, podem terminar em momentos diferentes), logo, a ordem não irá
//      importar, serão executadas simultaneamente
const { series, parallel } = require('gulp')  // Modo 1 para importar função diretamente e colocar direto numa const: Destructuring
// const series = gulp.series                  // Modo 2 para importar função diretamente e colocar direto numa const: Notação ponto

// 2. Crio minhas tarefas (que são funções) a serem automatizadas
function antes1(callback) {        // Modo 1 de informar fim da tarefa: É necessário inserir uma callback para informar o gulp que a tarefa foi finalizada
    console.log('Tarefa antes!')
    return callback()             // Informa ao gulp que tarefa foi finalizada (não é preciso params, o gulp se encarrega disso)    
}

function antes2() {        // Modo 2 de informar fim da tarefa: Não passo callback, mas retorno todo o código
    return console.log('Tarefa antes!') // Informa ao gulp que tarefa foi finalizada
}

function copiar(cb) { 
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt', 'pastaA/teste/registros.txt'])    // Modo 1: Defino por array os arquivos a serem trabalhados
    gulp.src('pastaA/**/*.txt')         // Crio expressão para em qualquer pasta e subpasta que contenha arquivo .txt, seja aplicado o pipe
        // .pipe()  // Defino função callback para ser executada e transformar os arquivos do src
        // .pipe()  // Posso ter quantas pipes quiser, fazendo as transformações necessárias (exemplo, convertendo imagens, minificando arquivos, etc.)
        .pipe(gulp.dest('pastaB'))     // Apenas copio os arquivos para uma nova pasta, que será automaticamente criada pelo gulp
    return cb()
}

function depois(cb) {
    console.log('Tarefa depois!')
    return cb()
}

function fim(cb) {
    console.log('Tarefa final!')
    return cb()
}

// 3. Exporto as minhas tarefas dentro da tarefa master do gulp (default) É
//    necessário fazer isso pois a "porta de entrada" do workflow principal é
//    feito no default, como o nome já diz, por padrão Aqui também defino qual
//    será a ordem das tarefas (série, paralelo), devo ver a necessidade e
//    aplicar
module.exports.default = series(    // Em serie
    copiar,
    parallel(antes1, antes2, depois), // Em paralelo
    fim
)