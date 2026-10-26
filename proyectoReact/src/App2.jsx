import React, { useState } from "react";
import "./App.css";
import Botones from "./UT03/Practica3.08/componentes/Botones.jsx";
import Listado from "./UT03/Practica3.08/componentes/Listado.jsx";

const App = () => {
  // Origen de datos.
  const [numero, setNumero] = useState([]);


  // Funciones para modificar el estado.
const generar = () => {
  const numeroAleatorio = Math.floor(Math.random() * 101);
  if(!numero.includes(numeroAleatorio)){
    setNumero([...numero, numeroAleatorio]);
  }else{
    console.log(`El numero se iba a repetir, ${numeroAleatorio}`);
  }
}
const eliminar = () => {
  setNumero([]);
}

  return (
    <>
      <h2>Numeros Aleatorios.</h2>
      <div>
      <Botones nombre="Generar" funcion={generar}></Botones>
      <Botones nombre="Eliminar" funcion={eliminar}></Botones>
      </div>

      <div>
        {Array.isArray(numero) && numero.length ? (
          <Listado datos={numero} />
        ) : (
          <p>Array Vacio</p>
        )}
      </div>
    </>
  );
};

export default App;