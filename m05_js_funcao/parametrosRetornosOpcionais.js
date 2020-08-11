// Exemplo de que uma função pode retornar um valor desejado e o seu default (undefined, caso não tenha return)
// Aqui só no else terá return, no if não tem nenhum return :)
function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area())             // undefined * undefined = NaN
console.log(area(5))            // number * undefined = NaN
console.log(area(5, 4, 6, 7))   // Não dá erro os param adicionais, mas só usa os dois primeiros
console.log(area(5, 4))
console.log(area(5, 5))         // Aqui ele dá mais de 20, retornando a mensagem e dando undefined