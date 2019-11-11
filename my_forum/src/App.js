import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Users from "./Components/Users";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return <Users />;
}

export default App;
