"use strict";

const textoMayusculas = ((texto)=>{
    console.log(texto.map((v)=>{
        return v.toUpperCase();
    }))
});

const textoInvertido = ((texto) =>{
    return console.log(texto.reverse());
});

const mostrarIdNombre = (usuarios)=>{
    usuarios.map((v)=>{
        console.log(`usuario: ${v.id}, tiene el nombre de ${v.nombre}.`);
    });
};

const filtrarNumeros = (numeros) =>{
    console.log(numeros.filter((v) =>{
        return v > 5
    }));
};

export{filtrarNumeros, textoMayusculas, textoInvertido, mostrarIdNombre};