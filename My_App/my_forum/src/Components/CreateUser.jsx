import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: "",
      password: "",
      email: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUsernameDescription = this.onChangeUsernameDescription.bind(
      this
    );
    this.onChangePasswordDescription = this.onChangePasswordDescription.bind(
      this
    );
    this.onChangeEmailDescription = this.onChangeEmailDescription.bind(this);
  }

  // Form Controlers
  onChangeUsernameDescription(e) {
    this.setState({ user_name: e.target.value });
  }

  onChangePasswordDescription(e) {
    this.setState({ password: e.target.value });
  }

  onChangeEmailDescription(e) {
    this.setState({ email: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.user_name === "") return;

    const Package = {
      user_name: this.state.user_name
    };

    axios.post("http://localhost:4000/user/add", Package).then(res => {
      console.log(res.data);
    });
  }

  // Style Controlers
  usernameStyler() {
    const normalClass = "form-control";

    return normalClass;
  }

  render() {
    return (
      <div className="m-4">
        <h3> Create User </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> User Name: </label>
            <input
              type="text"
              className={this.usernameStyler()}
              value={this.state.user_name}
              onChange={this.onChangeUsernameDescription}
            ></input>
          </div>
          <div className="form-group">
            <label> Password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePasswordDescription}
            ></input>
          </div>
          <div className="form-group">
            <label> Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmailDescription}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
