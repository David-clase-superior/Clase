"use strict";
import { preferenciasUsuario, correoYahoo, mayoresDeEdad, filtrarNumeros, mostrarIdNombre, textoInvertido, textoMayusculas } from "../bibliotecas/imports.js";
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


let nuevoUsuario = { ...usuarios[0], nombre:"David"};
nuevoUsuario = {
  ...nuevoUsuario,
    preferencias: {
      ...nuevoUsuario.preferencias,
        tema: "Gris", idioma: "Latino", edad: 23
    },

    contacto: {
      ...nuevoUsuario.contacto,
        correoelectronico:"NoMolestes@gmail.com",
        telefono:"123456789",

        direccion: {
        ...nuevoUsuario.contacto.direccion,
        calle:"MiCalle",
        localidad:"MiLocalidad",
        pais:"MiPais"
        }
    }
};

const usuariosNuevos = {...usuarios, nuevoUsuario};

console.log(usuariosNuevos);

console.log(`-------------------`);

console.log('Usuarios > de 18 años');

console.log(mayoresDeEdad(usuarios));

console.log(`-------------------`);

console.log('Usuarios con correo de Yahoo');

console.log(correoYahoo(usuarios));

console.log(`-------------------`);

console.log('Usuarios con preferencias establecidas');

console.log(preferenciasUsuario(usuarios));