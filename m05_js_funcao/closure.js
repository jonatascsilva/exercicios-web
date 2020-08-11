// Closure
// É o escopo criado quando uma função é declarada
// Esse escopo permite que a função acesse e manipule variáveis internas dela, e as externas à ela
// ( escopo global ( escopo anterior [ function(escopo local) ] ) )
// No exemplo acima, a function tem acesso as variaveis de todos os escopos anteriores (anterior e global)
// mas, onde (se houver variaveis iguais) a prioridade vai ser: local > anterior > ... > global

const x = 'Global'

function fora() {
    const x = 'Local'

    function dentro() {     // Qualquer função é um closure, pois tem noção do escopo anterior e escopo local
        return x
    }

    return dentro   // Retorna a função dentro
}

const minhaFuncao = fora()          // Atribui a função dentro para a const minhaFuncao
console.log(minhaFuncao())          // Executa a funcao dentro