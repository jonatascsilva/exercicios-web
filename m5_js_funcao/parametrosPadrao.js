// Parametros padrão
// É quando você define um valor default para ser usado caso o parametro não seja recebido/passado

// ------------------------------------------------------------------------------------------------ //
// Estratégia 1
// ------------------------------------------------------------------------------------------------ //
function soma1(a, b, c) {
    a = a || 1          // Desta forma, se receber valor falso, como 0, null, undefined ele usa o valor 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// ------------------------------------------------------------------------------------------------ //
// Estratégias 2, 3 e 4 
// ------------------------------------------------------------------------------------------------ //
function soma2(a, b, c) {
    a = a !== undefined ? a : 1     // Estratégia 1: Se a for diferente de undefined usa a, se não for usa 1
    b = 1 in arguments ? b : 1      // Estratégia 2: Verifica se foi passado o arguments[1] (que é o b), se sim usa b, se não usa 1
    c = isNaN(c) ? 1 : c            // (Mais segura nesse caso pois evita string, etc.) >> Estratégia 3: Se valor de c for NaN usa 1, se não usa o valor de c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// ------------------------------------------------------------------------------------------------ //
// Estratégia 5 (ES 2015)
// ------------------------------------------------------------------------------------------------ //
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))