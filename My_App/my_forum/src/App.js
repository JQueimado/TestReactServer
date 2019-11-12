import React from "react";
import "./App.css";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Users from "./Components/Users";
import CreateUser from "./Components/CreateUser";
import Discucions from "./Components/Discucions";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Welcome to my Forum
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users_create" className="nav-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/" exact component={Discucions} />
        <Route path="/users" component={Users} />
        <Route path="/users_create" component={CreateUser} />
      </Switch>
    </Router>
  );
}

export default App;
