import React, { Component } from "react";

class Counter extends Component {
  badgeClassChanger() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div>
        {
          /* render children */
          this.props.children
        }

        {/* class changer and condition exemple*/}
        <span className={this.badgeClassChanger()}>
          {" "}
          {this.props.counter.value === 0 ? "z" : this.props.counter.value}{" "}
        </span>

        {/* button exemple */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary m-2"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary m-2"
        >
          -
        </button>

        {/* event onDelete raiser */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
