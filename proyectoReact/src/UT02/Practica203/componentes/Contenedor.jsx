import React from "react";
import "./contenedor.css";

const Contenedor = (props) => {

    return (
        <>
            <div className= 'contenedor-contenedor'>
                <p>Soy tu cabecera</p>
                <p>{props.children}</p>
                <p>Soy tu pie de pagina</p>
            </div>
        </>
    );
};

export default Contenedor;