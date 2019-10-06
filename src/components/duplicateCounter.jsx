import React, { Component } from "react";
import Counter from "./counter";

class DupCounter extends Component {
  
  render() {
    const { onReset, counters, onIncrement, onDelete, onDecrement } = this.props;
    return (
      <div>
        <button
          className="btn btn-sm m-2 btn-primary"
          onClick={onReset}
        >
          Reset
        </button>
        {counters.map(counterObj => (
          <Counter
            key={counterObj.id}
            counter={counterObj}
            onIncrement={onIncrement}
            onDelete={onDelete}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default DupCounter;
