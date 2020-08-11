(function ($) {
  $.fn.temporizador = function (opcoes) {
    // Inserindo valores padrões pelo extend, caso não receba algum parâmetro
    const opcoesFinais = $.extend({
      mensagem: 'Em breve!',
      horario: '23:59:59'
    }, opcoes)

    const horaDezena = $('<span class="digito">').html('0')
    const horaUnidade = $('<span class="digito">').html('0')
    const minutoDezena = $('<span class="digito">').html('0')
    const minutoUnidade = $('<span class="digito">').html('0')
    const segundoDezena = $('<span class="digito">').html('0')
    const segundoUnidade = $('<span class="digito">').html('0')

    const separadorHora = $('<span class="separador">').html(':')
    const separadorMinuto = $('<span class="separador">').html(':')
    const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

    $(this).addClass('temporizador')
    $(this).append(
      horaDezena, horaUnidade, separadorHora,
      minutoDezena, minutoUnidade, separadorMinuto,
      segundoDezena, segundoUnidade, mensagem
    )

    // Uso Regex para separar os intervalos desejados (ao invés de fazer split,
    // etc.)
    const regexHorario = new RegExp(/(\d\d):(\d\d):(\d\d)/)
    // Recebo array do regex
    const horarioAlvo = regexHorario.exec(opcoesFinais.horario)

    // Aplico o horário recebido para começar o contador
    let temporizador = setInterval(() => {
      // Salvo a hora atual
      const agora = new Date()

      // Defino o horário alvo com base no valor recebido e interpretado pelo
      // regex
      const alvo = new Date()
      alvo.setHours(horarioAlvo[1])
      alvo.setMinutes(horarioAlvo[2])
      alvo.setSeconds(horarioAlvo[3])

      // Obtenho a diferença da hora atual com o horário alvo
      const diferençaEmMs = alvo.getTime() - agora.getTime()
      if (diferençaEmMs >= 0) { // Se o horário (já) não passou
        // Obtendo a diferença do horário atual com o alvo (desconsiderando o
        // UTC) e aplico regex
        const diferenca = regexHorario.exec(new Date(diferençaEmMs).toISOString())
        
        horaDezena.html(diferenca[1][0])
        horaUnidade.html(diferenca[1][1])
        minutoDezena.html(diferenca[2][0])
        minutoUnidade.html(diferenca[2][1])
        segundoDezena.html(diferenca[3][0])
        segundoUnidade.html(diferenca[3][1])
      } else {
        clearInterval(temporizador)
      }
    })

    return this
  }
})(jQuery)