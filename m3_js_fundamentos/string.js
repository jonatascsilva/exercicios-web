let escola = "S3nai"

console.log(escola.charAt(3))           // Obtém o char da posição 3 (lembrando que começã no 0)
console.log(escola.charAt(6))           // JS não gera erro como em outras linguagens, só informa ""
console.log(escola.charCodeAt(3))       // Obtém valor decimal ASCII do char em questão
console.log(escola.indexOf('a'))        // Obtém posição do algarismo solicitado

console.log(escola.substring(3))        // Extrai char's da posição indicada até a última
console.log(escola.substring(0, 3))     // Extrai char's da posição inicial indicada até a posição final-1 indicada

// Pode atribuir função direto na string, que é o caso do "Curso do "
console.log('Curso do '.concat(escola).concat(' é demais!'))
console.log('Curso do ' + escola + ' é demais! x2')

// Substituir um char por outro
console.log(escola.replace('e', 'E'))

// Substituir todos os dígitos usando expressão regular (regex) /\d/
console.log(escola.replace(/\d/, 'A'))

// Substituir o primeiro algarismo usando expressão regular /\w/
console.log(escola.replace(/\w/, 'A'))

// Substituir todos os algarismos usando expressão regular com flag global /\w/g
console.log(escola.replace(/\w/g, 'A'))

// Converte uma String em array (usando separador que já deverá estar presente na String)
console.log('Jonatas,Joabe,Misael'.split(','))
