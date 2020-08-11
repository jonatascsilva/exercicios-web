// Operadores logicos NOT AND NAND OR NOR XOR XNOR
// Usa operações bit a bit quando coloca dois caracteres iguais, como &&

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2       // OR
    const comprarTv50 = trabalho1 && trabalho2          // AND
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)       // XOR => Como nao tem XOR para booleans, converto trabalho1
                                                        // e trabalho2 para boolean fazendo negacao dupla e uso
                                                        // operador bitwise "^" XOR
    const comprarTv32 = trabalho1 != trabalho2          // Ou simulo XOR usando operador != diferente
    const manterSaudavel = !comprarSorvete

    // Como não posso ter vários retornos, retorno um objeto
    // Lembrando que a criação de um objeto é feito de par (chave e valor), mas, no ES2015 (ES6)
    // basta atribuir o nome de uma variavel que ele a atribui como nome de chave e implicitamente "puxa" o seu valor
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))