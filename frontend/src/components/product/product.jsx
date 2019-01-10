import React, { Component } from "react";
import { ProductBox } from "./product-box";
import './product.css'

export class Product extends Component {
  state = {
    data: []
  };

  getData() {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    console.table(this.state.data);
    return this.state.data.map(item => (
      <ProductBox key={item.codigo} item={item} />
    ));
  }
}
