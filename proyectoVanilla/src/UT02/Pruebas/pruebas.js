"use strict";

const validacion = (...numeros) => {
    if(numeros.every((v)=> !isNaN(v)) && numeros.length > 2){
        return numeros.reduce((acc,v) =>{
            return acc + v;
        })
    }else{
        console.log('No es un numero');
    }
}

const multiplicar = (numero) => {
    if(!isNaN(numero)){
        for (let index = 1; index <= 10; index++) {
            const resultado = numero * index;
            console.log(`${numero} * ${index} = ${resultado}`);
            
        }
    }else{
        console.log(`No le ha llegado un numero a la funcion multiplicar`);
    }
}

const tablas = (numero, funcion) =>{
    if(!isNaN(numero)){
        for (let index = numero; index >= 2; index--) {
        funcion(index);
    };
    }else{
        console.log(`Error de tablas`);
    }
    
};






export {validacion, multiplicar, tablas};

