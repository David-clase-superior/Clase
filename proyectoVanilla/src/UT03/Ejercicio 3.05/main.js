"use strict";
import { filtrarNumeros, mostrarIdNombre, textoInvertido, textoMayusculas } from "../bibliotecas/imports.js";
import { usuarios } from "../bibliotecas/datos/usuarios.js";
import { usuariosId } from "../bibliotecas/datos/usuariosId.js";

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
mostrarIdNombre(usuariosId);

console.log(`-------------------`);

console.log(`Filtrar numeros mayores a 5: `);
filtrarNumeros(numeros);

console.log(`-------------------`);

console.log(`Agregar nuevo usuario:`);
/*
  {
    nombre: "Luis",
    preferencias: { tema: "oscuro", idioma: "espaÃ±ol", edad: 25 },
    contacto: {
      direccion: {
        calle: "Calle falsa, 666",
        localidad: "Elda",
        pais: "EspaÃ±a",
      },
      correoelectronico: "correofalso@yahoo.com",
      telefono: "123456789",
    },
  }*/

//nombre

let nuevoUsuario = { ...usuarios[0], nombre:"David"};
nuevoUsuario = {
  ...nuevoUsuario,
  preferencias: { ...nuevoUsuario.preferencias, tema: "oscuro", idioma: "espaÃ±ol", edad: 25 },
  ...nuevoUsuario.contacto,
  direccion: {...nuevoUsuario.contacto.direccion, calle: "MiCalle", localidad: "MiLocalidad", pais: "MiPais"},
};


console.log(nuevoUsuario);
console.log(usuarios[1]);
 