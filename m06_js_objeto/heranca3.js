// Usando Object.create e forin para obter todos os atributos

// Criando objeto pai
const pai = { nome: 'Pedro', corCabelo: 'preto' }

// Criando objeto filho 1
const filha1 = Object.create(pai)           // Passo o prototype
filha1.nome = 'Ana'                         // Crio attr dinamicamente
console.log(filha1.nome, filha1.corCabelo)

// Criando objeto filho 2
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }       // Valor / Escrita / Visível
})
console.log(filha2.nome, filha2.corCabelo)

filha2.nome = 'Carla'                       // Tentando mudar um attr com escrita desabilitada
console.log(filha2.nome)

// Verificando o que será exibido
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))
console.log(filha1)
console.log(filha2)

// Buscando atributos do objeto e identificando os locais e os de herança
for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}