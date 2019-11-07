import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>MERN</h2>
      </div>
      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
    </Router>
  );
}

export default App;
