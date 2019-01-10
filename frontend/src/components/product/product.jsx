import React, { Component, Fragment } from "react";
import { ProductBox } from "./product-box";
import "./product.css";

export class Product extends Component {
  state = {
    data: [],
    search: []
  };

  getData = () => {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(data => this.setState({ data, search: data }));
  };

  handleChange = e => {
    const value = e.target.value;
    const data = this.state.data;
    if (value.length > 2) {
      const filtered = data.filter(item =>
        String(item.producto)
          .toLowerCase()
          .includes(value)
      );
      this.setState({ search: filtered });
    } else {
      this.setState({ search: data });
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { search } = this.state;
    return (
      <Fragment>
        <label htmlFor="search">Buscar producto</label>{" "}
        <input
          id="search"
          type="text"
          onChange={this.handleChange}
          placeholder="Nombre del producto..."
        />
        {search.length ? (
          search.map(item => <ProductBox key={item.codigo} item={item} />)
        ) : (
          <h5>La búsqueda no coincide.</h5>
        )}
      </Fragment>
    );
  }
}
