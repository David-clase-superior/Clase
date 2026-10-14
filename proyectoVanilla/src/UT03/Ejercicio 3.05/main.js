"use strict";
import { filtrarNumeros, mostrarIdNombre, textoInvertido, textoMayusculas } from "../bibliotecas/imports.js";
import { usuarios } from "../bibliotecas/datos/usuarios.js";

const array5cadenas = [
    "pepe",
    "pepa",
    "pepito",
    "pepedo",
    "pedrito"
];
const numeros = [1,2,3,4,5,6,7,8,9,10];

console.log(`Nombres en Mayusculas: `);
textoMayusculas(array5cadenas);

console.log(`-------------------`);

console.log(`Nombres en posiciones invertidas por orden alfabetico: `);
textoInvertido(array5cadenas);

console.log(`-------------------`);

console.log(`Mostrar id y nombres de los usuarios: `);
mostrarIdNombre(usuarios);

console.log(`-------------------`);

console.log(`Filtrar numeros mayores a 5: `);
filtrarNumeros(numeros);
