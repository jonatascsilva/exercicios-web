import React, { Component } from 'react'

// Modo 1 para tratar eventos onChange (método específico para cada elemento)

// Criando componente de classe
// - É preciso instanciar sua classe o seu componente à partir de Component
const Saudacao = class Saudacao extends Component {
  // - O React não permite que haja two data bind, ou seja, não permite que o
  //   componente atualize seus dados, SOMENTE que os dados (disponíveis em
  //   state) atualizem o componente.
  // - Logo, o props definido diretamente na tag (quando importado no index.js)
  //   e os componentes são somente leitura pelo browser, então para que haja
  //   essa alteração dos dois lados, é necessário usar as propriedades
  //   definidas no state para que sejam aplicadas no componente, e, definir uma
  //   função para detectar alterações no componente e assim mudar dinamicamente
  //   os valores do state (que consequentemente irão atualizar o componente da
  //   aplicação), como neste exemplo, escrever em um input
  state = {
    // Definindo as variáveis com os valores iniciais das propriedades iniciais
    // definidas no props
    tipoSaudacao: this.props.tipoSaudacao,
    nomeUsuario: this.props.nomeUsuario
  }

  // Passando as propriedades para o super class (Component)
  /* constructor(props) {
    super(props)

    // Posso inicializar o state aqui também
    // this.state = {
    //   tipo: this.props.tipo,
    //   nome: this.props.nome
    // }

    // Ao invés de usar arrow function em setTipo e setNome, posso usar o bind
    this.setTipo = this.setTipo.bind(this)
    this.setNome = this.setTipo.bind(this)
  } */
  
  // Crio método para ser invocado quando houver alteração no input que use a
  // variável "tipo"
  // - Altero o value dos inputs à partir das variáveis tipo e nome que foram
  //   atribuídas (ao input)
  // - Observe que obtenho o valor digitado no HTML simplesmente pegando o
  //   evento, seu target e o value atual
  setTipo = e => this.setState({ tipoSaudacao: e.target.value })

  // Crio método para ser invocado quando houver alteração no input que use a
  // variável "nome"
  setNome = e => this.setState({ nomeUsuario: e.target.value })
  
  // Método responsável por renderizar o componente na aplicação 
  render() {
    // Usa-se o this para acessar propriedades/atributos e assim usá-las no
    // componente
    const { tipoSaudacao, nomeUsuario } = this.state

    // Retorno o componente montado
    return (
      <>
        <h1>{tipoSaudacao}, {nomeUsuario}!</h1>
        <hr />
        <input type="text" placeholder="Saudação..."
            value={tipoSaudacao} onChange={this.setTipo} />
        <input type="text" placeholder="Nome..."
            value={nomeUsuario} onChange={this.setNome} />
      </>
    )
  }
}

// Modo 2 para tratar eventos onChange (método único)
// - Ele não é muito interessante para tratar alguns casos, como validar email,
//   senhas, e outras alterações que sejam necessárias além de alterar o valor
//   da propriedade
const SaudacaoNova = class SaudacaoNova extends Component {
  state = {
    tipoSaudacao: this.props.tipoSaudacao,
    nomeUsuario: this.props.nomeUsuario
  }
  
  // Método único, trata evento dinamicamente :)
  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { tipoSaudacao, nomeUsuario } = this.state

    return (
      <>
        <h1>{tipoSaudacao}, {nomeUsuario}!</h1>
        <hr />
        <input
            name="tipoSaudacao"
            type="text"
            placeholder="Saudação..."
            value={tipoSaudacao}
            onChange={this.onChange}
        />
        <input
            name="nomeUsuario"
            type="text"
            placeholder="Nome..."
            value={nomeUsuario}
            onChange={this.onChange}
        />
      </>
    )
  }
}


export { Saudacao, SaudacaoNova }