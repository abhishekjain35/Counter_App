import React, { Component } from "react";
import Counter from "./counter";

class DupCounter extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const newCounterObj = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: newCounterObj });
  };

  handleReset = () => {
    const reset = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: reset });
  };

  handleIncrement = counter => {
    const copyState = [...this.state.counters];
    const index = copyState.indexOf(counter);
    copyState[index] = {...counter}
    copyState[index].value++;
    this.setState({counters: copyState})
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-sm m-2 btn-primary"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map(counterObj => (
          <Counter
            key={counterObj.id}
            counter={counterObj}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        ))}
        ;
      </div>
    );
  }
}

export default DupCounter;
