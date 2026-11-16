"use strict";

function ejercicio1 (){
    const parrafos = document.querySelectorAll("p");
    const enlaces = document.querySelectorAll("a");

    const numeroDeParrafos = parrafos.length;
    const numeroDeEnlaces = enlaces.length;
    const textoSegundoParrafo = parrafos[1].textContent;
    const enlacePrimero = enlaces[0].getAttribute("href");
    const enlacePenultimo = enlaces[enlaces.length - 2].getAttribute("href");
    const divInfo = document.querySelector("#info");
    divInfo.innerHTML = `
    <ul>
        <li><strong>Parrafos -> </strong> ${numeroDeParrafos} </li>
        <li><strong>Enlaces -> </strong> ${numeroDeEnlaces} </li>
        <li><strong>Texto del segundo parrafo -> </strong> ${textoSegundoParrafo} </li>
        <li><strong>Primer enlace -> </strong> ${enlacePrimero} </li>
        <li><strong>Penultimo enlace -> </strong> ${enlacePenultimo} </li>
    </ul>
    `;
};


setTimeout(() => {
  ejercicio1();
}, 2000);