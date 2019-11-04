import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value
  };

  onClickButton1 = () => {
    this.setState({
      count: this.state.count + 1
      /*, tags : this.state.tags.push(this.state.count.toString())*/
    });
  };

  onClickButton2 = () => {
    this.setState({ count: this.state.count - 1 });
  };

  badgeClassChanger() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
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
          {this.state.count === 0 ? "z" : this.state.count}
        </span>

        {/* button exemple */}
        <button onClick={this.onClickButton1} className="btn btn-secondary m-2">
          +
        </button>

        <button onClick={this.onClickButton2} className="btn btn-secondary m-2">
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
