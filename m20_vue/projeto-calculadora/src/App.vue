<template>
  <div id="app">
    <h1>Calculadora</h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from './app/Calculator';

export default {
  components: { Calculator }
};
</script>

<style>
@font-face {
  font-family: 'Roboto Mono';
  src: url(./fonts/RobotoMono-Thin.ttf);
}

body {
  margin: 0;
}

#app { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 100vh;

  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #fff;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
}
</style>