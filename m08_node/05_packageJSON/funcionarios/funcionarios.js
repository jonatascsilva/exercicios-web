const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')      // Axios faz requisicoes para obter infos. de http remotas

// Desafio
// Obter a mulher chinesa que tenha o menor salário

// Métodos para filter
const getGeneroFeminino = el => el.genero === 'F'
const getPaisChina = el => el.pais === 'China'
const getMenorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data      // Obtem arquivo JSON da URL

    const mulherChinesaComMenorSalario = funcionarios
        .filter(getGeneroFeminino)
        .filter(getPaisChina)
        .reduce(getMenorSalario)

    console.log(mulherChinesaComMenorSalario)
})