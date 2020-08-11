import Vue from 'vue'
import App from './App'

// Novos métodos da instância Vue
// - Render: Renderiza componente criado
// new Vue({
//   el: '#app',
//   render(createElement) {
//     return createElement(App)
//   }
// })

// Como o Vue permite fazer uma coisa de várias maneiras, segue o padrão do Vue
// de definir o elemento usando o $mount e renderizando de forma reduzida
new Vue({
  render: h => h(App)
}).$mount('#app')