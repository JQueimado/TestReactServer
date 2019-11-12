import React, { Component } from "react";
import User from "./User";
import axios from "axios";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/user/")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  users() {
    return this.state.users.map((user, i) => {
      return <User user={user} key={i} />;
    });
  }

  render() {
    return (
      <div>
        {this.state.users.length === 0 ? (
          <a> No Users </a>
        ) : (
          <div>
            <h3>User List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User Name</th>
                </tr>
              </thead>
              <tbody>{this.users()}</tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
