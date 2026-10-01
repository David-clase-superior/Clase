"use strict";
//Ejercicio 1
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

/*Funcion Monolitica

const sumarFeos = (...numeros) => { //Rest
    const sonNumeros = numeros.every((valorNumero,i,a) => {
        return !isNaN(numeros);
        
    });     //Recibe una funcion flecha como parametro
    //console.log(sonNumeros); //Comprobacion si funciona
    if(sonNumeros){
        return numeros.reduce((acumulador,v,i,a) => {
            return (acumulador += v);
        });
    }
};
*/
const comprobarNumeros = (num = []) => {
    
    if(Array.isArray(num)){
        return num.every((v,i,a) => {
            return !isNaN(v);
        });
    }
        
};

const sumarFeos = (...numeros) => {
    if(comprobarNumeros(numeros)){
        return numeros.reduce((acumulador, v, i ,a) => {
            return (acumulador += v);
        });
    }
};

//multiplicar

const multiplicarFeos = (...numeros) => {
    if(comprobarNumeros(numeros)){
        return numeros.reduce((acumulador, v, i ,a) => {
            return (acumulador *= v);
        });
    }
};

console.log(sumarFeos(1,2,3,4,5,6,"a"));








export{validarNumeros,sumarBien};