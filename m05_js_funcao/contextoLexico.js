const valor = 'Global'

// Declarei a função dentro do contexto do arquivo 'contextoLexico.js', que é o module.exports
// Quando eu executar ela a partir da funcao executar como ela não tem uma variavel "valor" no escopo local
// então ela irá procurar no escopo global (o escopo do arquivo), já que ela não está dentro do escopo da função executar
function minhaFuncao() {
    console.log(valor)
}

function executar() {
    const valor = 'Local'
    minhaFuncao()
}

executar()