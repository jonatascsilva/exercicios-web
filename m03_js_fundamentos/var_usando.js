// Caso 1: Inserir a declaração de var dentro de vários blocos
// Assim, verificando onde o escopo (até onde a declaração dela vale no código) se abrange
{
    {
        {
            {
                var teste1 = 'Teste 1'
            }
        }
    }
}
console.log(teste1) // Outras linguagens (e inclusive let e const aqui no Js) essa variável não seria visível

// Caso 2: Inserir a declaração de var dentro de uma função
// Assim, verificando que a var só não é visível quando estiver dentro de uma função
function local2() {
    var teste2 = 'Teste 2'
}

local2()                // Chamando função só por desencargo
//console.log(teste2)     // Verificando que não é possível acessá-la