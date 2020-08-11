import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  currentValuesIndex: 0,
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {...initialState};
  }

  clearMemory = () => {
    this.setState({...initialState});
  }

  setOperation = (operation) => {
    const equals = operation === '=';

    if (this.state.currentValuesIndex === 0 && !equals) {
      this.setState({
        clearDisplay: true,
        operation,
        currentValuesIndex: 1,
      });
    } else if (this.state.currentValuesIndex === 0 && equals) {
      return;
    } else if (this.state.currentValuesIndex === 1) {
      const currentOperation = this.state.operation;
      const values = [...this.state.values];

      let result = 0;
      
      if (currentOperation === '+') result = values[0] + values[1];
      if (currentOperation === '-') result = values[0] - values[1];
      if (currentOperation === 'x') result = values[0] * values[1];
      if (currentOperation === '÷') result = values[0] / values[1];
      
      if (isNaN(result)) {
        this.setState({
          displayValue: 'Error',
          clearDisplay: true,
          operation: null,
          values: [0, 0],
          currentValuesIndex: 0,
        });
        
        return;
      }

      values[0] = result;
      
      this.setState({
        displayValue: values[0],
        clearDisplay: !equals,
        operation: equals ? null : operation,
        values,
        currentValuesIndex: equals ? 0 : 1,
      });
    }
  }

  addDigit = (number) => {
    if (number === '.' && this.state.displayValue.includes('.')) {
      return;
    }

    const currentValuesIndex = this.state.currentValuesIndex;
    const previousStoredValue = this.state.values[currentValuesIndex].toString();

    if (previousStoredValue.length < 8) {
      const clearDisplay = (this.state.displayValue === '0'
          || this.state.clearDisplay);
      const previousDisplayedValue = clearDisplay ? '' : this.state.displayValue;
      const displayValue = previousDisplayedValue + number;

      this.setState({displayValue, clearDisplay: false});

      if (number !== '.') {
        const newValue = parseFloat(displayValue);
        const values = [...this.state.values];

        values[currentValuesIndex] = newValue;
        this.setState({ values });
      }
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearMemory} myClass="triple" />
        <Button label="÷" click={this.setOperation} myClass="operation" />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="x" click={this.setOperation} myClass="operation" />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} myClass="operation" />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} myClass="operation" />
        <Button label="0" click={this.addDigit} myClass="double" />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} myClass="operation" />
      </div>
    );
  }
}

export default Calculator;