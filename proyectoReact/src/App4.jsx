import React, { useState } from "react";
import "./App.css";
import { Botones } from "./UT03/Practica3.08/componentesEj3/Botones.jsx";
import { Proyeccion } from "./UT03/Practica3.08/componentesEj3/Proyeccion.jsx";

const App = () => {
  // Origen de datos.
  const valorInicial = 0;
  const [like, setlike] = useState(valorInicial);
  const [dislike, setdislike] = useState(valorInicial);

const likes = () => {
    setlike(like + 1);
}
const dislikes = () => {
    setdislike(dislike + 1);
}

  return (
    <>
      <h2>Contador de Likes</h2>
        <div>
            <Botones nombre="Likes" funcion={likes}></Botones>
            <Botones nombre="Dislikes" funcion={dislikes}></Botones>
        </div>
        <div>
            <Proyeccion numeros={like} />
            <Proyeccion numeros={dislike} />
        </div>
    </>
  );
};

export default App;