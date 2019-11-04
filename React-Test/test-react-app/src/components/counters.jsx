import React, { Component } from "react";
import Counter from "./counter controled";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
            onDelete={this.props.onDelete}
          >
            {/* exemple to pass a children to counter object*/}
            <span>This is counter #{counter.id}</span>
          </Counter>
        ))}

        <button className="btn btn-secondary m-2" onClick={this.props.onReset}>
          Reset
        </button>

        <button className="btn btn-secondary m-2" onClick={this.props.onAdd}>
          ADD
        </button>

      </div>
    );
  }
}

export default Counters;
