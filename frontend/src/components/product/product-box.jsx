import React, { Component } from "react";
import placeholder from "../../assets/placeholder.png";

export class ProductBox extends Component {
  render() {
    const {
      codigo,
      producto,
      categoria,
      descripcion,
      fotos,
      visible
    } = this.props.item;
    return (
      <section
        className={`product ${(!visible || visible !== "si") &&
          "not-available"}`}
      >
        <h2>
          {producto} <sup>#{codigo}</sup>
        </h2>
        <h4>
          Categoría{categoria} (
          {visible === "si" ? "Disponible" : "No disponible"})
        </h4>
        <div className="container">
          {fotos.map(item => (
            <img src={item || placeholder} alt="Product" key={item} />
          ))}

          <p>{descripcion}</p>
        </div>
      </section>
    );
  }
}
