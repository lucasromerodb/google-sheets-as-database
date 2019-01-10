import React, { Component } from "react";

export class ProductBox extends Component {
  render() {
    const {
      codigo = "",
      producto = "",
      categoria = "",
      descripcion = "",
      foto = "",
      disponible = ""
    } = this.props.item;
    return (
      <section>
        <h2>
          #{codigo} - {producto}
        </h2>
        <h4>{categoria}</h4>
        <img src={foto} alt="" width={100} />
        <p>{descripcion}</p>
      </section>
    );
  }
}
