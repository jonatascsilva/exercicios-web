import React from 'react'
import Filho from './Filho'
import { childrenWithProps } from '../utils/childrenWithProps'

export default props =>
    <div>
      <h1>{props.nome} {props.sobrenome}</h1>
      <h2>Filhos internos</h2>
      <ul>
        {/* Herdando especificamente um atributo do pai */}
        <Filho nome="Pedro" sobrenome={props.sobrenome} />
        {/* Herdando todos os atributos do pai com o spread */}
        <Filho {...props} />
        {/* Herdando todos os atributos do pai e sobrescrevendo nome */}
        <Filho {...props} nome="Carla" />
      </ul>
      <h2>Filhos externos</h2>
      <ul>
        {/* Importo os filhos que foram declarados externamente */}
        {childrenWithProps(props)}
      </ul>
    </div>