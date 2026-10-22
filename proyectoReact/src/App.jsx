import React, { useState } from "react";
import "./App.css";
import Interprete from "./UT02/Practica203/componentes/Interprete.jsx";
import Contenedor from "./UT02/Practica203/componentes/Contenedor.jsx"
import Boton from "./UT03/Practica3.08/componentes/Boton.jsx";
import Listado from "./UT03/Practica3.08/componentes/Listado.jsx";

const App = () => {
  // Origen de datos.
   const numeroInicial = [1,2,3,4,5];
  const [numero, setNumero] = useState(numeroInicial);

  // Funciones para modificar el estado.
const generar = () => {
  const numeroAleatorio = Math.floor(Math.random() * 101);
  console.log("Número generado en App.jsx:", numeroAleatorio); // <-- Línea de prueba
  setNumero([...numero, numeroAleatorio]);
};
const limpiar = () => {
    setNumero([]);
  };

  const reiniciar = () => {
    setNumero(numeroInicial);
  };



  return (
    <>
      <h2>Numeros.</h2>
      <div className='botonera'>
        <Boton nombre='Limpiar' funcion={limpiar} />
        <Boton nombre='Reiniciar' funcion={reiniciar} />
        <Boton nombre='generar' funcion={generar} />
      </div>

      <div>
        {Array.isArray(numero) && numero.length ? (
          <Listado datos={numero} />
        ) : (
          <p>Error</p>
        )}
      </div>
    </>
  );
};

export default App;