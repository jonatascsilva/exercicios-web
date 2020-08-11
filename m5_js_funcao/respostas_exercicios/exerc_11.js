/* 
 * Exercício 11:
 * 
 *   As regras para o cálculo dos anos bissextos são as seguintes:
 *   - De 4 em 4 anos é ano bissexto;
 *   - De 100 em 100 anos não é ano bissexto; 
 *   - De 400 em 400 anos é ano bissexto; 
 *   - Prevalecem as últimas regras sobre as primeiras.
 *   Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto,
 * imprimindo no console a mensagem e retornando true ou false.
 */

const verificaSeAnoEBissexto = (ano) => {
    if ((ano % 400) == 0) {
        return true
    } else if ((ano % 100) == 0) {
        return false
    } else if ((ano % 4) == 0) {
        return true
    } else {
        return false
    }
}

/* Alguns anos bissextos para teste:
1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932,
1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964,
1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996,
2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028,
2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060,
2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092 */

console.log(1904, ':', verificaSeAnoEBissexto(1904))
console.log(1980, ':', verificaSeAnoEBissexto(1980))
console.log(1972, ':', verificaSeAnoEBissexto(1972))
console.log(2000, ':', verificaSeAnoEBissexto(2000))
console.log(2020, ':', verificaSeAnoEBissexto(2020))

console.log(1500, ':', verificaSeAnoEBissexto(1500))
console.log(1900, ':', verificaSeAnoEBissexto(1900))
console.log(2017, ':', verificaSeAnoEBissexto(2017))
console.log(2019, ':', verificaSeAnoEBissexto(2019))
