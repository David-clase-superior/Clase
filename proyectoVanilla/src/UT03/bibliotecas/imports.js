"use strict";

const textoMayusculas = ((texto)=>{
    console.log(texto.map((v)=>{
        return v.toUpperCase();
    }))
});

const textoInvertido = ((texto) =>{
    return console.log(texto.reverse());
});

const mostrarIdNombre = (usuariosId)=>{
    usuariosId.map((v)=>{
        console.log(`usuario: ${v.id}, tiene el nombre de ${v.nombre}.`);
    });
};

const filtrarNumeros = (numeros) =>{
    console.log(numeros.filter((v) =>{
        return v > 5
    }));
};

const mayoresDeEdad = (usuarios) => {
    return usuarios.filter((v) => {
        return v.preferencias.edad > 18;
    });
};

const correoYahoo = (usuarios) => {
    return usuarios.filter((v) => {
        return v.contacto.correoelectronico.toLowerCase().includes("yahoo")
    });
};

const preferenciasUsuario = (usuarios) => {
    return mayoresDeEdad(usuarios).filter((v) => {
        return v.preferencias.tema.toLowerCase() === "claro" && v.contacto.direccion.pais.toLowerCase() === "españa";
    })
};
const validacionNumeros = (...numeros) => {
     return numeros.every((v) => {
        return !isNaN(v);
     })
};
const sumaNumeros = (numeros) => {
    if (!validacionNumeros(...numeros)){
        console.log('Error');
    }else{
        return numeros.reduce((acc,v) =>{
            return acc + v;
        },0)
    }
}

export{sumaNumeros, preferenciasUsuario, correoYahoo, mayoresDeEdad, filtrarNumeros, textoMayusculas, textoInvertido, mostrarIdNombre};