// Funcao só imprime no console se nota for maior ou igual a 7
function somenteNotaBoa(nota) {
    if(nota >= 7) {
        console.log(`Parabéns meu amigo, foi aprovado com ${nota}!`)
    }
}

somenteNotaBoa(8.1)
somenteNotaBoa(6.1)

function seForVerdadeEuAviso(valor) {
    if(valor) {    // Se o "valor" for um valor que o JS identifique que é true (ver boolenos do modulo 3), executa if
        console.log('É true: ' + valor)
    }
}

// True
seForVerdadeEuAviso(1)
seForVerdadeEuAviso(-1)
seForVerdadeEuAviso('A')
seForVerdadeEuAviso(' ')
seForVerdadeEuAviso([])
seForVerdadeEuAviso({})

// Falsos
seForVerdadeEuAviso()
seForVerdadeEuAviso(0)
seForVerdadeEuAviso(null)
seForVerdadeEuAviso(undefined)
seForVerdadeEuAviso(NaN)