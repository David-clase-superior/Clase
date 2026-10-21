import React, { useState } from "react";
import "./App.css";
import Interprete from "./UT02/Practica203/componentes/Interprete.jsx";
import Contenedor from "./UT02/Practica203/componentes/Contenedor.jsx"
import boton from "./UT03/Practica 3.08/componentes/boton.jsx";

function App(){
    const [numeros, setNumeros] = useState();

    const boton_generar = () => {
        const numeroRandom = Math.floor(Math.random() * 101);
        setNumeros(numeroRandom);
    };

    const boton_eliminar = () => {
        setNumeros([]);
    };

    return (
        <>
            <div id='center'>
                <h2>UT03 El hook useState</h2>
                <boton nombre='Generar' funcion={boton_generar} />





            </div>
        </>
    );
};
export default App;