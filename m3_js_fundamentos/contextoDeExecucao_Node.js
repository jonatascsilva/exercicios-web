// É importante reconhecer onde o runtime do JS está sendo executado

// Quando se cria variáveis usando o this neste escopo, ela é criada dentro de
// module.exports
this.a = 123
console.log(this === module.exports)
console.log(module.exports.a)

// Quando se cria variável sem declarar tipo, na verdade ela é enviada para o
// global
b = 456     // Não faça ISSO! Não use o escopo global, você pode estar
            // sobrescrevendo uma variável do escopo global, sendo que o que
            // deveria ser feito é let ou var b
console.log(global.b)