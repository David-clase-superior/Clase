"use strict";

const generarSaludo = () =>{
    return setInterval(()=>{
        const mensaje = document.createElement("h1");
        const contenedor = document.getElementById("contenedor");
        mensaje.textContent= "¡Hola Mundo!";
        contenedor.appendChild(mensaje);
    },2000)
}

export {generarSaludo};