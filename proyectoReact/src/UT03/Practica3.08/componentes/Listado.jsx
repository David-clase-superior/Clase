import React from "react";
import ListadoElemento from "./ListadoElemento.jsx";
const Listado = ({ datos }) => {
  return datos.map((v, i, a) => {
    return <ListadoElemento key={i} nombre={v} indice={i} />;
  });
};

export default Listado;