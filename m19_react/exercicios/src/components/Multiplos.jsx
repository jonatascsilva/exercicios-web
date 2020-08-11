import React from 'react'

/* export */ const BoaTarde = props => <h1>Boa tarde, {props.nome}!</h1>
/* export */ const BoaNoite = props => <h2>Boa noite, {props.nome}!</h2>

// Exportando para ser usado o destructuring com o nome fixo
export { BoaTarde, BoaNoite }

// Ou, exportar ambos no default para poder renomear e usar a notação ponto
export default { BoaTarde, BoaNoite }