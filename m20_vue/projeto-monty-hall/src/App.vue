<template>
  <div id="app">
    <h1>Problema de Monty Hall</h1>
    <div class="form">
      <div v-if="!started">
        <label for="doorAmount">Quantas portas? </label>
        <input type="text"
               id="doorAmount"
               size="3"
               v-model.number="doorAmount">
      </div>
      <div v-if="!started">
        <label for="giftedDoor">Qual porta é a premiada? </label>
        <input type="text"
               id="giftedDoor"
               size="3"
               v-model.number="giftedDoor">
      </div>
      <button v-if="!started" @click="started = true">Iniciar</button>
      <button v-if="started" @click="started = false">Reiniciar</button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in doorAmount" :key="i">
        <Door :hasGift="i === giftedDoor" :number="i" />
      </div>
    </div>
  </div>
</template>

<script>
import Door from './components/Door.vue';

export default {
  name: 'App',
  components: {
    Door
  },
  data: function() {
    return {
      started: false,
      doorAmount: 3,
      giftedDoor: null,
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;

  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);

  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

#app h1 {
  padding: 20px;
  margin-bottom: 60px;
  
  border: 1px solid #000;
  background-color: #0004;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;
}

.form,
.form input,
.form button {
  margin-bottom: 10px;
  font-size: 2rem;
}

.doors {
  align-self: stretch;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
