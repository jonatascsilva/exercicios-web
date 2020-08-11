// Recebe de 0 a n elementos e os transforma em um único array chamado nomes
module.exports = function(...nomes) {
    return nomes.map(nome => `Até mais, ${nome}!`)
}