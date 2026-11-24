"use strict";


function limpiar(){
    const tareaPendiente = document.querySelectorAll("#pendientes .tarea");
    const tareaAcabada = document.querySelectorAll("#acabadas .acabada");

    for (let i = 0; i < tareaPendiente.length; i++) {
        tareaPendiente[i].remove();
    }
    for (let i = 0; i < tareaAcabada.length; i++) {
        tareaAcabada[i].remove();
    }
}

function añadir(){
    const textArea = document.querySelector("textarea");
    const aviso = document.createElement("h2");
    aviso.textContent = "Tarea Vacia";
    const contenido = textArea.value.trim();

}









limpiar();
añadir();
