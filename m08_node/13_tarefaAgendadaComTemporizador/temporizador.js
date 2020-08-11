// Node permite criar tarefas agendadas com temporizador

// Importando biblioteca externa
const schedule = require('node-schedule')

// -------------------------------------------------------------------------------------------------- //
// 1. Criando tarefa temporizada com scheduleJob sem regras predefinidas
// Tarefa vai executar: | 5 em 5 segundos | dentro das 16h (16h00m00 até 16h59m59) | qualquer dia | qualquer mês | às terças-feiras |
const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// Cancelando o temporizador usando função padrão do Node depois de 20s de execução
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)
// -------------------------------------------------------------------------------------------------- //

// -------------------------------------------------------------------------------------------------- //
// 2. Criando tarefa temporizada usando regras pedrefinidas
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]    // Segunda à sexta
regra.hour = 16                                 // Dentro de 16h00m00 ~ 16h59m59
regra.second = 30                               // Quando for 30s de cada minuto

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})