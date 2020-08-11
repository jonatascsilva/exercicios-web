// Aqui vamos ver se o this dentro de setInterval será apontado dentro de Pessoa
// No caso, como o this dentro de setInterval não aponta para o idade da Pessoa pois não estamos 
// invocando a função dentro dele explicitamente (ou seja, não estamos usando ()), logo,
// o setInterval quem vai executar a função e assim não saberá de onde é esse this
function Pessoa() {
    this.idade = 0

    const self = this               // RESOLVENDO 2 _ Parte 1: armazenar o this que quero dentro de uma const

    // SetInterval faz com que dispare a função a cada 1000ms
    setInterval(function() {        
        self.idade++                // RESOLVENDO 2 _ Parte 2: referenciar a const self, ao invés do this
        console.log(self.idade)     
    }/*.bind(this)*/, 1000)         // RESOLVENDO 1 _ RECOMENDADO: Usar bind na funcao e manter this.idade na linha 11
}

new Pessoa

// RESOLVENDO 3: Trocar a function pura pela função arrow (ver funcaoArrow2.js), que sempre vai atribuir o this ao seu escopo