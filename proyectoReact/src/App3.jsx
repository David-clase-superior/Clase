import React, { useState } from "react";
import "./App.css";
import ContadorLimite from "./UT03/Practica3.08/componentesEj2/ContadorLimite.jsx";
import Contador from "./UT03/Practica3.08/componentesEj2/Contador.jsx";

const App = () => {
const valorPorDefecto = 0;
  const [contador, setContador] = useState(valorPorDefecto);

  const incrementar = () => {
    if(contador < 10){
        setContador(contador + 1);
    }else{
        console.log(`No puedes incrementar mas el contador, limite maximo es 10 ${contador}`);
    }
  }

  const decrementar = () => {
    if(contador > 0){
        setContador(contador - 1);
    }else{
        console.log(`No puedes incrementar mas el contador, limite inferior es 0 ${contador}`);
    }
  }

  return (
    <>
    <h2>Hola</h2>
    <div>
        <ContadorLimite nombre="Incrementar" funcion={incrementar} disabled={contador === 10}></ContadorLimite>
        <ContadorLimite nombre="Decrementar" funcion={decrementar} disabled={contador === 0}></ContadorLimite>
    </div>
    <div>
        <Contador datos={contador} />
    </div>
    </>
  );
};

export default App;