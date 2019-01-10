import React, { Component } from "react";
import placeholder from "../../assets/placeholder.png";

export class ProductBox extends Component {
  render() {
    const {
      codigo,
      producto,
      categoria,
      descripcion,
      foto,
      disponible
    } = this.props.item;
    return (
      <section
        className={`product ${(!disponible || disponible !== "si") &&
          "not-available"}`}
      >
        <h2>
          #{codigo} - {producto}
        </h2>
        <h4>
          {categoria} - Producto disponible: {disponible === "si" ? "si" : "no"}
        </h4>
        <div className="container">
          <img src={foto || placeholder} alt="" width={200} height={200} />
          <p>{descripcion}</p>
        </div>
      </section>
    );
  }
}
