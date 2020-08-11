const valores = [7.7, 8.8, 9.9, 10.10]      // Forma literal
console.log(valores[0], valores[3])         // Acessando posições

console.log(typeof valores)

// Se tentar acessar um valor que não foi definido ainda
// ele retorna undefined (e não um espaço em branco ou erro)
// já que a variável valores está definida mas a posição não foi incluída
console.log(valores[5])

// Você pode adicionar posições no array também, e ele informa os vazios entre tb :)
valores[5] = 11.11
console.log(valores)

// Obter o comprimento (quantos elementos) da sua array
console.log(valores.length)

// Pode adicionar valores misturados (string, objeto, números..)
valores.push({ id: 3 }, 'Olá!')
console.log(valores)

// Remover o último elemento de um array
valores.pop()
console.log(valores)

// Apagar um elemento específico do array
delete valores[0]
console.log(valores)