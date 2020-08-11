<template>
  <div class="door-area">
    <div class="door-frame" :class="{ selected: selected && !open }">
      <Gift v-if="open && hasGift" />
    </div>
    <div class="door" :class="{ open }"
         @click="selected = !selected">
      <div class="number" :class="{ selected }">{{ number }}</div>
      <div class="knob" :class="{ selected }"
          @click="open = true"></div>
    </div>
  </div>
</template>

<script>
import Gift from './Gift';

export default {
  name: 'Door',
  components: {
    Gift,
  },
  props: {
    number: {},
    hasGift: { type: Boolean },
  },
  data: function() {
    return {
      open: false,
      selected: false,
    };
  }
};
</script>

<style>
:root {
  --door-border: 5px solid brown;
  --selected-border: 5px solid yellow;
}

.door-area {
  display: flex;
  justify-content: center;

  position: relative;
  width: 200px;
  height: 310px;
  border-bottom: 10px solid #aaa;
  margin-bottom: 20px;

  font-size: 3rem;
}

.door-frame {
  display: flex;
  justify-content: center;
  align-items: flex-end;

  position: absolute;
  width: 180px;
  height: 300px;

  border: var(--door-border);
  border-bottom: none;
}

.door {
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  width: 170px;
  height: 295px;
  top: 5px;
  padding: 20px;

  background-color: chocolate;
}

.door .knob {
  align-self: flex-start;
  
  width: 20px;
  height: 20px;
  margin-top: 60px;

  border-radius: 10px;
  background-color: brown;
}

.door-frame.selected {
  border: var(--selected-border);
  border-bottom: none;
}

.door .number.selected {
  color: yellow;
}

.door > .knob.selected {
  background-color: yellow;
}

.door.open {
  background-color: #0007;
}

.door.open .knob,
.door.open .number {
  display: none;
}
</style>