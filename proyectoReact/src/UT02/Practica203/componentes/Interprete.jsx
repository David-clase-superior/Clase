import React from "react";

import "./interprete.css";

const Interprete = (props) => {

    return (
        <>
            <div className= 'interprete-contenedor'>
            <img src= {props.imagen}></img>
            <h2>{props.nombre}</h2>
            <h4>{props.children}</h4>
            </div>
        </>
    );
};

export default Interprete;