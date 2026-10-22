import React from "react";

const ListadoElemento = ({ nombre, indice }) => {
  return (
    <p>
      <b>
        {indice + 1}.- {nombre}
      </b>
    </p>
  );
};

export default ListadoElemento;