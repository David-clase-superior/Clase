"use strict";

function imc(masa, altura){
    return masa / (altura * altura);
}

function imprimirDuplicados(pasadas,numeroInicial){
        let contador = 1;
    for (let i = 0; i < pasadas; i++) {
        console.log(`Pasada: ${contador} ${numeroInicial}`);
        numeroInicial = numeroInicial *2;
        contador = contador + 1;
    }
}

function calcularFacturas(nombreProducto= "Producto_Generico", precioProducto = 100, impuestoProducto = 21){
        
    if(isNaN(precioProducto) || isNaN(impuestoProducto)){
        console.log(`Error. Número no válido`);
        return;
    }
    const precioFinal = precioProducto * (1 + impuestoProducto / 100);
    console.log(`${nombreProducto}, ${precioFinal}`);
}

function mesesDelAño(numeroMes){
    
    if(!Number.isInteger(numeroMes)){
        console.log("Error. Número no válido");
        return;
    }

    switch(numeroMes){
        case 1: console.log("Enero"); break;
        case 2: console.log("Febrero"); break;
        case 3: console.log("Marzo"); break;
        case 4: console.log("Abril"); break;
        case 5: console.log("Mayo"); break;
        case 6: console.log("Junio"); break;
        case 7: console.log("Julio"); break;
        case 8: console.log("Agosto"); break;
        case 9: console.log("Septiembre"); break;
        case 10: console.log("Octubre"); break;
        case 11: console.log("Noviembre"); break;
        case 12: console.log("Diciembre"); break;
        default: console.log("Número de mes fuera del rango"); break;
    }
}