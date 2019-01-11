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
      visible,
      destacado,
      discontinuado
    } = this.props.item;
    return (
      <section
        className={`product ${!visible && "not-available"} ${visible &&
          destacado &&
          "is-featured"}`}
      >
        <h2>
          {producto} <sup>#{codigo}</sup>
        </h2>
        {discontinuado && (
          <strong style={{ color: "red" }}>Producto discontinuado</strong>
        )}
        <h4>
          Categoría{categoria} ({visible ? "Disponible" : "No disponible"})
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
