"use strict";
import { generarSaludo } from "./biblioteca.js";




window.onload=()=>{
    const bottonSaludar = document.getElementById("comenzar");
    const bottonPararSaludos = document.getElementById("parar");

    bottonSaludar.addEventListener("click", ()=>{
        generarSaludo()
    },false)

    bottonPararSaludos.removeEventListener("click", ()=>{
        
    })
}