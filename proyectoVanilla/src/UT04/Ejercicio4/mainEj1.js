"use strict";

function parrafoAleatorio(){
    const numeroRandom = Math.floor(Math.random() * 5);
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const stringHtml = `rgb(${r},${g},${b})`;
    const parrafos = document.getElementsByTagName("p");
    const parrafoAleatorio = parrafos[numeroRandom];
    parrafoAleatorio.style.background = stringHtml;
    
}

setInterval(()=>{
    parrafoAleatorio();
},1000);