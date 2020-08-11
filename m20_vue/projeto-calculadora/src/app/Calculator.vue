<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button label="AC" @myClick="clearMemory" triple />
    <Button label="÷" @myClick="setOperation" operation />
    <Button label="7" @myClick="addDigit" />
    <Button label="8" @myClick="addDigit" />
    <Button label="9" @myClick="addDigit" />
    <Button label="x" @myClick="setOperation" operation />
    <Button label="4" @myClick="addDigit" />
    <Button label="5" @myClick="addDigit" />
    <Button label="6" @myClick="addDigit" />
    <Button label="-" @myClick="setOperation" operation />
    <Button label="1" @myClick="addDigit" />
    <Button label="2" @myClick="addDigit" />
    <Button label="3" @myClick="addDigit" />
    <Button label="+" @myClick="setOperation" operation />
    <Button label="0" @myClick="addDigit" double />
    <Button label="." @myClick="addDigit" />
    <Button label="=" @myClick="setOperation" operation />
  </div>
</template>

<script>
import Button from '../components/Button';
import Display from '../components/Display';

export default {
  data: function() {
    return {
      displayValue: '0',
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      currentValuesIndex: 0,
    };
  },
  components: { Button, Display },
  methods: {
    clearMemory() {
      // Options armazena os dados iniciais do objeto
      Object.assign(this.$data, this.$options.data());
    },
    setOperation(operation) {
      const equals = operation === '=';

      if (this.currentValuesIndex === 0 && !equals) {
        this.clearDisplay = true;
        this.operation = operation;
        this.currentValuesIndex = 1;
      } else if (this.currentValuesIndex === 0 && equals) {
        return;
      } else if (this.currentValuesIndex === 1) {
        const currentOperation = this.operation;
        const values = [...this.values];

        let result = 0;
        
        if (currentOperation === '+') result = values[0] + values[1];
        if (currentOperation === '-') result = values[0] - values[1];
        if (currentOperation === 'x') result = values[0] * values[1];
        if (currentOperation === '÷') result = values[0] / values[1];
        
        if (isNaN(result)) {
          this.displayValue = 'Error';
          this.clearDisplay = true;
          this.operation = null;
          this.values = [0, 0];
          this.currentValuesIndex = 0;
          
          return;
        }

        values[0] = result;

        this.displayValue = values[0];
        this.clearDisplay = !equals;
        this.operation = equals ? null : operation;
        this.values = values;
        this.currentValuesIndex = equals ? 0 : 1;
      }
    },
    addDigit(number) {
      if (number === '.' && this.displayValue.includes('.')) {
        return;
      }

      const currentValuesIndex = this.currentValuesIndex;
      const previousStoredValue = this.values[currentValuesIndex].toString();

      if (previousStoredValue.length < 8) {
        const clearDisplay = (this.displayValue === '0'
            || this.clearDisplay);
        const previousDisplayedValue = clearDisplay ? '' : this.displayValue;
        const displayValue = previousDisplayedValue + number;

        this.displayValue = displayValue;
        this.clearDisplay = false;

        if (number !== '.') {
          const newValue = parseFloat(displayValue);
          const values = [...this.values];

          values[currentValuesIndex] = newValue;
          this.values = values;
        }
      } else {
        return;
      }
    }
  }
};
</script>

<style>
.calculator {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr repeat(5, 48px);

  width: 235px;
  height: 320px;
  border-radius: 5px;
  overflow: hidden;

  font-family: 'Roboto Mono', monospace;
}
</style>