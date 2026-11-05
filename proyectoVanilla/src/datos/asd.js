"use strict";
/* Forma 1: createElement
const tabla = document.createElement("table");
tabla.setAttribute("id", "feo");

let numero = 1;

for (let i = 0; i < 10 ; i++) {
    const tr = document.createElement("tr");
    for (let i = 0; i < 10; i++) {
        const td = document.createElement("td");
        td.textContent = `${numero}`;
        tr.appendChild(td);
        numero++;
    }
    tabla.appendChild(tr);
}
document.body.appendChild(tabla);
const idSet = setTimeout(()=>{
    const celdas = Array.from(document.getElementById("feo").getElementsByTagName("td"));
    //const celdas = [...document.getElementById("feo").getElementsByTagName("td"))]; //iterable, utilizando desparrame
    celdas.map((celda)=>{
        //celda.textContent
        if(esPrimo(parseInt(celda.textContent))){
            celda.classList.add("primo");
        };
    });
    console.log(celdas);

}, 2000);
*/
//Forma 2: insertAdjacentHtml

//document.body.insertAdjacentHTML(`beforeend`, `<table id="feo"></table>`);

const crearTabla = () => {
    let tabla = `<table id= "feo">`;
    
    let numero = 1;

    for (let i = 0; i < 10 ; i++) {
        tabla = `${tabla}<tr>`;

        for (let i = 0; i < 10; i++) {
            tabla = `${tabla}<td>${numero}</td>`;
            numero++;
        }
        tabla = `${tabla}</tr>`;
    }
    tabla = `${tabla}</table>`;
    return tabla;
}
/*
const crearTabla = () => {
    let tabla = `<table id= "feo">`;
    
    let numero = 1;

    for (let i = 0; i < 10 ; i++) {
        tabla += `<tr>`;

        for (let i = 0; i < 10; i++) {
            tabla += `<td>${numero}</td>`;
            numero++;
        }
        tabla += `</tr>`;
    }
    tabla += `</table>`;
    return tabla;
}

*/
console.log(crearTabla());
document.body.insertAdjacentHTML(`beforeend`, crearTabla());

const idSet = setTimeout(()=>{
    const celdas = Array.from(document.getElementById("feo").getElementsByTagName("td"));
    //const celdas = [...document.getElementById("feo").getElementsByTagName("td"))]; //iterable, utilizando desparrame
    celdas.map((celda)=>{
        //celda.textContent
        if(esPrimo(parseInt(celda.textContent))){
            celda.classList.add("primo");
        };
    });
    console.log(celdas);

}, 2000);
//El 4 del carrusel es con left right textarea.value