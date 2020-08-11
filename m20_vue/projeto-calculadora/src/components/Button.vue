<template>
  <button class="button"
      @click="$emit('myClick', label)"
      :class="{ double, triple, operation }">
      {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {},
    operation: { type: Boolean },
    double: { type: Boolean },
    triple: { type: Boolean }
  }
};
</script>

<style>
:root {
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;
}

.button {
  background-color: var(--bg-button);
  
  border: none;
  outline: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 900;
}

.button:active {
  background-image: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15));
}

.button.double {
  grid-column: span 2;
}

.button.triple {
  grid-column: span 3;
}

.button.operation {
  background-color: #fa8231;

  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
}
</style>