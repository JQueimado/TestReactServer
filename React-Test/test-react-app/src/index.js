import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import App from "./Coneter_Page";
import ImagePage from "./ImagePage";
import Model from "./3d_modelPage";
import { NOTFOUND } from "dns";

/*
Se eu adicionar um path / e um /Image e aceder ao /Image o Router dá Render aos dois componetes porque / está inserido no path de /Image
*/
/*
const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/Image" component={Image} />
    </div>
  </Router>
);
*/

/* Lista de Links */
const routing = (
  <Router>
    <div>
      <ul className="list-group">
        <li className="list-group-item list-group-item-primary">
          <Link to="/">Home</Link>
        </li>

        <li className="list-group-item list-group-item-primary">
          <Link to="/Counters">Counters</Link>
        </li>

        <li className="list-group-item list-group-item-primary">
          <Link to="/Image">Image</Link>
        </li>
      </ul>

      <switch>
        <Route path="/" component={this} />
        <Route path="/Counters" component={App} />
        <Route path="/Image" component={ImagePage} />
        <Route path="/Model" component={Model} />
        <Router component={NOTFOUND} />
      </switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
