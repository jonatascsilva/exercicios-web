// Controlar o parse de uma template string a partir de uma função

function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`  // Se não for number, não faz nada, se for, interpola com a máscara do Real
        resultado.push(partes[indice], valor)                   // Vou reconstruindo minha string pegando o pedaço da parte que é string e concateno com o valor interpolado
    })
    return resultado.join('')                                   // Trasnformo meu array em string e obtenho a minha string reconstruídda
}

const preco = 29.959
const precoParcela = 11
console.log()
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)