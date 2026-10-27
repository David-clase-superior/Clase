import { validacion , multiplicar, tablas} from "./pruebas.js";
"use strict";




console.log(validacion(2,2,2,2,2));

multiplicar("a");
tablas("a", multiplicar);

const facturas = [124, 48, 268];
const porcentajes = [20,15,10];

const curso = {

    curso: "aquí el nombre del curso",

    año: 2026,

    descripcion: "aquí la descripción del curso",

    alumnos: [], // array vacío con los alumnos del curso.

  };

const mostrarInforme = (curso) =>{
    for(let propiedades in curso){
        console.log(`${propiedades}: ${curso[propiedades]}`);
    }
};
mostrarInforme(curso);
/*
Ejercicio 2 - Recorriendo (objetos)
Crea un objeto JSON denominado discente que tenga las siguientes propiedades: id, nombre,
apellidos, aficiones (que será un array de string) y notas (que será un objeto JSON con las
propiedades primera, segunda y tercera con las notas de cada evaluación).
Añade los siguientes métodos:
• calcularMedia, que calculará la nota media de las tres evaluaciones,
• imprimirAficiones, que imprimirá pos consola las aficiones del alumnado e
• imprimirInforme, que imprime por consola un informe completo.
Las impresiones deben hacerse debidamente formateadas.
 */