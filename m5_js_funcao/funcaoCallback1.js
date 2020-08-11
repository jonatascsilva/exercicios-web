// Função callback
// A ideia é passar um função para outra, mas ela só será disparada quando
// um determinado evento acontecer (é o padrão de projeto Observer)

const fabricantes = ['Mercedes', 'Audi', 'BMW']

// Função callback criada, será chamada em determinado momento
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// Definindo o evento: Executar callback cada vez que quiser demonstrar elementos de um array em um forEach
    // Dentro de array tem um método chamado forEach
    // Ele faz o seguinte: pra cada elemento dentro do array,
    // ele retorna 3 itens no seguinte formato: ConteúdoElemento[String], NumeroElemento[number], TodosOsArrays
fabricantes.forEach((a, b, c) => console.log(`${a} e ${b} e ${c}`))     // Demonstrando o forEach
fabricantes.forEach(imprimir)                                           // Usando a função callback imprimir