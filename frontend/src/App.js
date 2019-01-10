import React, { Component, Fragment } from "react";

import { Product } from "./components/product";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Diamore</h1>
        <Product />
      </Fragment>
    );
  }
}

export default App;
