// Exportando componentes com vários sub-itens

// -------------------------------------------------------------------------- //
// Modo 1 - Fragment
// -------------------------------------------------------------------------- //
/* import React, { Fragment } from 'react'

export default (props) =>
// Usa-se o React.Fragment para exportar diversos trechos de código em um mesmo
// componente sem a necessidade de envolvê-los em um uma div
<Fragment>
<h1>Bom dia, {props.nome} {props.sobrenome}!</h1>
<h2>Até breve!</h2>
</Fragment> */

import React from 'react'

export default (props) =>
// Ou ainda sua forma reduzida, sem a necessidade de importar o Fragment, e
// ainda removendo os nomes das tags
<>
  <h1>Bom dia, {props.nome} {props.sobrenome}!</h1>
  <h2>Até breve!</h2>
</>
// -------------------------------------------------------------------------- //


// -------------------------------------------------------------------------- //
// Modo 2 - Div
// -------------------------------------------------------------------------- //
/* import React from 'react'

export default (props) =>
// Se uma div já for necessária para seu componente, você pode utilizá-la para
// agrupar os sub-itens
<div>
<h1>Bom dia, {props.nome} {props.sobrenome}!</h1>
<h2>Até breve!</h2>
</div> */
// -------------------------------------------------------------------------- //


// -------------------------------------------------------------------------- //
// Modo 3 - Array
// -------------------------------------------------------------------------- //
/* import React from 'react'

export default (props) => [
  // Ou, pode usar o array, porém, é necessário usar a propriedade key para que
  // o React encontre e atualize os componentes de forma otimizada e correta
  <h1 key="h1">Bom dia, {props.nome} {props.sobrenome}!</h1>,
  <h2 key="h2">Até breve!</h2>
] */
// -------------------------------------------------------------------------- //