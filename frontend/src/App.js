import React, { Component } from "react";

import { Product } from "./components/product";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Diamore</h1>
        <Product />
      </div>
    );
  }
}

export default App;
