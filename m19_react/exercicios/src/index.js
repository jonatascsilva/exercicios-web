import React from 'react'
import ReactDOM from 'react-dom'


// 1. Isso não é HTML! É JSX, uma extensão de sintaxe de JavaScript, que será
// transpilada para JavaScript e então inserido como HTML na sua aplicação
/* ReactDOM.render(<h1>React</h1>, document.getElementById('root')) */


// 2. Criando meu primeiro componente
// - É importante ter o nome com a primeira letra capitalizada, pois é o padrão
//   de nomeação de componentes do React (porém, o nome do arquivo não interfere)
/* import Primeiro from './components/Primeiro'
ReactDOM.render(<Primeiro />, document.getElementById('root')) */


// 3. Criando componente que aceita propriedades/atributos
/* import BomDia from './components/BomDia'
ReactDOM.render(<BomDia nome="José" sobrenome="Silva"/>,
document.getElementById('root')) */


// 4. (não usual) Criando múltiplos componentes
/* import PersonalizadoComDefault, { BoaTarde, BoaNoite } from './components/Multiplos'
ReactDOM.render(
  <>
    <BoaTarde nome="José" />
    <BoaNoite nome="João" />
    <PersonalizadoComDefault.BoaTarde nome="José" />
    <PersonalizadoComDefault.BoaNoite nome="João" />
  </>,
  document.getElementById('root')
) */


// 5. Criando componentes de classe
/* import { Saudacao, SaudacaoNova } from './components/Saudacao'
ReactDOM.render(
  <div>
  <Saudacao tipoSaudacao="Bom dia" nomeUsuario="João" />
  <SaudacaoNova tipoSaudacao="Boa noite" nomeUsuario="José" />
  </div>,
  document.getElementById('root')
  ) */
  
  
// 6. Criando componentes pai e filho
import Pai from './components/Pai'
import FilhoNovo from './components/FilhoNovo'

ReactDOM.render(
  <div>
    <Pai nome="José" sobrenome="Silva">
      {/* Importando filhos sem estarem diretamente no componente pai */}
      <FilhoNovo nome="Mateus" />
      <FilhoNovo nome="William" />
      <FilhoNovo nome="Sara" />
    </Pai>
  </div>,
  document.getElementById('root')
)