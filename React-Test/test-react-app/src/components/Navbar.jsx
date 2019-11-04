import React from "react";

/* Statless Functional Component and Object Distrocturing exemple */
const Navbar = ({ totalcounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Number of active counters:
        <span className="badge badege-pill badge-secondary m-2">
          {totalcounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
