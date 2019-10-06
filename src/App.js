import React, { Component } from "react";
import DupCounter from "./components/duplicateCounter.jsx";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
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
    copyState[index] = { ...counter };
    copyState[index].value++;
    this.setState({ counters: copyState });
  };

  handleDecrement = counter => {
    const deleteState = [...this.state.counters];
    const index = deleteState.indexOf(counter);
    deleteState[index] = { ...counter };
    deleteState[index].value--;
    this.setState({ counters: deleteState });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounter={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <DupCounter
            counters={this.state.counters}
            onClick={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onDecrement = {this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
