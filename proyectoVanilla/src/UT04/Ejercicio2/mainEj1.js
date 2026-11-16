"use strict";

function recorrer(nodo) {
    if(nodo.nodeType === Node.TEXT_NODE){
        if(nodo.textContent.includes("sexo")){
            const span = document.createElement("span");
            span.classList.add("censurado");
            span.textContent = "Contenido Bloqueado";
            nodo.replaceWith(span);
            
        }
        return;
    }

    if(nodo.nodeType === Node.ELEMENT_NODE){
        const hijos = [...nodo.childNodes];
        for (let i = 0; i < hijos.length; i++) {
            recorrer(hijos[i]);
        }
    }
}



setTimeout(()=>{
    recorrer(document.body);
},2000);
