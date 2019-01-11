import React from "react";
import "./featured.css";

export const Featured = ({ item }) => {
  return item.map(i => (
    <div key={i.producto} className="featured">
      <div
        className="image"
        style={{ backgroundImage: `url('${i.fotos[0]}')` }}
      />
      <strong className="text">{i.producto}</strong>
    </div>
  ));
};
