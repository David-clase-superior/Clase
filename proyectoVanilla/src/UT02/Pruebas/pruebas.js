"use strict";

function comprobarIMC (masa, altura) {
    let imc = masa / (altura * altura);
    return imc;
};

const sumarBien = (...numeros) => {
    const sonNumeros = numeros.every((valor, indice) => {
        return !isNaN(valor);
    });

    if(sonNumeros){
        return numeros.reduce((acc,valor,indice) => {
            return acc += valor
        });
    };
}

const validarNumeros = (...numeros)=>{
    return numeros.every((v) => {
        console.log(!isNaN(v))
    })
}

const validacion =(...numeros) => {
    return numeros.every((v) => {
        return typeof v === "number"
    })
}

export {comprobarIMC, sumarBien,validarNumeros,validacion};

