// Implementando meu próprio forEach!

Array.prototype.forEachNovo = function (callBack) {
    for (let i = 0; i < this.length; i++) {
        callBack(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Samuel', 'Daniel', 'Raquel']

aprovados.forEachNovo((nome, indice, esteArray) => console.log(nome, indice, esteArray))