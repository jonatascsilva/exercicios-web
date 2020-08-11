import React from 'react'

export const childrenWithProps = (props) => {
  // Faço um map para aplicar mudanças no filho (no caso, quero
  // adicionar as propriedades do pai para eles)
  return React.Children.map(props.children, child => {
    // Clono as propriedades do pai para cada filho, porém, como quero
    // manter o nome do filho, sobrescrevo com as propriedades do filho
    // (logo depois)
    return React.cloneElement(child, {
      ...props, ...child.props
    })
  })
}