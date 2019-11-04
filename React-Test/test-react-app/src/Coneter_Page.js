import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/Navbar";

class SubApp1 extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ],
    n_counter: 4
  };
  // ... means clone
  onIncrementHandler = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  onDecrementHandler = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  /* event handler exemple + filter */
  onDeleteHandler = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };

  onReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  onAddHandler = () => {
    var n_counter = this.state.n_counter;
    var counters = [...this.state.counters];
    counters.push({ id: n_counter, value: 0 });
    n_counter += 1;
    this.setState({ counters, n_counter });
  };

  render() {
    return (
      <div>
        <Navbar
          totalcounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDecrement={this.onDecrementHandler}
            onIncrement={this.onIncrementHandler}
            onReset={this.onReset}
            onDelete={this.onDeleteHandler}
            onAdd={this.onAddHandler}
          />
        </main>
      </div>
    );
  }
}

export default SubApp1;
