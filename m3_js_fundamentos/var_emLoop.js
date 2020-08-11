// Caso 1: Verificando a diferença entre let e var
for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i = ', i)      // Diferentemente do let, o var é visível fora de seu escopo, logo pode ser mostrado aqui

// Caso 2: Verificando conceitos
var funcs = []      // Array vazio

for (var i = 0; i < 20; i++) {
    funcs.push(function() {     // Para cada iteração, será criado uma função para cada posição do array funcs
        console.log(i)
    })
}

funcs[2]()  // Como var tem escopo global, o valor i a ser aplicado será o 20
funcs[8]()  // Como var tem escopo global, o valor i a ser aplicado será o 20