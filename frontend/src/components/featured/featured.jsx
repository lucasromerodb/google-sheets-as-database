import React from "react";
export const Featured = ({ item }) => {
  return item.map(i => (
    <div key={i.producto}>
      <img src={i.fotos[0]} alt="Producto" />
      {i.producto}
    </div>
  ));
};
