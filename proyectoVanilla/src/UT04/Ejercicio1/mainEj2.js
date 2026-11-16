"use strict";
    const lista = document.getElementById("lista");

function listado(){

    //crear el numero random
    const numeroRandom = Math.floor(Math.random() * 1000) + 1;
    
    //creamos el hijo
    const nuevoLi = document.createElement("li");

    //añadimos el contenido al hijo
    nuevoLi.textContent = numeroRandom;

    //añadimos el hijo
    lista.appendChild(nuevoLi);
};

function insertAfter(nuevoElemento, elementoExistente){
    
};














setInterval(()=>{
    listado()
},2000);
