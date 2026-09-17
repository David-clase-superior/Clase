import { IMC } from "../bibliotecas/imports.js";

console.log(`El imc es ${IMC(70, 1.75)}`);

let imcJuan = IMC(70, 1.75);
let imcMarcos = IMC(75, 1.75);
let tieneImcMayor = (imcJuan > imcMarcos);

console.log(`El imc de Juan es, ${imcJuan} y el imc de Marcos es ${imcMarcos} y ${tieneImcMayor}`);

console.log(`Hola mundo, hasta aqui funciona el codigo`);