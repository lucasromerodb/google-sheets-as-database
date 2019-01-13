import React, { Component, Fragment } from "react";
import { ProductBox } from "./product-box";
import { Featured } from "../featured";
import "./product.css";

export class Product extends Component {
  state = {
    products: [],
    searchResult: [],
    searchInput: ""
  };

  getData = () => {
    const work = "http://10.20.7.47:4000";
    const localhost = "http://localhost:4000";
    fetch(localhost)
      .then(res => res.json())
      .then(data =>
        this.setState({
          products: data.productos,
          searchResult: data.productos
        })
      );
  };

  handleChange = e => {
    const searchInput = e.target.value.toLowerCase();
    const products = this.state.products;
    if (searchInput.length > 2) {
      const filtered = products.filter(item =>
        item.producto.toLowerCase().includes(searchInput)
      );
      this.setState({ searchResult: filtered });
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
        <input
          className="filter"
          id="search"
          type="text"
          onChange={this.handleChange}
          placeholder="Buscá un producto..."
        />
        {searchResult.length ? (
          <Fragment>
            {searchResult.length
              ? searchResult.filter(i => i.destacado === true).length > 0 && (
                  <section className="featuredProducts">
                    <h4>Productos destacados</h4>
                    <div className="container">
                      <Featured
                        item={searchResult.filter(i => i.destacado === true)}
                      />
                    </div>
                  </section>
                )
              : ""}
            {searchResult.length ? (
              searchResult.map(item => <ProductBox key={item.id} item={item} />)
            ) : (
              <h5>No hay productos.</h5>
            )}
          </Fragment>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}
