// ---------------------------------------------------------------------------------------------- //
// This em function
// ---------------------------------------------------------------------------------------------- //
// Devems ter cuidado com o this pois igual neste caso abaixo, o this seria no escopo global :/
let comparaComThis = function (parametro) {
    console.log(this === parametro)     // Aqui o this vai ser o escopo global, não o escopo onde a função comparaComThis foi definida (module.exports)
}

comparaComThis(global)              // Retorna true
comparaComThis(module.exports)      // Retorna false

// Usando o bind
const obj = {}
comparaComThis = comparaComThis.bind(obj)   // Agora estou vinculando essa funcao com o objeto
comparaComThis(global)  // Retorna false
comparaComThis(obj)     // Retorna true

// ---------------------------------------------------------------------------------------------- //
// This em arrow function
// ---------------------------------------------------------------------------------------------- //
let comparaComThisArrow = (parametro) => {
    console.log(this === parametro)     // Aqui o this não vai ser o global, mas o módulo (module.exports) onde a função comparaComThisArrow foi definida
}

comparaComThisArrow(global)               // Retorna false
comparaComThisArrow(module.exports)       // Retorna true

// Usando o bind
// Concluímos que a ref do this não muda NUNCA!
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(module.exports)
comparaComThisArrow(obj)