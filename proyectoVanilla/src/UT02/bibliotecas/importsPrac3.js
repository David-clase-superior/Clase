"use strict";

function validarNumeros(...numeros){
    return numeros.every((v, i) => {
        console.log(numeros + i);
    });
}

function sumarBien(...numeros){
    if(validarNumeros(numeros)){
        return numeros;
    }else{
        return console.log ("Hay un caracter");
    }
}

export{validarNumeros,sumarBien};