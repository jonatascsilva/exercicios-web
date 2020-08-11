// Caso 1: Verificando a diferença entre let e var
for (let i = 0; i < 10; i++) {
  console.log(i)
}

// console.log('i = ', i)       // Diferentemente do var, o let não é visível fora de seu escopo, logo gera erro

// Caso 2: Verificando conceitos
let funcs = []                  // Array vazio

for (let i = 0; i < 10; i++) {
  // Para cada iteração, será criado uma função para cada posição do array funcs
  funcs.push(function(){        
    console.log(i)
  })
}

// Como let tem escopo de bloco, no momento em que a função fo definida ela irá
// 'salvar' a memória do valor
funcs[2]()
// Como let tem escopo de bloco, no momento em que a função fo definida ela irá
// 'salvar' a memória do valor
funcs[8]()