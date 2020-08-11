// Classe (por baixo dos panos é uma função construtora)

class LancamentoFinanceiro {
    constructor(nome = 'Genérico', valor = 0) {  // É uma função que será executada no momento que essa classe for instancianda
        this.nome = nome                         // Adiciono ao objeto instanciado o parametro recebido
        this.valor = valor
    }      
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentosNovos) {    // Aqui o spread vai receber zero ou mais parametros e concatenar em um array
        // Para cada atributo (chave/valor) do objeto recebido como lancamentosNovos
        // dá um push no array lancamentos criado nesta classe
        lancamentosNovos.forEach(elemento => this.lancamentos.push(elemento))
    }

    sumario() {
        let valorConsolidado = 0
        // Para cada elemento do array lancamentos (que serão objetos), pega o atributo valor destes
        // objetos e faz atribuição aditiva com valorConsolidado
        this.lancamentos.forEach(elemento => {
            valorConsolidado += elemento.valor
        })
        return 'R$ ' + valorConsolidado
    }
}

const salario = new LancamentoFinanceiro('Salario', 45000)
const contaDeLuz = new LancamentoFinanceiro('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario())