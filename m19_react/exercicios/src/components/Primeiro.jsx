// É preciso importar o React para usar o JSX
import React from 'react'

// Componente funcional (gerado por função)
// - Se quiser exportar um componente anônimo (que pode inclusive definir
//   qualquer nome quando importado no index.js), é usado a palavra reservada
//   default
// - Caso queira definir um nome fixo para o componente, basta colocar como uma
//   função com nome, exemplo: "const NomeComponente" (mais exemplos no
//   Multiplos.jsx)
export default () => <h1>Primeiro</h1>