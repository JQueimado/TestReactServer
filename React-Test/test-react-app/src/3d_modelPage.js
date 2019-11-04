import React, { Component } from "react";

class Model extends Component {
  render() {
    return (
      <React.Component>
        <meta charset="utf-8" />
        <script src="lib//three.js"></script>
        <script src="lib/TrackballControls.js"></script>
        <script src="Fonte.js" type="text/javascript"></script>
        <div onload="main();"></div>
      </React.Component>
    );
  }
}

export default Model;
