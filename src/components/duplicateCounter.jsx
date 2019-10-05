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

  render() {
    return this.state.counters.map(counterObj => (
      <Counter
        key={counterObj.id}
        counter={counterObj}
        onDelete={this.handleDelete}
      />
    ));
  }
}

export default DupCounter;
