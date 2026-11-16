"use strict";

function crearTabla(){
    let contador = 0;
    const tabla = document.createElement("table");
    
    for (let i = 0; i < 10; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            const td = document.createElement("td");
            contador++;
            td.textContent = contador;
            td.classList.add("caja");
            tr.appendChild(td);
        }        
        tabla.appendChild(tr);
    }
    document.body.appendChild(tabla); 
}

function esPrimo(num) {
  if (num <= 1) return false; // El 1 y menores no son primos
  let limite = Math.sqrt(num);
  for (let i = 2; i <= limite; i++) {
    if (num % i === 0) {
      return false; // Si es divisible, no es primo
    }
  }
  return true; // Es primo
}

function colorPrimo () {
    const td = document.querySelectorAll("td");
    
    for (let i = 0; i < td.length; i++) {
        const contenido = Number(td[i].textContent);
        if(esPrimo(contenido)){
            td[i].classList.add("primo");
        }
        
    }
}

crearTabla();

setTimeout(()=>{
    colorPrimo();
},2000);