import React, { Component, Fragment } from "react";
import { ProductBox } from "./product-box";
import "./product.css";

export class Product extends Component {
  state = {
    products: [],
    searchResult: [],
    searchInput: ""
  };

  getData = () => {
    fetch("http://localhost:4000")
      .then(res => res.json())
      .then(data =>
        this.setState({
          products: data.productos,
          searchResult: data.productos
        })
      );
  };

  handleChange = e => {
    const searchInput = e.target.value;
    const products = this.state.products;
    if (searchInput.length > 2) {
      const filtered = products.filter(item =>
        String(item.producto)
          .toLowerCase()
          .includes(searchInput)
      );
      this.setState({ searchInput, searchResult: filtered });
    } else {
      this.setState({ searchResult: products });
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { searchResult } = this.state;
    console.log("products -->", this.state.searchResult);
    return (
      <Fragment>
        <label htmlFor="search">Buscar producto</label>{" "}
        <input
          id="search"
          type="text"
          onChange={this.handleChange}
          placeholder="Ej: resistencias"
        />
        {searchResult.length ? (
          searchResult.map(item => <ProductBox key={item.codigo} item={item} />)
        ) : (
          <h5>La búsqueda no coincide.</h5>
        )}
      </Fragment>
    );
  }
}
