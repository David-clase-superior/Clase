import {comprobarIMC, sumarBien, validacion, validarNumeros} from "./pruebas.js";
"use strict";

function ejercicio1(){
    const pesoMarcos = 80;
    const alturaMarcos = 1.70;
    const pesoJuan = 70;
    const alturaJuan = 1.75;

    const imcMarcos = comprobarIMC(pesoMarcos, alturaMarcos);
    const imcJuan = comprobarIMC(pesoJuan, alturaJuan);
    const imcMayor = imcMarcos > imcJuan;
    console.log(`El IMC de Juan es de ${imcJuan.toFixed(2)}`);
    console.log(`El IMC de Marcos es de ${imcMarcos.toFixed(2)}`);
    console.log(`¿Tiene Marcos un IMC mayor que el de Juan?: ${imcMayor}`);
}
ejercicio1();


const numeros = sumarBien(2,2,2,2);

console.log(numeros);

validarNumeros(4);

const numeros2 = validacion("2");
console.log(numeros2);