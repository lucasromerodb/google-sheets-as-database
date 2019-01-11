import React, { Component } from "react";
import placeholder from "../../assets/placeholder.png";

export class ProductBox extends Component {
  render() {
    const {
      codigo,
      producto,
      categoria,
      subcategoria,
      descripcion,
      caracteristicas,
      fotos,
      visible,
      destacado,
      discontinuado,
      descarga,
      rubro,
      marca
    } = this.props.item;
    return (
      <section
        className={`product ${!visible && "not-available"} ${visible &&
          destacado &&
          "is-featured"}`}
      >
        {destacado && <span className="featuredProduct">Destacado!</span>}
        <h2>
          {producto} <sup>#{codigo}</sup>
        </h2>
        {discontinuado && (
          <strong style={{ color: "red" }}>Producto discontinuado</strong>
        )}
        <h4>
          Categoría: {categoria}
          {subcategoria && ` » ${subcategoria}`} (
          {visible ? "Disponible" : "No disponible"})
        </h4>
        <p>
          {rubro && <span>Rubro: {rubro}</span>} <br />
          {marca && <span>Marca: {marca}</span>}
        </p>
        <div className="container">
          {fotos.map(item => (
            <img src={item || placeholder} alt="Product" key={item} />
          ))}

          <p className="description">{descripcion}</p>
          <ul className="features">
            {caracteristicas.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            className="cta primary"
            href={`mailto:info@diamore.com.ar?subject=[Consulta de precio] - ${producto} (#${codigo})&body=Buen día, quisiera consultar el precio de ▸ ${producto} ◂ y recibir mas información al respecto. Saludos cordiales.`}
          >
            Consultar precio
          </a>
          <a className="cta" href={descarga}>
            Más info. »
          </a>

          <a
            className="cta whatsapp"
            href={`whatsapp://send?text=${producto}%20http://diamore.com.ar/`}
            data-action="share/whatsapp/share"
          >
            Enviar por Whatsapp
          </a>
        </div>
      </section>
    );
  }
}
