<template>
  <div class="pill">
    <span class="name">{{ name }}</span>
    <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  props: ['name', 'amount']
};
</script>

<style>
.pill {
  display: flex;
  align-items: center;

  margin: 10px;
  height: 55px;
  border-radius: 30px;

  background-color: crimson;

  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
}

.pill .name {
  margin-left: 15px;
}

.pill .amount {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px;
  padding: 5px;
  height: 35px;
  width: 35px;

  border-radius: 18px;
  background-color: #fff;

  font-size: 0.8rem;
  color: crimson;
}
</style>