// IIFE - Immediately Invoked Function Expression
// Função autoinvocada: Você declara sem nome (anonima) mas pode invocá-la na hora de declarar
// Usada quando você quer fugir do escopo global (princ. no browser), pois você pode chamá-la
// e executar coisas dentro dela e não no escopo global, onde mexer em var neste último não é recomendado

// Envolve com parenteses e chama imediatamente com ()
(function () {
    // Posso colocar aqui var, const, let, scripts, etc. que serão editáveis apenas aqui
    // e posso utilizar ao longo da aplicação
    console.log('Executei a IIFE!')
    console.log('Fugi do escopo mais abrangente!')  // Estou no escopo local da função
})()